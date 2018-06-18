const express = require('express');
const apilist=require('./apilist');
let app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.json())
app.all('*',function(req,res,next){
   res.header({
       'Access-Control-Allow-Origin':'http://localhost:8080', //cors
       //Accept-Content':'application/json' //返回必须是json格式 如果想返回其他格式要写，/plain/text
       "Access-Control-Allow-Headers":'Content-Type,Authorization'  //支持多个请求头时
    })
   next()
})
apilist(app)

app.listen('3000',function(){  
    console.log('server start at:3000')
})