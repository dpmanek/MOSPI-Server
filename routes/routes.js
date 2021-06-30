let express = require('express');
const axios = require('axios');
var router = express.Router();

/* Getting Login Info */
router.post('/GetLogininfo',(req,res)=>{
  let task= req.body.task;

/*  declaration of variables */
 let Fname, Lname, UserGroup, Name;
/* -------------------------------- */

/* AXIOS CALL - REST API */
axios.post('http://localhost:8083/user', {
  taskdetails: task,
})
.then(function (response) {
  console.log("DATA:  "+response.data);
  console.log("FirstName: "+response.data.First_Name);
  console.log("LastName: "+response.data.Last_Name);
  console.log("User Group: "+response.data.User_Group);

  Fname=" "+response.data.First_Name;
  Lname=" "+response.data.Last_Name;
  UserGroup=response.data.User_Group;
  Name =Fname + Lname;

  let user=JSON.stringify({
    "Name":Name,
    // "Name":'',
    "UserGroup":UserGroup
  })
  res.send(user);
})
.catch(function (error) {
  console.log(error);
});

/* ----------------- */


  // Fname=" "+"Deep";
/* 
  Fname=" "+global;
  Lname=" "+"Manek";
  UserGroup="Admin";
  Name =Fname + Lname;
  console.log(Name);



  let user=JSON.stringify({
    "Name":Name,
    // "Name":'',
    "UserGroup":UserGroup
  })
  res.send(user); */
})


 module.exports=router;