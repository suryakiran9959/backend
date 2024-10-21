const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
    fs.readFile("./data.txt", "utf-8", (err, data) => {
        const parsedData = JSON.parse(data || '{}');
        return res.json(parsedData);
    });
});
app.get("/:id", (req, res) => {
    fs.readFile("./data.txt", "utf-8", (err, data) => {
        const parsedData = JSON.parse(data || '[]'); // Parse the data into an array
        const id = Number(req.params.id); // Get the ID from the request parameters
        const user = parsedData.find((user) => user.id === id); // Find the user by ID
        if (user) {
            return res.json(user); // Send the user data if found
        } else {
            return res.status(404).json({ error: "User not found" }); // If user not found, return 404
        }
    });
});

app.listen(8888, () => {
    console.log("Server running on http://localhost:8888");
});

// here we take all the objects and get by typing 1 as id and get data 