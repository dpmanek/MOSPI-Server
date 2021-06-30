let express = require('express');
var router = express.Router();

/* Getting Login Info */
router.post('/GetLogininfo',(req,res)=>{
  let task= req.body.task;
  console.log(task)

/* AXIOS CALL - REST API */

/* Get Fname, Lanme */

/* ----------------- */

  let Fname=" "+"Nikhil";
  let Lname=" "+"Patil";
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

/* Getting Report link */
router.post('/GetReport',(req,res)=>{
  let task= req.body.task;
  let report = req.body.report;
  // let state = req.body.state;
  // let year = req.body.year;

  console.log(task)
  console.log(report)
  // console.log(state)
  // console.log(year)

/* AXIOS CALL - REST API */
  
  let Report_link="https://niip/mospi/reports/"+report;          
  console.log(Report_link);
  let result=JSON.stringify({
    "Link":Report_link
  })
  res.send(result);
})


/* Getting Dataset search link */
router.post('/GetDataset',(req,res)=>{
  let task= req.body.task;
  let dataset = req.body.dataset;
  let state = req.body.state;
  let year = req.body.year;

  console.log(task)
  console.log(dataset)
  console.log(state)
  console.log(year)
  
/* AXIOS CALL - REST API */

  Dataset_link="https://mospi/datasets/"+dataset+"/"+state+"?="+year;
  console.log(Dataset_link);
  let result=JSON.stringify({
    "Link":Dataset_link
  })
  res.send(result);
})


router.post('/GetContactinfo',(req,res)=>{
  let task= req.body.task;
  //let name= req.body.name;  
  let dept= req.body.department;  
  let designation= req.body.designation;
  console.log(task)
  console.log(designation)
  console.log(dept)
  
 
 
  let Name=req.body.name;
  console.log(Name)
  let Phone="8880112188";
  let Email="hpnikhil17@gmail.com"
 
  let user=JSON.stringify({
    "Name":Name,
    "Phone":Phone,
    "Email":Email,
    "Designation":designation,
    "Department" :dept
 
  })
  res.send(user);
})


module.exports=router;