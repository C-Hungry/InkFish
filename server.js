const express = require('express');
const app = express();

app.use(express.static('publish'));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

const server = app.listen(8080, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('node server listening at http://%s:%s', host, port)
}) 