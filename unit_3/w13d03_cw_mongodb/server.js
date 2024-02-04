require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const fruits = require('./models/fruits.js');
const Fruit = require('./models/Fruit.js');
const vegetables = require('./models/vegetables.js');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  });

  mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
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
        res.render('Index', {fruits: allFruits});
    })
   .catch((err)=>console.error(err))
});

app.get('/vegetables', (req, res) => {
    res.render('./subfolder/Index', {vegetables: vegetables});
});

//New 
app.get('/fruits/new', (req, res)=>{
res.render('New')})

app.get('/vegetables/new', (req, res)=>{
    res.render('./subfolder/New')})
//Delete

//Update

//Create
app.post('/fruits', (req, res)=>{
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
    vegetables.push(req.body);
    console.log(vegetables);
    res.redirect('/vegetables');
});

//Edit

//Show
app.get('/fruits/:id', function(req, res){
    Fruit.findOne({ _id: req.params.id})
    .then((foundFruit)=>{
        res.render('Show', { 
            fruit: foundFruit
        });
    })
    .catch(err=>console.error(err))
}); 

app.get('/vegetables/:indexOfFruitsArray', function(req, res){
    res.render('./subfolder/Show', { //second param must be an object
        vegetable: vegetables[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
  }); 

app.listen(3001,() => {
    console.log('listening');
});