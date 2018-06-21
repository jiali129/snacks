const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')

//console.log(jwt)
//定义接口
module.exports = function (app) {
    //首页商品列表的接口
    const goodsPath = path.resolve(__dirname + '/goodslist')

    app.get('/index/recommend.action', (req, res) => {
        //console.log(req.query) //get请求是存在在query上，post请求存在body上
        if (req.query > 5) {
            res.json({
                code: 1000,
                msg: '没有更多数据了呦~'
            })
        } else {
            let list = fs.readFileSync(goodsPath + `/list${req.query.page}.json`, 'utf-8')
            setTimeout(() => {
                res.json(list)
            }, 1000)
        }
    })
    const queryApi = require('./queryApi')
    //分类接口
    app.get('/api/catagory', (req, res) => { //自己封装静态服务器
        queryApi(`/index.php?ctl=goods_class&act=ajaxGetClassList&cid=${req.query.cid}`).then(data => {
            res.end(data)
        })
    })

    //注册接口
    app.post('/api/user/register', (req, res) => {
        let userpath = path.resolve(__dirname + '/user')
        let userlist = JSON.parse(fs.readFileSync(userpath + '/userlist.json', 'utf-8'))
        if (userlist.some(element => {
            return element.username == req.body.username
        })) {
            res.json({
                msg: 'failed',
                imfo: '该用户存在',
                code: 1
            })
            return
        }
        userlist.push(req.body)
        fs.writeFile(userpath + '/userlist.json', JSON.stringify(userlist), function (err) {
            if (err) {
                res.json({
                    msg: err,
                    code: 0
                })
            } else {
                res.json({
                    msg: 'success',
                    code: 1
                })
            }
        })

    })
    //登录接口
    app.post('/user/login', (req, res) => {
        let userpath = path.resolve(__dirname + '/user');
        let userlist = JSON.parse(fs.readFileSync(userpath + '/userlist.json', 'utf-8'));
        let flag = false; //判断用户名和密码是否匹配
        userlist.forEach(item => {
            if (item.username === req.body.username && item.password === req.body.password) {
                flag = true
            }
        })
        if (flag) {
            //加密
            let token = jwt.sign(req.body, 'JL', { expiresIn: 60 * 60 })
            res.json({
                msg: 'success',
                code: 1,
                token
            })
        } else {
            res.json({
                msg: '用户名或者密码错误',
                code: 0
            })
        }
        // console.log(req.body)

    })
    //购物车商品列表
    app.post('/api/goodslist', (req, res) => {
        jwt.verify(req.body.token, 'JL', function (err, decoded) {
            if (err) {
                res.json({
                    msg: err,
                    code: 0
                })
            } else {
                console.log(decoded)
                let goods = JSON.parse(fs.readFileSync(__dirname + '/cartlist/cartlist.json', 'utf-8'))

                res.json({
                    msg: 'success',
                    code: 1,
                    data: goods[decoded.username] || []
                })
            }
        })
    })
    //添加购物车
    app.post('/api/addcart', (req, res) => {
        //console.log(req.body)
        if (!req.body.token) {
            res.status(304)
            res.json({
                msg: '参数错误，必传字段token缺失',
                code: 2
            })
            return;
        }
        jwt.verify(req.body.token, 'JL', (err, decoded) => {
            if (err) {
                res.json({
                    msg: '登陆超时,请重新登陆',
                    code: '0'
                })
            } else {
                const cartpath = __dirname + '/cartlist/cartlist.json';
                let cartlist = JSON.parse(fs.readFileSync(cartpath, 'utf-8'))
                if (cartlist[decoded.username]) {
                    let flag = false; //判断商品是否已经存在
                    cartlist[decoded.username].forEach((item, index)=>{
                        if (item.wname == req.body.data.wname) {
                            ++item.count;
                            flag = true
                        }
                    })
                    if (!flag) {
                        let o = {
                            ...req.body.data,
                            count: 1
                        }
                        cartlist[decoded.username].push(o)
                    }
                } else {
                    cartlist[decoded.username] = [{count:1, ...req.body.data}];
                }

                fs.writeFile(cartpath, JSON.stringify(cartlist), (err) => {
                    if (err) {
                        res.json({
                            msg: '写入错误',
                            code: '0'
                        })
                    }
                    else {
                        res.json({
                            msg: '添加成功',
                            code: 1
                        })
                    }
                })

            }
        })
    })
    //修改购物车数量
    app.post('/api/cart/count',(req,res)=>{
        if (!req.body.token) {
            res.status(304) //只要下面node不报错，就是页面上的问题
            res.json({
                msg: '参数错误，必传字段token缺失',
                code: 2
            })
            return;
        }
        jwt.verify(req.body.token, 'JL', (err, decoded) => {
            if (err) {
                res.json({
                    msg: '登陆超时,请重新登陆',
                    code: '0'
                })
            } else {
                const cartpath = __dirname + '/cartlist/cartlist.json';
                let cartlist = JSON.parse(fs.readFileSync(cartpath, 'utf-8'))
                let goodslist = cartlist[decoded.username]

                //操作数据库（实际json文件）
                goodslist = goodslist.map((item,index)=>{
                   if(item.wname=req.body.goodsname){
                       item.count = req.body.count
                   }
                   return item    
                })
                cartlist[decoded.username] = goodslist

                fs.writeFile(cartpath, JSON.stringify(cartlist), (err) => {
                    if (err) {
                        res.json({
                            msg: '写入错误',
                            code: '0'
                        })
                    }
                    else {
                        res.json({
                            msg: '修改成功',
                            code: 1
                        })
                    }
                })

            }
        })
    })
    //删除购物车
    app.post('/api/cart/del',(req,res)=>{
        if (!req.body.token) {
            res.status(304)
            res.json({
                msg: '参数错误，必传字段token缺失',
                code: 2
            })
            return;
        }
        jwt.verify(req.body.token, 'JL', (err, decoded) => {
            if (err) {
                res.json({
                    msg: '登陆超时,请重新登陆',
                    code: '0'
                })
            } else {
                const cartpath = __dirname + '/cartlist/cartlist.json';
                let cartlist = JSON.parse(fs.readFileSync(cartpath, 'utf-8'))
                let goodslist = cartlist[decoded.username]
                //   console.log(req.body)
                //操作数据库（实际json文件）
                let delindex=[];
                let arr = [];
                goodslist = goodslist.map((item,index)=>{
                    //console.log(item.wname);
                    //let i = 
                    req.body.goodsname.map(val=>{
                                val.map((i,ind)=>{
                                    if(item.wname == i.wname){
                                        // console.log(index)
                                         delindex.push(ind)
                                     }
                                })       
                       
                    })
                    delindex.map((val,ind)=>{
                        //console.log(val)
                        if(index!=val){
                           // console.log(item)
                            arr.push(item)
                        }
                    })
                })
                cartlist[decoded.username] = arr
                fs.writeFile(cartpath, JSON.stringify(cartlist), (err) => {
                    if (err) {
                        res.json({
                            msg: '写入错误',
                            code: '0'
                        })
                    }
                    else {
                        res.json({
                            msg: '删除成功',
                            code: cartlist[decoded.username]
                        })
                    }
                })

            }
        })
    })
}
