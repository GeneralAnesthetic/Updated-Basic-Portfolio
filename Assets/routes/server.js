var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8000;
// var obj = {
//   name: data.name,
//   photo: data.photo,
//   scores: data.scores
// };
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require(path.join(__dirname, "/htmlRoutes.js"))(app);

var server = app.listen(app.get("port"), function() {
  var port = server.address().port;
  console.log("Magic happens on port " + port);
});

var smtpTransport = nodemailer.createTransport(
  smtpTransport({
    service: "MSN",
    auth: {
      user: "brainnovocaine@msn.com",
      pass: "Jacobite1"
    }
  })
);

app.post("/send-email", function(req, res) {
  var mailOptions = {
    from: '"Portfolio" <brainnovocaine@msn.com>', // sender address
    to: "brainnovocaine@msn.com", // list of receivers
    subject: "Request ", // Subject line
    text: req.body.to // plaintext body
  };
  smtpTransport.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });

  res.redirect("/");
});

// app.require("/data/friends.js");
// app.require("/routes/htmlRoutes");
// app.require("/public/friendsPage");
// app.require("/public/index");

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
