require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 3003;
const pokemons = require("./models/pokemons");
const mongoose = require('mongoose');
const Pokemon = require("./models/Pokemon");

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//connecting with mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.once('open', ()=> {
    console.log('Connected to Mongo');
});

// grabs the url incoded body and decodes it for you
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.get("/",(req,res)=>{
    res.send("Welcome to the Pokemon App!")
})

//Index
app.get("/pokemons", (req, res)=> {
    Pokemon.find({})
    .then((allPokemons)=>{
        res.render("Index", {pokemons:allPokemons})
    })
    .catch((err) => console.error(err));
      });

//New
app.get('/pokemons/new', (req,res)=>{
    res.render('New')
})

//Create
app.post('/pokemons', (req, res) => {
    Pokemon.create(req.body)
    .then((createdPokemon) => {
        res.redirect('/pokemons')
    }) 
    .catch((err) => console.error(err));
});

//Show
app.get('/pokemons/:id', (req, res) => {
    Pokemon.findOne({_id: req.params.id})
    .then((foundPokemon) => {
        res.render('Show', {
        pokemon: foundPokemon 
    })
     })
     .catch(err => console.error(err))
});

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})