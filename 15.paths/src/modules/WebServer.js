const httpServer = require('http').Server;
const fs = require('fs');
const path = require('path')
class WebServer extends httpServer {
  constructor() {
    super();
    this.listen(3000);
    this.on('request', this.requestHandler);
    } 

  requestHandler(request, response) {
    // const src = fs.createReadStream('./../static/index.html'); // ERROR!!!
    const src = fs.createReadStream(path.join(__dirname,'../static/index.html'));
    src.pipe(response);
    }  
}
exports.module = new WebServer();       