require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 3003;
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Flight = require("./models/Flight");

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//connecting with mongoose
mongoose.connect(process.env.MONGO_URI);
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
    res.send("Welcome to the Flight App!")
})

//Index
app.get('/flights', (req, res) => {

    Flight.find({})
      .then((allFlights) => {
        res.render('Index', { flights: allFlights });
      })
      .catch((err) => console.error(err));
  });

// New

app.get('/flights/new', (req, res) => {
    const newFlight = new Flight();

    const departureAirport= newFlight.airport
      res.render('New', {departureAirport});
  
    })
  
  //Show
    app.get('/flights/:id', (req, res) => {
      Flight.findOne({ _id: req.params.id })
        .then((foundFlight) => {
          res.render('Show', {
            flight: foundFlight
          });
        })
        .catch(err => console.error(err))
    });
  
    //Edit
    app.get('/flights/:id/edit', (req, res) => {
      Flight.findOne({ _id: req.params.id })
        .then(foundFlight => res.render('Edit',
          {
            flight: foundFlight
          }))
        .catch(err => console.error(err));
    })
    
  
  //Update
    app.put('/flights/:id', (req, res) => {
      
      Flight.updateOne({ _id: req.params.id }, 
        { $push: { destinations: req.body } })
        .then(updateInfo => {
          console.log(updateInfo);
          res.redirect(`/flights/${req.params.id}`)
        })
        .catch(err => console.error(err));
    })
  
  //Post
  app.post('/flights', (req, res) => {
     
      Flight.create(req.body)
        .then((createdFlight) => {
          res.redirect('/flights')
        })
        .catch((err) => console.error(err));
        
    });

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})