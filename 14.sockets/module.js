const netServer = require('net').Server;
class SocketServer extends netServer {
  constructor() {
    super();
    this.listen('6969');
    this.on('connection', this.connectionHandler);
}  
  connectionHandler(socket) {
    console.log(`Someone connected! ${socket.remoteAddress}`);
    this.socket = socket;
    this.socket.on('data', this.dataHandler);
    this.socket.write(`Welcome to my server`);
}  
  dataHandler(typedData) {
    console.log(`Typed This ${typedData}`);
    }      
}
module.exports = new SocketServer();