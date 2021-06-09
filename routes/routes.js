let express = require('express');
var router = express.Router();

/* Getting Login Info */
router.post('/GetLogininfo',(req,res)=>{
  let task= req.body.task;
  console.log(task)
  let Fname=" "+"Deep";
  let Lname=" "+"Manek";
  let UserGroup="Admin";
  let Name =Fname + Lname;
  console.log(Name);
  let user=JSON.stringify({
    "Name":Name,
    "UserGroup":UserGroup
  })
  res.send(user);
})

router.post('/calculator',(req,res) => {

    console.log('Got body:', req.body);
    let no1= JSON.parse(req.body.number1);
    let no2= JSON.parse(req.body.number2);
    let no3 =no1 +no2;
    console.log('answer :'+ no3);
    var data = JSON.stringify(
       { 
       "answer": no3
    }
    
    ); 
    res.send(data) 
 })
 
 router.get('/',(req,res) => {

  console.log('hello');
})


 module.exports=router;