module.exports = function(app) {
  var arithmetic = require("./controllers/arithmeticController");
  var myToken = "8256ba5a40014ed318f8f22cc15227b579e341ef";
  app.route("/arithmetic").get(arithmetic.calculate);
};
