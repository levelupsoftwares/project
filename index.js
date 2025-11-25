const express =require('express');
const app = express();
const path = require('path')
const fs = require('fs');

 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(express.static(path.join('__dir','/public')))
 app.set('view engine','ejs');

 app.get('/',(req,res)=>{
    
    fs.readdir(`./files`,(err,files)=>{
       res.render('index',{files: files})
    })
 })
 app.post('/create',(req,res)=>{
   console.log(req.body)
 })

 app.listen(3000)