import EventEmitter from 'events';
import fs from 'fs';

const userEmitter = new EventEmitter();

let eventCounts = {
    login:0,
    logout:0,
    purchase:0,
    update:0
}

const logFile = 'eventlog.json';

if(fs.existsSync(logFile)){
    const data = fs.readFileSync(logFile,'utf-8');
    Object.assign(eventCounts,JSON.parse(data));  
}

function saveCounts(){
    fs.writeFileSync(logFile,JSON.stringify(eventCounts,null,2));
}

userEmitter.on("Login",(username) => {
    eventCounts.login++;
    console.log(`${username} login successfully and Count ${eventCounts.login}`);
    saveCounts();
})

userEmitter.on("Logout",(username) => {
    eventCounts.logout++;
    console.log(`${username} Logout successfully and Count ${eventCounts.logout}`);
    saveCounts();
})

userEmitter.on("Purcahse",(username,item) => {
    eventCounts.purchase++;
    console.log(`${username} Purchased ${item} and Count ${eventCounts.purchase}`);
    saveCounts();
})

userEmitter.on("Update",(username,field) => {
    eventCounts.update++;
    console.log(`${username} Update field ${field} and Count ${eventCounts.update}`);
    saveCounts();
})

userEmitter.emit("Login","Farhan")
userEmitter.emit("Logout","Farhan")
userEmitter.emit("Purcahse","Farhan","Phone")
userEmitter.emit("Update","Farhan","Email")