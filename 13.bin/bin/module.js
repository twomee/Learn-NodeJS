#!/usr/bin/env node
const fs = require('fs');
const crypto = require('crypto');
class EncryptionCLI {
  constructor() {
    this.algorithm = 'aes-256-ctr';
    this.password = 'Password used to generate key';
    this.key = crypto.scryptSync(this.password, 'SomeSalt', 32);
    this.iv = 'myIVstringisnice1'.toString('hex').slice(0, 16);
}
  encrypt(sourceFileName) {
    const destinationFileName = sourceFileName + '.encrypted';
    const readStream = fs.createReadStream(sourceFileName);
    const writeStream = fs.createWriteStream(destinationFileName);
    const encryptStream = crypto.createCipheriv(this.algorithm,
    this.key, this.iv);
        readStream.pipe(encryptStream).pipe(writeStream);
        writeStream.on('finish', this.onEnd);
    }

  decrypt(sourceFileName) {
    const destinationFileName = sourceFileName + '.decrypted';
    const readStream = fs.createReadStream(sourceFileName);
    const writeStream = fs.createWriteStream(destinationFileName);
    const decryptStream = crypto.createDecipheriv(this.algorithm,
    this.key, this.iv);
      readStream.pipe(decryptStream).pipe(writeStream);
      writeStream.on('finish', this.onEnd);
    }
 onEnd() {
    console.log('Finished!')
    }
}
module.exports = new EncryptionCLI();