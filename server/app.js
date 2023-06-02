const express = require("express");
const app = express();

// Middleware
const cors = require("cors");
const bodyparser = require("body-parser")

const PORT = 8000; 

app.get('/', (req,res) => {
    res.send("Helllloo")
});


app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
});