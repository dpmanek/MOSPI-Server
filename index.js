const express = require('express');
const app = express();
const port =8081;
const routes=require('./routes/routes')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("",routes)
app.listen(port,()=>{
    console.log('Server is running on port '+port)
})