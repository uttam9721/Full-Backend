const express = require('express');
const app = express();




app.set("view engine","ejs");
app





app.get('/',(req,res) => {
    res.send('welcome');
});

app.listen(3000,()=>{
    console.log("port running ")
})