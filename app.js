var express = require('express');
var app = express();

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);


app.use(express.static('src'));

app.listen(3000, function () {
  console.log('Servidor escuchando en el puerto 3000');
});
