const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

run().catch(console.dir);

app.use(express.static("public"));
app.use(expressLayouts);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

// Initialize express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "layouts/layout");

require("./routes/web")(app);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));