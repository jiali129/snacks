
let http = require('http')
//https://m.gome.com.cn/index.php?ctl=goods_class&act=ajaxGetClassList&cid=17951828

function queryApi(url) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'm.gome.com.cn',
            port: 80,
            path: url,
            method: 'GET',
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        let data = ''
        const req = http.request(options, (res) => {
            console.log(`STATUS: ${res.statusCode}`);
            res.setEncoding('utf8');
            res.on('data', (chunk) => { //监听接收
                data += chunk
            });
            res.on('end', () => { // 没有数据的时候触发
                resolve(data)
                console.log('No more data in response.');
            });
        });

        req.on('error', (e) => {
            reject(`problem with request: ${e.message}`);
        });

        // write data to request body
        req.end();
    })
}

module.exports = queryApi
