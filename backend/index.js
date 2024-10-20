const fs = require("fs")

console.log("1");

fs.readFile("index.txt","utf-8",(err,result)=>{
    console.log(result);
})

console.log("2");
console.log("3");

// here we can how synchrnous and asynchronous are working 
