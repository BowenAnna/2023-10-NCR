const express = require('express');
const fruits = require('./models/fruits.js')
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/fruits/', (req, res) => {
    res.render('Index', {fruits: fruits});
});

// app.get('/fruits/:index', (req, res) => {
//   res.render('Show');
// });

app.get('/fruits/:indexOfFruitsArray', function(req, res){
  res.render('Show', { //second param must be an object
      fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
}); 

app.listen(3000,() => {
    console.log('listening');
});