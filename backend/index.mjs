import express from "express";
import mysql2 from "mysql2"

const app = express() 
const port = 3000; 

app.get("/",(request,response)=>{
    response.send("hi im from backend")
})


let connection = mysql2.createConnection({
    host: "localhost",
    user: "surya",
    password: "965231",
    database: "db"
 });

connection.connect((err)=>{
    if(err){
        console.log("err in database connection");
    }else{
        console.log("database connected");
    }
})

app.listen(port,()=>{
    console.log(`server running from port ${port}`);
})





