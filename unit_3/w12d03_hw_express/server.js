const express = require('express');
const app = express();
const port = 3002;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get("/", (req, res)=>{
    res.send("Welcome to Mario Characters List")
})

//Index
app.get("/characters", (req, res)=>{
    res.render("Index",{marioCharacters:marioCharacters})
});

//New
app.get('/characters/new', (req, res)=>{
    res.render('Show', { //second param must be an object
        marioCharacters: marioCharacters[req.params.new] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]})})
    })})

app.listen(port, ()=>{
   console.log(`Listening on port ${port}`)
})