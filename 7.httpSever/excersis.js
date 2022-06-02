//create a server that print every enter to the site
const httpServer = require('http').Server;
class MyServer1 extends httpServer {
  constructor() {
    super();
    this.on('request', this.requestHandler);
    this.on('connection', this.connectionHandler);
    this.listen(3001);
}  
  requestHandler(request, response) {
    response.end('Hello World!')
}  
  connectionHandler() {
    console.log('Connection created!');
} }
const myServer1 = new MyServer1();


const fs = require('fs').promises;
class MyServer2 extends httpServer {
  constructor() {
    super();
    this.on('request', this.requestHandler);
    this.listen(3002);
}  
  async requestHandler(request, response) {
     const content = await fs.readFile("./test.txt");
    response.end(content)
}  

}
const myServer2 = new MyServer2();