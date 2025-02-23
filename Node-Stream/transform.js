const fs = require("fs")
const {Transform} = require("stream")

const readStream = fs.createReadStream("/home/farhan/Desktop/Backend/Node-Stream/sample.txt")
const writeStream = fs.createWriteStream("output.txt")

// readStream.on("data",(chunk) => {
//     const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi,"Farhan")
//     writeStream.write(modifiedWord)
// })

const transformStream = new Transform({
    transform(chunk,encoding,callback){
        const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi,"Farhan")
        callback(null,modifiedWord)
    }
})

readStream.pipe(transformStream).pipe(writeStream)

// Transform ----> Readable and writeable Both