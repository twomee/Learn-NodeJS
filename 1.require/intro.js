const fs = require('fs');
const os = require('os');


//read files in current directory
fs.readdir('./', (err, result) => { 
    console.log(result);
});

//write file in current deirectory
fs.writeFile('./test.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('Created file!');
});


//write file with support on home directory
const homeDirectory = os.homedir();
fs.writeFile(`${homeDirectory}/test.txt`, 'Hello World!', (err) => {
  if (err) throw err;
  console.log('Created file!');
});