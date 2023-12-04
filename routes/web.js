const authController = require("../app/http/controllers/authController");
const homeController = require("../app/http/controllers/homeController");
const cartController = require("../app/http/controllers/customers/cartController");


// Path: routes/web.js (updated)
function initRoutes(app) {
  app.get("/", homeController().index);
  app.get("/cart", cartController().index); // cart page
  app.get("/login", authController().login);
  app.get("/register", authController().register);

}

module.exports = initRoutes;
function initRoutes(app) {
  app.get("/", (req, res) => {
    res.render("home");
  });
  app.get("/cart", (req, res) => {
    res.render("customers/cart");
  });

  app.get("/login", (req, res) => {
    res.render("auth/login");
  });

  app.get("/register", (req, res) => {
    res.render("auth/register");
  });
}

module.exports = initRoutes;
