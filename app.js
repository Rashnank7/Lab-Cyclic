var HTTP_PORT = process.env.PORT || 3000;

var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//  Route 1: URl with hostname and port
app.get("/", function(req, res) { 
  res.send(`<h1>Hello WEB322!</h1>`);
});



const server = app.listen(HTTP_PORT, () => {
  console.log(`Listening on port ${HTTP_PORT}`);
});