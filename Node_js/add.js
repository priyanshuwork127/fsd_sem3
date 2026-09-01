const EventEmitter = require('events');

const emitter=new EventEmitter();

emitter.on("add",(n1,n2)=>{
    console.log(`The sum of ${n1} and ${n2} is:${n1+n2}`);
})
emitter.emit("add",5,6
);