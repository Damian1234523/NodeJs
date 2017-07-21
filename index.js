const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Dude it is working')
})

app.listen(9001, function () {
  console.log('app listening on port 9001! it is over 9000!!!')
})