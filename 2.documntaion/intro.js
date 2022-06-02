//read dir with encoding hex
const fs = require('fs');
fs.readdir('./', {encoding: 'hex'}, (err, result) => {
  if (err) throw err;
  console.log(result); // [ '6170702e6a73', '746573742e747874' ]
});

//read file with no encoding
fs.readFile('./intro.js', (err, result) => {
  if (err) throw err;
  console.log(result);
});