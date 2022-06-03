//read big text file
const httpServer = require('http').Server;
const fs = require('fs');
class MyServer extends httpServer {
  constructor() {
    super();
    this.listen(3000);
    this.on('request', this.requestHandler);
}  
  requestHandler(request, response) {
    const src = fs.createReadStream('./test.txt');
    src.pipe(response);
} }
const myServer = new MyServer();

//example of two stream in code
const readStream1 = fs.createReadStream('./test.txt');
const writeStream1 = fs.createWriteStream('./out.txt');
readStream1.pipe(writeStream1);

//transform stream
const zlib = require('zlib');
const readStream2 = fs.createReadStream('./test.txt');
const writeStream2 = fs.createWriteStream('./out.gz');
const gzip = zlib.createGzip();
readStream2.pipe(gzip).pipe(writeStream2);

//event on stream
const readStream3 = fs.createReadStream('./test.txt');
const writeStream3 = fs.createWriteStream('./out.txt');
readStream3.on('end', () => {
  console.log(`end!`);
});
writeStream3.on('pipe', (data) => {
  console.log(data);
});
readStream3.pipe(writeStream3);

//calculate file size by event on stream
const readStream4 = fs.createReadStream('./test.txt');
const writeStream4 = fs.createWriteStream('./out.txt');
let dataLength = 0;
readStream4.on('data', (chunk) => {
  dataLength += chunk.length;
})
readStream4.on('end', () => { // done
  console.log(`The length was: ${dataLength} bytes`);
});
readStream4.pipe(writeStream4);