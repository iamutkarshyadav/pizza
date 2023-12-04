// create express server
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");



// set static files
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("home");
});

// set template engine

app.use(expressLayouts);
app.set("views", path.join(__dirname, "/resources/views")); // Fix the typo here
app.set("view engine", "ejs");

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
