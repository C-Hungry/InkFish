const express = require('express');
const bodyParser = require('body-parser')
const register = require('./schemas/register');
const app = express();

// app.use(express.static('publish'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Token, Uid');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/account', register);

const server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('node server listening at http://%s:%s', host, port)
})