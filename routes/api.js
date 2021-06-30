const express = require('express');
const app = express();
const port =8083;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use("",routes)
 
   app.post('/user',(req,res) => {
   
    console.log('Got body:', req.body);
 

    var data = 
    JSON.stringify({ 
        First_Name:"Shweta1",
        Last_Name:"Temkar",
        User_Group:"Admin"
       })
    
 
    res.send(data) 
 
   })


app.listen(port,()=>{
    console.log('Server is running on port '+port)
})