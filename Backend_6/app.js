//How to use cookie

const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const cookie= require('cookie');

app.use(cookieParser());


app.get("/",(req,res)=>{
    res.cookie("name","uttam");
    res.send("done")
})

app.get("/read",(req,res)=>{
    console.log(req.cookies);
    res.send("done cookie")
})

// How to use bcrypt for password encryption or decryption 
//$2b$10$2bNXZe/MhZTcWElIElFPMOrCL6Ad5M/vizl9SgShhad.G0UAhQGgy
// password matched


app.get("/hash",(req,res)=>{
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("myPlaintextPassword", salt, function(err, hash) {
           console.log(hash);
        });
    });
})

app.get("/dec",(req,res)=>{
    bcrypt.compare("myPlaintextPassword", "$2b$10$2bNXZe/MhZTcWElIElFPMOrCL6Ad5M/vizl9SgShhad.G0UAhQGgy", function(err, result) {
        console.log(result);
});
});

//How to work jwt 
//JSON Web Tokens (JWT) are an open standard, which is defined in JSON Web Token (JWT) Specification RFC 7519. They securely represent claims between two parties.

app.get("/jwt",(req,res)=>{
  let token=  jwt.sign({email:"uttam7@gmail.com"},"secret");
  res.cookie("token",token);
  res.send("done");
})


app.get("/token",(req,res)=>{
  let data=  jwt.verify(req.cookies.token,"secret");
    console.log(data);
})


app.listen(3000,()=>{
    console.log("listening on port 3000");
});