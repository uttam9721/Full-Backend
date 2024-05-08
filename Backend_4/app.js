const express = require('express');
const app = express();
const userModel=require('./usermodel');

app.get('/',(req,res)=>{
    res.send("Hello World");
})


app.get('/create',async(req,res)=>{
   let createduser = await userModel.create({
        name:"Uttam",
        email:"uttammaurya377@gmail.com",
        username:"uttam01"
    })
   res.send(createduser);
});

app.get('/update',async(req,res)=>{
    let updateduser= await userModel.findOneAndUpdate({username:"harsh"},{name:"uttam"},{new:true})
    res.render(createduser);
     })

app.get("./read",async(req,res)=>{
    let users =await userModel.findOne({username:"uttam"});
    console.log(users);
})

app.get("./delete",async(req,res)=>{
        let users=await userModel.findOneAndDelete({username:"uttam"},{name:"maurya"})
        res.render(users);
})
   
app.listen(3000,()=>{
    console.log("listening on port 3000")
})

