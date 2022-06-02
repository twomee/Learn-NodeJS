
//create an event and listening to him
const EventEmitter = require('events');
class MyClass1 extends EventEmitter { };
const myClass1 = new MyClass1();
myClass1.on('someEvent', () => {
  console.log('someEvent occurred!');
});
myClass1.emit('someEvent');

//enable event in class and listening out from the class
class MyClass2 extends EventEmitter {
  callMe() {
   this.emit('someEvent');
    }  
};
const myClass2 = new MyClass2();
myClass2.on('someEvent', () => {
  console.log('someEvent occurred!');
});
myClass2.callMe();

//enable event in setTimeOut function
class MyClass3 extends EventEmitter {
    constructor() {
            super();
        setTimeout(() => {
            this.emit('someEvent');
        }, 1000);
    }
};
const myClass3 = new MyClass3();
myClass3.on('someEvent', () => {
  console.log('someEvent occurred!');
});

//enable event and listening in class
class MyClass4 extends EventEmitter {
  constructor() {
    super();
    this.on('someEvent', this.someEventHandler);
    this.emit('someEvent');
}
someEventHandler() {
    console.log('someEvent occurred!');
}};
const myClass4 = new MyClass4();

//off an event
class MyClass5 extends EventEmitter {
  constructor() {
   super();
    this.on('someEvent', this.someEventHandler);
    this.off('someEvent', this.someEventHandler);
    this.emit('someEvent');
}
  someEventHandler() {
    console.log('someEvent occurred!');
  }
}
const myClass5 = new MyClass5();

//enable more than one event
class MyClass6 extends EventEmitter {
  constructor() {
      super();
      this.on('someEvent', this.someEventHandler);
      this.emit('someEvent');
      this.emit('someEvent');
      this.emit('someEvent');
  }
  someEventHandler() {
    console.log('someEvent occurred!');
  }
}
const myClass6 = new MyClass6();

//using once fucntion 
class MyClass7 extends EventEmitter {
    constructor() {
        super();
        this.once('someEvent', this.someEventHandler);
        this.emit('someEvent');
        this.emit('someEvent');
        this.emit('someEvent');
    }
    someEventHandler() {
        console.log('someEvent occurred!');
    }
};
const myClass7 = new MyClass7(); 

//attach few functions to one event
class MyClass8 extends EventEmitter {
  constructor() {
    super();
    this.on('someEvent', this.someEventHandler);
    this.on('someEvent', this.someEventOtherHandler);
    this.emit('someEvent');
}
  someEventHandler() {
    console.log('someEvent occurred! This is #1 listener');
}  
  someEventOtherHandler() {
   console.log('someEvent occurred! This is #2 listener');
}  
};
const myClass8 = new MyClass8();

//set order of function runing 
class MyClass9 extends EventEmitter {
  constructor() {
    super();
this.on('someEvent', this.someEventHandler);
this.prependListener('someEvent', this.someEventOtherHandler);
this.emit('someEvent');
}
someEventHandler() {
  console.log('someEvent occurred! This is #1 listener');
}
someEventOtherHandler() {
  console.log('someEvent occurred! This is #2 listener');
}
 };
const myClass9 = new MyClass9();

//removeAllListneres
class MyClass10 extends EventEmitter {
  constructor() {
    super();
    this.on('someEvent', this.someEventOtherHandler);
    this.removeAllListeners('someEvent');
    this.emit('someEvent');
}
  someEventHandler() {
    console.log('someEvent occurred! This is #1 listener');
}  
  someEventOtherHandler() {
    console.log('someEvent occurred! This is #2 listener');
}  
};
const myClass10 = new MyClass10();

//pass data in events in functions
class MyClass11 extends EventEmitter {
  constructor() {
    super();
    this.on('someEvent', this.someEventHandler);
    this.emit('someEvent', 'Hellllloooo');
}  
  someEventHandler(arg) {
    console.log(`someEvent occurred! with ${arg}`);
};}
const myClass11 = new MyClass11();