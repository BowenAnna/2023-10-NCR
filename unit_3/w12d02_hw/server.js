const express = require("express");
const app = express();
let bottle_count=99;

app.get('/', (req, res)=>{
    res.send(`
    <h1>${bottle_count} Bottles of beer on the wall</h1> 
    <br/>
    <a href="/${bottle_count - 1}">Take one down, pass it around</a>
  `);
});


app.get(`/:number_of_bottles`, (req,res)=>{
    const {number_of_bottles} = req.params;
    const bottles_left = parseInt(number_of_bottles);
    if(bottles_left===0){
        res.send(`
      <h1>No more bottles of beer on the wall</h1>
      <a href="/">Start over</a>
    `);
  } else {
    res.send(`
      <h1>${bottles_left} Bottles of beer on the wall</h1>
      <a href="/${bottles_left - 1}">Take one down, pass it around</a>
    `);
  }
});

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})