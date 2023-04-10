const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/' ,(req, res) => {
  res.send('Hello World! Goodbye')
  // res.sendFile('index.html', {'root': 'public'})
});

app.listen(port, () => {
  // console.log(`App running on port ${ this.address().port }`);
  console.log(`App running on port ${ port }`);
});