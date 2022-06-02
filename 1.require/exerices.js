//create a file in current folder and show all files in folder
const fs = require('fs');
fs.writeFile('./my_file.txt', 'i did it!', (err) => {
    if (err) throw err;
    console.log('Created file!');
    fs.readdir('./', (err, result) => { 
        console.log(result);
    });
});
