//create a dir via documantaion code
const fs = require('fs');

fs.mkdir('test', { recursive: true }, (err) => {
    if (err) throw err;
  });

  //remove the directory i created above
fs.rmdir('test', (err) => {
  if (err) throw err;
});