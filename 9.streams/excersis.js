//copy file to antoher file
const fs = require('fs');
const readStream1 = fs.createReadStream('./test.txt');
const writeStream1 = fs.createWriteStream('./out.txt');
readStream1.pipe(writeStream1);

//encrypt text file
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = '123456';
const key = crypto.scryptSync(password, 'SomeSalt', 32);
const iv = 'myIVstringisnice1'.toString('hex').slice(0, 16);
const readStream2 = fs.createReadStream('./test.txt');
const writeStream2 = fs.createWriteStream('./encrypted.txt');
const transformStream1 = crypto.createCipheriv(algorithm,key, iv)
readStream2.pipe(transformStream1).pipe(writeStream2)

//decrypt text file
const readStream3 = fs.createReadStream('./encrypted.txt');
const writeStream3 = fs.createWriteStream('./decryped.txt');
const transformStream2 = crypto.createDecipheriv(algorithm, key, iv)
readStream3.pipe(transformStream2).pipe(writeStream3)
