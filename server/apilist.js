const fs = require('fs')
const path = require('path')
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
    const queryApi=require('./queryApi')
    //分类接口
    app.get('/api/catagory',(req,res)=>{ //自己封装静态服务器
        console.log(req.query)
         queryApi(`/index.php?ctl=goods_class&act=ajaxGetClassList&cid=${req.query.cid}`).then(data=>{
             res.end(data)
         })
    })
   //登录接口
   app.post('/user/login',(req,res)=>{
       console.log(req.body)
       res.end('1')
   })
}
