import express from "express";

const app = express() 
const port = 3000; 

app.get("/",(request,response)=>{
    response.send("hi im from backend")
})

app.listen(port,()=>{
    console.log(`server running from port ${port}`);
})

// here just i created 
// server and an api of get method
