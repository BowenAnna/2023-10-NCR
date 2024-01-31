const express = require('express');
const fruits = require('./models/fruits.js');
const vegetables = require('./models/vegetables.js');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// grabs the url incoded body and decodes it for you
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// INDUCES
//Index
app.get('/fruits', (req, res) => {
    res.render('Index', {fruits: fruits});
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
    fruits.push(req.body);
    console.log(fruits);
    res.redirect('/fruits');
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
app.get('/fruits/:indexOfFruitsArray', function(req, res){
  res.render('Show', { //second param must be an object
      fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
}); 

app.get('/vegetables/:indexOfFruitsArray', function(req, res){
    res.render('./subfolder/Show', { //second param must be an object
        vegetable: vegetables[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
  }); 

app.listen(3001,() => {
    console.log('listening');
});