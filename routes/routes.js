let express = require('express');
var router = express.Router();

/* Getting Login Info */
router.post('/GetLogininfo',(req,res)=>{
  let task= req.body.task;
  console.log(task)

/* AXIOS CALL - REST API */

/* Get Fname, Lanme */

/* ----------------- */

  let Fname=" "+"Deep";
  let Lname=" "+"Manek";
  let UserGroup="Admin";
  let Name =Fname + Lname;
  console.log(Name);
  let user=JSON.stringify({
    "Name":Name,
    /* "Name":'', */
    "UserGroup":UserGroup
  })
  res.send(user);
})

 module.exports=router;