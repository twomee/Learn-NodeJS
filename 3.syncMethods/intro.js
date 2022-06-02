//read directory sync
const fs = require('fs');
console.log('Before readdir');
const result = fs.readdirSync('./');
console.log(`readdir is completed. Result: ${result}`);
console.log('After readdir');

//read directory sync with try catch
console.log('Before readdir');
try {
  const result = fs.readdirSync('./blahbla');
  console.log(`readdir is completed. Result: ${result}`);
} catch(error) {
  console.log('Error has occured!');
}
console.log('After readdir');