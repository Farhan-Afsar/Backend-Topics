const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {

//Bad Approach

    // const file = fs.readFileSync("sample.txt")
    // res.end(file);

//Right Approach   
    // Readable(req) <----Stream-pipe ----> writeable(res)

    // const readableStream = fs.createReadStream("sample.txt")
    // readableStream.pipe(res)

    
//Bad Approach
    // const file = fs.readFileSync("sample.txt")
    // fs.writeFileSync("output.txt",file)
    // res.end()

//Right Approach
    const readStream = fs.createReadStream("/home/farhan/Desktop/Backend/Node-Stream/sample.txt")
    const writeStream = fs.createWriteStream("output.txt")

    readStream.on("data", (chunk) => {
        console.log(chunk)
        writeStream.write(chunk)
    })

});


server.listen(3006, () => {
    console.log("Server Running")
})