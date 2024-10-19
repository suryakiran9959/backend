import express from "express";
import mysql2 from "mysql2";
import cors from "cors"

const app = express();
const port = 9999;
app.use(express.json());
app.use(cors());



let connection = mysql2.createConnection({
  host: "localhost",
  user: "surya",
  password: "965231",
  database: "db"
});

connection.connect((err) => {
  if (err) {
    console.log("err in database connection");
  } else {
    console.log("database connected");
  }
});

app.get("/allusers", (request, response) => {
  let query = "select * from surya";
  connection.query(query, (err, result) => {
    if (err) {
      console.log("err in fetching users");
      response.send("error in fetching users");
    } else {
      console.log("data fetched successfully");
      response.json(result);
    }
  });
});

app.post("/adduser", (req, res) => {
  let { name, password } = req.body;
  console.log(req.body);
  
  // No need to include 'id' in the query, as it will auto-increment
  let query = "INSERT INTO surya(name, password) VALUES (?, ?)";
  
  connection.query(query, [name, password], (err, result) => {
    if (err) {
      console.log("error in adding data");
      res.send("error in adding data");
    } else {
      console.log("data inserted");
      res.send("data inserted successfully");
    }
  });
});







app.listen(port, () => {
  console.log(`server running from port ${port}`);
});
