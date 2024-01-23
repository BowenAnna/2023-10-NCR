const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('<h1>Hi there!</h1>');
})
app.get('/greeting', (req, res)=>{
    res.send('<h1>Hello, stranger!</h1>')
})

app.get('/greeting/:name', (req, res)=>{
    console.log(req. params);
    res.send("Hello,"+" " + req.params.name + "! It's so great to see you!");
})

app.get('/tip/:total/:percent', (req, res)=>{
    console.log(req.params);
    res.send("Based on the $"+req.params.total+" total and "+req.params.percent+"% tip, the tip will be $"+req.params.total*(req.params.percent/100))
})

app.listen(3000, function() {
    console.log("Listening on the port 3000")
})