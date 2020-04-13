const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({entended: true}));
app.get("/", function(req, res) {
    res.sendFile(__dirname +'/index.html');
})

app.post('/', function(req, res) {
    console.log(req.body);
    var num1 = req.body.num1;
    var num2 = req.body.num2;

    var result = num1 + num2;
    res.send("the result is: " + result + ". Thank you for using our service");
})

app.listen(3000, function() {
    console.log("listening on port 3000");
})