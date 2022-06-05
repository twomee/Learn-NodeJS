//get requests
const express = require('express');
const app = express();
const logger = require('./middleware/routeLogging');
app.use(logger);
app.listen(3000, () => { 
    console.log('Example app listening on port 3000!'); 
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/moshe', (req, res) => {
  res.send('Hello Moshe!');
});

//post requests
app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/', (req, res) => {
  res.send('Hello POST!');
});

//handle few routes with html as response
const fs = require('fs');
const path = require('path');

app.listen(3002, () => {
  console.log('Example app listening on port 3002!');
});

app.get('/', (req, res) => {
  fs.createReadStream(path.join(__dirname,
'./static/index.html')).pipe(res);
});

app.get('/help', (req, res) => {
  res.send('Help page!');
});

//using the routing method
const help = require('./routes/help');
app.listen(3003, () => {
  console.log('Example app listening on port 3003!');
});

app.use('/help', help);

//dynamic url
const user = require('./modules/user');

app.listen(3004, () => {
  console.log('Example app listening on port 3004!');
});

app.use('/user', user);

app.get('/', (req, res) => {
  fs.createReadStream('./static/index.html').pipe(res)
});
