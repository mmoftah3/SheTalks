const express = require("express");
const path = require("path");
const fileupload = require("express-fileupload");

// //public folder path
let initial_path = path.join(__dirname, "public");

//create th express server
//set the public folder path to the static path
const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

//home route and in response send to home.html (the main html file)
app.get("/", (req, res) => {
  res.sendFile(path.join(initial_path, "home.html"));
});

app.listen("3000", () => {
  console.log("listening....");
});
