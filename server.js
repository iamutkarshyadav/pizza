// create express server
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const mongoose = require("mongoose");


const url = "mongodb://0.0.0.0:27017/pizza"; // Change this line
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection
  .once("open", () => {
    console.log("Database connected...");
  })
  .on("error", (err) => {
    console.log("Connection failed...", err);
  });
app.use(express.static("public"));



app.use(expressLayouts);
app.set("views", path.join(__dirname, "/resources/views")); // Fix the typo here
app.set("view engine", "ejs");



require("./routes/web")(app);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
