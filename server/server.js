const express = require('express');
const apilist=require('./apilist');
let app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.json())
app.all('*',function(req,res,next){
    res.header({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
    })

   next() 
})
apilist(app)

app.listen('3000',function(){  
    console.log('server start at:3000')
})

