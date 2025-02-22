import EventEmitter from 'events';

const emitter = new EventEmitter();

// on(eventName,Listener) ----> create event
// emit(eventName, [args]) ----> execute event

emitter.on("farhan",(args) => {
    console.log(`Hi ${args.username} Your id is ${args.id}`)
})

emitter.emit("farhan",{
    username:"Farhan",
    id: "213-15-4292"
})