const express = require('express');
const app = express();
const path = require('path');


//use to line we can access the form data 
//this is an middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// this line use to for fetch frontend data like html css javascript dat like public images or etc in frontend ;
app.use(express.static(path.join(__dirname, 'public')));

//use to this line we can render the ejs 
app.set('view engine', 'ejs')


// this is basic routes 
app.get("/",function (req,res) {
    res.render("index");
});
app.get("/profile/:username",function (req,res) {
    //use to get user define name ;
    res.send(req.params.username);
});
app.get("/author/:username/:age",function (req,res) {
    //use to get user define name ;
    res.send(`welcome,${req.params.username} of age ${req.params.age}`);
});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})