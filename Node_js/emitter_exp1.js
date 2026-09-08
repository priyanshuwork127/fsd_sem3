const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on("greet", (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js`);
});

emitter.on("exit", () => {
    console.log("Exiting the application");
});

emitter.emit("greet", "Priyanshu");
emitter.emit("exit");