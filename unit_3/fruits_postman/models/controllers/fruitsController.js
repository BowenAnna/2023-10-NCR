////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Fruit = require("../models/Fruit");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

////////////////////////////////////////
// Router Middleware
////////////////////////////////////////
// Authorization Middleware
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/users/login");
  }
});

/////////////////////////////////////////
// Routes
/////////////////////////////////////////
// Seed Route
  
  // INDUCES
  
  // Index
  router.get('/', (req, res) => {
    Fruit.find({username: req.session.username})
      .then((allFruits) => {
        res.status(200).json({allFruits})
      })
      .catch((err) => {console.error(err)
      res.json({err})
      res.status(400).json({err})
      });
  });
  
  // New
  
  // Delete
  router.delete('/:id', (req, res) => {
    Fruit.deleteOne({ _id: req.params.id })
      .then(deleteInfo => {
        console.log(deleteInfo)
        res.status(200).json({deleteInfo})
      })
      .catch((err) => {console.error(err)
        res.json({err})
        res.status(400).json({err})
        });
  })
  
  // Update
  router.put('/:id', (req, res) => {
    if (req.body.readyToEat === 'on') {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    Fruit.updateOne({ _id: req.params.id }, req.body)
      .then(updateInfo => {
        console.log(updateInfo);
        res.redirect(`/fruits/${req.params.id}`)
      })
      .catch((err) => {console.error(err)
        res.json({err})
        res.status(400).json({err})
        });
  })
  
  // Create
  router.post('/', (req, res) => {
    if (req.body.readyToEat === 'on') {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    req.body.username= req.session.username;
    Fruit.create(req.body)
      .then((createdFruit) => {
        res.status(200).json({createdFruit})
      })
      .catch((err) => {console.error(err)
        res.json({err})
        res.status(400).json({err})
        });
  });
  
  // Edit
  router.get('/:id/edit', (req, res) => {
    Fruit.findOne({ _id: req.params.id })
      .then(foundFruit => res.render('Edit',
        {
          fruit: foundFruit
        }))
        .catch((err) => {console.error(err)
          res.json({err})
          res.status(400).json({err})
          });
  })
  
  // Show
  
  router.get('/:id', (req, res) => {
    Fruit.findOne({ _id: req.params.id })
      .then((foundFruit) => {
        res.status(200).json({foundFruit});
      })
      .catch((err) => {console.error(err)
        res.json({err})
        res.status(400).json({err})
        });
  });

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;