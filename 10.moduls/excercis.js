const request = require('request');
class SiteCheck{
    callGogole() {
        request('http://www.google.com', function (error, response, body) { 
            console.log('error:', error); // Print the error if one occurred 
            console.log('statusCode:', response && response.statusCode); //Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Googlehomepage.
        });
    }
}
const siteCheck = new SiteCheck(); 
module.exports = siteCheck;