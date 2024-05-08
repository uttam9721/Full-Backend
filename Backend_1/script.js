const express = require('express')
const app = express()



//this line use to read json data 
app.use(express.json());


// this is  use to checkout form data 
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) { 
  res.send('Hello World')
})
app.get('/about', function (req, res) {
    res.send('Hello about')
  })
  app.get('/profile', function (req, res) {
    res.send('Hello profile')
  })
app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send('Something broke');
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})