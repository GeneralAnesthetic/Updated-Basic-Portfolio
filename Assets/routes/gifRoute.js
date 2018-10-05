var GIFEncoder = require("gifencoder");
var encoder = new GIFEncoder(854, 480);
var JPEGEncoder = require("jpg-stream/encoder");
// var pngFileStream = require("png-file-stream");
var Canvas = require("canvas");
var fs = require("fs");
var routes = require("/htmlRoutes.js");

module.exports = function(app) {
  app.post("../portfolio.html", function(req, res) {
    jpegFileStream("../portfolio.html");
    // pngFileStream("test/**/frame?.png")
    fs.createReadStream("in.jpg")
      .pipe(new JPEGDecoder())
      .pipe(encoder.createWriteStream({ repeat: -1, delay: 500, quality: 10 }))
      .pipe(fs.createWriteStream("myanimated.gif"));

    var GIFEncoder = require("gifencoder");
    var Canvas = require("canvas");

    var encoder = new GIFEncoder(320, 240);
    // stream the results as they are available into myanimated.gif
    encoder.createReadStream().pipe(fs.createWriteStream("myanimated.gif"));

    encoder.start();
    encoder.setRepeat(0); // 0 for repeat, -1 for no-repeat
    encoder.setDelay(500); // frame delay in ms
    encoder.setQuality(10); // image quality. 10 is default.

    // use node-canvas
    var canvas = new Canvas(320, 240);
    var ctx = canvas.getContext("2d");

    // red rectangle
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0, 0, 320, 240);
    encoder.addFrame(ctx);

    // green rectangle
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(0, 0, 320, 240);
    encoder.addFrame(ctx);

    // blue rectangle
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(0, 0, 320, 240);
    encoder.addFrame(ctx);

    res.send(encoder.finish());
  });
};
