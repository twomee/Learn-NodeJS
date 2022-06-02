//event inside class
const EventEmitter = require('events');
class Dog1 extends EventEmitter {
    constructor() {
     super();
      this.on('food', this.someEventHandler);
      this.emit('food');
  }
    someEventHandler() {
      console.log('woof');
    }
  }
  const dog1 = new Dog1();
  dog1.emit('food')