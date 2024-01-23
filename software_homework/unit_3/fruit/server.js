const express = require('express');
const fruits = require('./models/fruits.js')
const app = express();

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(3000,() => {
    console.log('listening');
});