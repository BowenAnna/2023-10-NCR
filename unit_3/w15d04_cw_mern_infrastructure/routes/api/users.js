const express = require("express");
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// const ensureLoggedIn = require("../../config/ensureLoggedIn");
//You can protect specific routes inside your model routes and just pass it in the route you want protected


// POST /api/users <- base URL
router.post("/", usersCtrl.create);

//POST /api/users/login
router.post('/login', usersCtrl.logIn)

// Insert ensureLoggedIn on all routes that need protecting
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
