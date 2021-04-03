//ADD NEW MIDDLEWARE IN APP.JS=============================
//IN ORDER TO GRAB THE DATA ON THE SERVER WHEN WE MAKE A request, OR INSIDE A
//REQUEST HANDLER
//use express json parser middleware
app.use(express.static("public"));
app.use(express.json());

//WHAT DOES THIS DO?====================================
//WHEN YOU SEND A REQUEST WITH CERTAIN JSON DATA,
//BASICALLY IT TAKES THAT JSON DATA (THAT COMES ALONG W/ REQUEST),
//AND PASSES IT INTO JAVASCRIPT OBJECT
//SO WE CAN USE ITS DATA INSIDE THE CODE
// ** IT ATTACHES THAT OBJECT WITH THAT DATA TO THE REQUEST OBJECT, SO WE CAN ACCESS IT
//IN OUR REQ HANDLER
//YOU CAN ACCESS IT BY REQ.BODY

//controllers/authController.js
module.exports.login_post = (req, res) => {
  console.log(req.body);
  //use destructuring
  const { email, password } = req.body;
  //also same as
  const email = req.body.email;
  const password = req.body.password;
};

//USER MODEL----------------------------------------------------
//models/user.js

const mongoose = require('mongoose');
cont userSchema = new mongoose.Schema({
  //objects schema here
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true //lowercase before we savee it in the database
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  }

});

const User = mongoose.model('user', userSchema);

module.exports = User;

//now you can use this model inside different controller functions
//to interact with the database
//interact with the user collection in the database to either save, create, delete,
//you can use this User model to do that.


//GET USER MODEL AND DO SOMETHING IN CONTROLLER------------------------------
//now you can create new User model inside this file
//CONTROLLERS/AUTHCONTROLLER.JS

//wait until User.create complete and promise has been resolved.
//since we are using await, this needs to be async function
const User = require('../models/User');

module.exports.signup_post =  async (req, res) => {
  console.log(req.body);
  //use destructuring
  const { email, password } = req.body;
 
 try {
   //save created model inside a variable user
    const user = await User.create({
      //pass in objects here
      //defines User right here using imported User schema
      //properties we define here must match the schema defined/created in User Model
      email: email,
      password: password
    });

    //indicates this response is a success & created new user, and send the response
    //in a json format
    res.status(201).json(user);

 } catch (err){
    console.log(err);
    res.status(400).send('error, user not created');
 }
};

