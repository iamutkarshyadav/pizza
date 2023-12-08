const homeController = {
  index(_, res) {
    console.log("index function called"); // Log when the function is called
    Menu.find()
      .then(function (pizzas) {
        console.log("Menu.find() promise resolved"); // Log when the promise resolves
        if (pizzas.length === 0) {
          console.log("No pizzas found in the database.");
        } else {
          console.log("Pizzas from the database:", pizzas);
        }
        return res.render("home", { pizzas: pizzas });
      })
      .catch(function (error) {
        console.log("Menu.find() promise rejected"); // Log when the promise is rejected
        console.error("Error fetching pizzas:", error);
      });
  },
};

module.exports = homeController