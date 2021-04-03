//mvc structure==================================
//router folder
//routes/authRoutes.js

const { Router } = require("express");
const router = Router();

//IN ORDER TO KEEP THE LOGIC SEPARATE,=======================
//ADD CONTROLLERS IN THE PARANTHESES

router.get("/signup", () => {});
router.post("/signup", () => {});
router.get("/login", () => {});
router.post("/login", () => {});

module.exports = router;

//controllers/authController.js=============================
module.exports.signup_get = (req, res) => {
  res.render("any view page here"); //render view
};

module.exports.signup_post = (req, res) => {
  res.render("signup");
};

module.exports.login_get = (req, res) => {
  res.send("user login"); //send text back
};

module.exports.login_post = (req, res) => {
  res.render("login: login.js in the view folder");
};

//ADD CONTROLLERS IN THE PARANTHESES of the route file=========================
const { Router } = require("express");
const authController = require("../controllers/authController.js");
const router = Router();

router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);
router.get("/login", authController.login_get);
router.post("/login", () => {});

//IN THE APP.JS - MAIN FILE=====================================
const authRoutes = require("./routes/authRoutes");

app.use(authRoutes);

//TYPICALLY WHEN YOU SEND A POST REQUEST FROM A BROSWER, IT'S NORMALLY=====================
//AFTER USER HAS SUBMITTED A FORM
//WHEN THEY SUBMIT TO THE SERVER, DATA THAT THEY ENTERED WILL BE SENT LIKE EMAIL & PASSWORD
//YOU CAN SIMULATE SENDING DATA USING POSTMAN
//https://www.geeksforgeeks.org/introduction-postman-api-development/
