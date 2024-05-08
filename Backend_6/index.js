// How to use bcrypt for password encryption or decryption 

const express =require('express');
const app = express();
const bcrypt = require('bcrypt');


app.get("/",(req,res)=>{
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash("myPlaintextPassword", salt, function(err, hash) {
           console.log(hash);
        });
    });
})


