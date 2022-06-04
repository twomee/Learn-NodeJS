#!/usr/bin/env node
const DecryptionCLI = require('./module');
const sourceFileName = process.argv[2];
console.log(`Source is: ${sourceFileName}`);
DecryptionCLI.decrypt(sourceFileName);