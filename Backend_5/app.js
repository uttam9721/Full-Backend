const express =require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');
const { name } = require('ejs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/read',async(req,res)=>{
  let users=await userModel.find();
  res.render("read",{users});
})

app.get('/edit/:userid',async(req,res)=>{
  let users=await userModel.findOne({_id:req.params.userid});
  res.render("edit",{users});
})

app.post('/update/:userid',async(req,res)=>{
  let {image,name,email}=req.body;
  let users=await userModel.findOneAndUpdate({_id:req.params.userid},{image,name,email},{new:true});

  res.redirect("/read");
})

app.get('/read',async(req,res)=>{
    let users=await userModel.find();
    res.render("read",{users});
  })
  
app.get('/delete/:id',async(req,res)=>{
    let users=await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");

   let createUser=await userModel.create({
        name,
        email,
        no
    })
    res.redirect("/read");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});