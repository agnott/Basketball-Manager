var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Begin server
app.listen(process.env.PORT || 8080, function () {
  console.log(`Example app listening on port ${process.env.PORT || 8080}!`);
});
