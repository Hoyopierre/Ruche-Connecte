const express = require('express')
const app = express()
//middleware
const cors = require("cors")
let data = "0";
let temperature = "0";
let humidite = "0";
let masse = "0";

var corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', function (req, res) {
    res.send('ruche connecté web services')
    console.log("request");

})

//http://localhost:8080/info
app.get("/info", function (req, res) {
// res.send("température:" + temperature + ", humidite: " + humidite + " , masse:" + masse);
   res.send(data);
    console.log("request2");
})

//http://localhost:8080/sendinfo/756/728/768
//app.get("/sendinfo/:tf/:hf/:mf/", function (req, res) {
app.get("/sendinfo/:data", function (req, res) {
  ///  temperature = req.params.tf;
   // humidite = req.params.hf;
  //  masse = req.params.mf;
    data = req.params.data;
    res.send('info posté');
     console.log("request3");


})

app.listen(8080, () => {
    console.log("app started");
})