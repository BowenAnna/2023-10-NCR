// const User = require("../../models/User");
// const jwt = require('jsonwebtoken');
// async function create(req, res){
//   try{
//     // Add the user to the database
//     const user= await User.create(req.body);
//     //token will be a string
//     const token=createJWT(user);
//     // Yes, we can use res.json to send back just a string
//     // The client code needs to take this into consideration
//     //Send token back to client
//     res.json(token);
//   }
//   catch (e){
//     // Client will check for non-2xx status code
//     // 400 = Bad Request
//     res.status(400).json(e);
//   }
// }

// //Helper function
// // function createJWT(user){
// //   return jwt.sign(
// //     //user is the data payload
// //     {user},
// //     process.env.SECRET,
// //     {expiresIn:'24h'}
// //   );
// // }
// function createJWT(user) {
//   return jwt.sign(
//     // data payload
//     { user },
//     process.env.SECRET,
//     { expiresIn: '24h' }
//   );
// }

// module.exports ={create};


//         // console.log("We are now in the backend in controllers");
//         // res.json({
//         //     user: 
//         //   {  name: req.body.name,
//         //     email:req.body.email}

//         // })

const User=require('../../models/User');
const jwt=require('jsonwebtoken');
const bcrypt = require ('bcrypt');



async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    //token will be a string

    const token=createJWT(user)
    res.json(token)

  } catch (e) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(e);
  }
}

async function logIn(req, res) {
  try {
    //Find the email the user typed in the frontend in out database
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    // console.log(req.body.password);
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.status(200).json( createJWT(user) ); // res.status(200).res.json( createJWT(user)
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

//Helper function
function createJWT(user){
  return jwt.sign(
    //user is the data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

module.exports = {
    create,
    logIn,
    checkToken
}