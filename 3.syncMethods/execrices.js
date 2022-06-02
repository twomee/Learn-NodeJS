//create and remove directory with random text name -  sync
const fs = require('fs')
const randomString1= Math.random().toString(36).substring(7);

fs.mkdirSync(randomString1);
console.log("the directory created")
fs,fs.rmdirSync(randomString1)
console.log("the directory removed")

//create and remove directory with random text name - async
const randomString2 = Math.random().toString(36).substring(7);
fs.mkdir(randomString2, { recursive: true }, (err) => {
    if (err) throw err;
    console.log("the directory created")
    fs.rmdir(randomString2, (err) => {
        if (err) throw err;
        console.log("the directory removed")
    })
  });