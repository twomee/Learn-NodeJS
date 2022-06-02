//read directory with promise
// const util = require('util');
// const fs = require('fs');
// const readdir1 = util.promisify(fs.readdir);
// readdir1('.').then((results) => {
//   console.log(results);
// });

// //read directory with async await
// const readdir2 = util.promisify(fs.readdir);
// async function init() {
//   const result = await readdir2('./');
//   console.log(result);
// }
// init();

//promise with more than one parameter in callback
const dns = require('dns').promises;
const fs = require('fs').promises;
async function init() {
  const result = await dns.lookup('nodejs.org'); // { address:'104.20.22.46', family: 4 }
  const address = result.address;
  await fs.mkdir(address);
  const directories = await fs.readdir('./')
  console.log(directories);
} 
init();


//create directory from ip and print all father directories
// const dns = require('dns');
// const lookup = util.promisify(dns.lookup);
// const mkdir = util.promisify(fs.mkdir);
// const readdir = util.promisify(fs.readdir);
// async function init() {
// const result = await lookup('nodejs.org'); // { address:'104.20.22.46', family: 4 }
//   const address = result.address;
//   await mkdir(address);
//   const directories = await readdir('./')
//   console.log(directories);
// }
// init();