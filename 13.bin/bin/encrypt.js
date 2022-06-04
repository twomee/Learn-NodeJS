#!/usr/bin/env node
const EncryptionCLI = require('./module');
const sourceFileName = process.argv[2];
console.log(`Source is: ${sourceFileName}`);
EncryptionCLI.encrypt(sourceFileName);