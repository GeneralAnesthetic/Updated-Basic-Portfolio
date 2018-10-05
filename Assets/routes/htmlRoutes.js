var path = require("path");
// var friends = require("../data/friends.js");
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../UpdatedIndex.html"));
  });
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../contact.html"));
  });
  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "../portfolio.html"));
  });
};
