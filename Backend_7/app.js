const express = require('express');
const app = express();

const userModel =require("./models/user");
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');


app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.render("index");
    
})


app.post('/create',async(req,res)=>{
    let {username,email,password,age} = req.body;

    bcrypt.genSalt(10,(err,salt)=>{
       bcrypt.hash(password,salt,async(err,hash)=>{
        // console.log(hash);  
    let createUser = await userModel.create({
            username,
            email,
            password:hash,
            age
            })

          let token=  jwt.sign({email},"uttam");
            res.cookie("token",token);
            res.send(createUser);
       })
    })
    

});

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",async(req,res)=>{
   let user= await userModel.findOne({email:req.body.email});
   if(!user) return res.send("something is wrong");

   bcrypt.compare(req.body.password,user.password,(err,result)=>{
    if(result){
        let token=  jwt.sign({email:user.email},"uttam");
            res.cookie("token",token);
        res.send("yes you can login")
    }
    else res.send("something is wrong ");
   })
})




//logout 
app.get("/logout",(req,res)=>{
    res.cookie("token","");
    res.redirect("/");
})




app.listen(3000,()=>{
    console.log("port is running on 3000");
});