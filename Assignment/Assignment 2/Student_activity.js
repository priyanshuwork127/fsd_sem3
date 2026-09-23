const EventEmitter=require('events');
const emitter=new EventEmitter();

emitter.on("Login",(name)=>{
    console.log(`Welcoming ${name}`);
})
emitter.on("assignment",()=>{
    console.log("Assignment submitted");
})
emitter.on("logout",()=>{
    console.log("student logged out");
})
emitter.on("exit",()=>{
    console.log("Exiting Application,Have a nice day")
})
emitter.emit("Login","Priyanshu");
emitter.emit("assignment");
emitter.emit("logout");
emitter.emit("exit");