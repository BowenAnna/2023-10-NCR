require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const fruits = require('./models/fruits.js');
const Fruit = require("./models/Fruit.js");
const Vegetable = require("./models/Vegetable.js");
const vegetables = require('./models/vegetables.js');
const PORT = 3001;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//connecting to mongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.once("open",()=>{
    console.log("Connected to Mongo")
  });

// grabs the url incoded body and decodes it for you
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// INDUCES
//Index
app.get('/fruits', (req, res) => {
    Fruit.find({})
    .then((allFruits)=>{
        res.render('./fruits/Index', {fruits: allFruits});
    })
   .catch((err)=>console.error(err))
});

app.get('/vegetables', (req, res) => {
    Vegetable.find({})
    .then((allVegetables)=>{
        res.render("./vegetables/Index",{vegetables: allVegetables});
    })
});

//New 
app.get('/fruits/new', (req, res)=>{
res.render('./fruits/New')})

app.get('/vegetables/new', (req, res)=>{
    res.render('./vegetables/New')})
//Delete

//Update

//Create
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    Fruit.create(req.body)
    .then((createdFruit)=>{
        res.redirect("/fruits")
    })
    .catch((err)=>console.error(err));
});

app.post('/vegetables', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
   Vegetable.create(req.body)
    .then((createdVegetable)=>{
        res.redirect("/vegetables")
    })
    .catch((err)=>console.error(err));
});

//Edit

//Show
app.get('/fruits/:id', function(req, res){
    Fruit.findOne({ _id: req.params.id})
    .then((foundFruit)=>{
        res.render('./fruits/Show', { 
            fruit: foundFruit
        });
    })
    .catch(err=>console.error(err))
}); 

app.get('/vegetables/:id', function(req, res){
    Vegetable.findOne({ _id: req.params.id})
    .then((foundVegetable)=>{
        res.render('./vegetables/Show', { 
            vegetable: foundVegetable
        });
    })
    .catch(err=>console.error(err))
  }); 

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
});