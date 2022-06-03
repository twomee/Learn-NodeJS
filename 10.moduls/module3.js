const httpServer = require('http').Server;
class MyServer extends httpServer {
  constructor() {
    super();
    this.listen(3000);
    this.on('request', this.requestHandler);
}  
  requestHandler(request, response) {
    response.end('Hello World')
}  
}
const myServer = new MyServer(); 
module.exports.myServer = myServer;