const express = require("express");

const port=4000;
const app= express();

//this is used for request and response(read data)
app.get("",(req,res)=>{
    res.send("<h1> hello world</h1>")
});


// this is basicllay used for creating server
app.listen(port,()=>{
    console.log(`Sever is listening at port: ${port}`);
});


//get -> read
//post -> we are sending data for creating
//put -> update
//delete
