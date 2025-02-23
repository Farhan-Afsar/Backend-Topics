const {Readable,Writable} = require('stream')

const readableStream = new Readable({
    highWaterMark: 4,
    read(){},
})

const WritableStrem = new Writable({
    write(StramData){
        console.log("Writting", StramData)
    },
})

readableStream.on("data", (chunk) => {
    console.log(chunk.toString())
    WritableStrem.write(chunk)
})

readableStream.push("Hello")