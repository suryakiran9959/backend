import express from "express";
import mysql2 from "mysql2"

const app = express() 
const port = 3000; 

app.get("/",(request,response)=>{
    response.send("hi im from backend")
})

let connection = mysql2.createConnection({
    
})











app.listen(port,()=>{
    console.log(`server running from port ${port}`);
})



