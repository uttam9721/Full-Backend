//const cookieParser=require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


app.use(cookieParser());


app.get("/",()=>{
   let token = jwt.sign({email:"uttammaurya497@gmail.com"},"secret")
   console.log("token",token);
   console.log(token);
   res.send("done");
    });
         
    
app.get("/read",()=>{
   let data =  jwt.verify(req.cookies.token,"secret");
    console.log(data);
})





app.listen(3000,()=>{
    console.log("listening on port 3000");
});