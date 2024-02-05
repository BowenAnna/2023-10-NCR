const express = require("express");
const app = express();
const PORT = 3003;
const pokemons = require("./models/pokemons");
// const Index = require("./views/Index.jsx");
// const Show = require(".views/Show.jsx")

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// grabs the url incoded body and decodes it for you
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
//Index
app.get("/",(req,res)=>{
    res.send("Welcome to the Pokemon App!")
})

app.get("/pokemons", function (req, res) {
        res.render("Index", { pokemons: pokemons });
      });

//Show
app.get("/pokemons/:id", (req,res)=>{
    res.render("Show", {pokemon:pokemons[req.params.id]})
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})