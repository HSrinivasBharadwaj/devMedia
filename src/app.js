const express = require('express');
const app = express();

app.use("/",(req,res) => {
    res.send("Default Route")
})

app.use("/home",(req,res) => {
    res.send("Home Route")
})

app.use("/test", (req,res) => {
    res.send("Test Route")
})

app.listen(3000,() => {
    console.log("Listening on port 3000")
})