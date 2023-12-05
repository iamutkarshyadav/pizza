const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace this connection string with your MongoDB Atlas connection string
const url =
  "mongodb+srv://iamutkarshyadav1:akarshyadav1970@cluster0.59evwtt.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
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
