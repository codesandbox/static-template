//NODE AUTHENTICATION JWT
//NET NINJA

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const router = express.router();
//SERVE STATIC FILES LIKE CSS TO BROWSER, MIDDLEWARE=============
app.use(express.static("file_name_here, ex:public"));

//APP SET VIEW ENGINE===================
app.set("view engine", "ejs");

//database connection mongodb====================
//useNewUrlParser & other properties are for running without any
//deprecation warning or errors
const dbURI = "";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//routes=============================
//option 1
app.get("/", (req, res) => res.render("home"));
app.get("smoothies", (req, res) => res.render("smoothies"));

//option 2
const authRoutes = require("./routes/authRoutes");

app.use(authRoutes);
