//jshint esversion:6
require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
const _ = require("lodash");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.set("strictQuery", false);
// mongoose.connect("mongodb://localhost:27017/userDB", {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// userSchema.plugin(encrypt, {
//   secret: process.env.SECRET,
//   encryptedFields: ["password"],
// });

// const User = new mongoose.model("User", userSchema);

// Define routes for the authentication part
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

// app.get("/", function (req, res) {
//   Item.find({}, function (err, foundItems) {
//     if (foundItems.length === 0) {
//       Item.insertMany(defaultItems, function (err) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("default Item added Succesfully");
//         }
//       });
//       res.redirect("/");
//     } else {
//       res.render("list", { listTitle: "Today", newListItems: foundItems });
//     }
//   });
// });

app.get("/list",function(req,res){
  res.render("list", { listTitle: "Today"});
})
app.get("/about", function (req, res) {
  res.render("about");
});

// app.post("/register", function (req, res) {
//   const newUser = new User({
//     email: req.body.username,
//     password: req.body.password,
//   });
//   newUser.save(function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.render("secrets");
//     }
//   });
// });

// app.post("/login", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   User.findOne({ email: username }, function (err, foundUser) {
//     if (err) {
//       console.log(err);
//     } else {
//       if (foundUser) {
//         if (foundUser.password === password) {
//           res.render("secrets");
//         }
//       }
//     }
//   });
// });

// // Define routes for the to-do list part
// // mongoose.connect("mongodb+srv://saalim192:mongo123@cluster0.bjvbbjq.mongodb.net/todolistDB", {
// //   useNewUrlParser: true,
// // });

// const itemsSchema = new mongoose.Schema({
//   name: String,
// });
// const listSchema = new mongoose.Schema({
//   name: String,
//   items: [itemsSchema]
// });

// const Item = mongoose.model("Item", itemsSchema);
// const List = mongoose.model("List", listSchema);

// const item1 = new Item({
//   name: "Welcome",
// });

// const item2 = new Item({
//   name: "Hit the + button to add a new item.",
// });
// const item3 = new Item({
//   name: "<-- Hit this to delete an item.",
// });

// const defaultItems = [item1, item2, item3];

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server started : visit http://localhost:3000 ");
});
