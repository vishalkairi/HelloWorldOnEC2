const express = require('express');
const app =express();

app.get('/', (req,res)=>{
    res.status(200).json({"msg" : "Hello World"});

})


app.listen(80, ()=>console.log('Server started on 8081'));