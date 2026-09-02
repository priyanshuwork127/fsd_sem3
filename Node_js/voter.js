const eventEmitter=require('events');
const emitter=new eventEmitter();

emitter.on("vote",(n)=>{
    if(n>=18){
        console.log("You are eligible to vote");
    }
    else{
        console.log("You are not eligible to vote");
    }
})
emitter.emit("vote",20);
emitter.emit("vote",10);