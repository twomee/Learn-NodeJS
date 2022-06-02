
//create http server
// const http = require('http').Server;
// const myServer = new http();
// myServer.listen(3000);
// myServer.on('request', (request, response) => {
//   response.end('Hello World!')
// });

//more elegant code
const httpServer = require('http').Server;
class MyServer extends httpServer {
  constructor() {
    super();
    this.listen(3001);
    this.on('request', this.requestHandler);
}  
  requestHandler(request, response) {
    response.end('Hello World!')
}  
}
const myServer = new MyServer();