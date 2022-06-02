//enter an ip and get the website name by revese func of dns module
const dns = require('dns').promises;
const fs = require('fs').promises;
async function init() {
    const result = await dns.reverse('8.8.8.8');
    console.log(result);
} 
init();