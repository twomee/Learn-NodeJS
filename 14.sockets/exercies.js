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
    this.socket.write(`Welcome to my server`);
    this.repeater()
    }  
    dataHandler(typedData) {
    console.log(current_time);
    }    
    repeater() {
        setInterval(() =>{
            const current_time = new Date().getTime().toString();
            this.socket.write(current_time);
        }, 1000)
    }
}
module.exports = new SocketServer();