
const express = require('express');
const apilist=require('./apilist');
const path = require('path')
let app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.json())

const ejs = require('ejs');
app.engine('html',ejs.__express);
app.set('view engine','html');
app.use(express.static(path.resolve(process.cwd()+'/../dist/')));

app.all('*',function(req,res,next){
    res.header({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
    })

   next() 
})
app.get('/index/',function(req,res,next){
    res.render('index',{title:'HTML'});
})
apilist(app)

app.listen('3000',function(){  
    console.log('server start at:3000')
})

