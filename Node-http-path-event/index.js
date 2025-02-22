import http from 'http';
import fs from 'fs';

const PORT = 3003;

const server = http.createServer((req,res) => {
    const log = `${Date.now()}  & From ${req.url} Request Recieved\n`;

    fs.appendFile("log.txt", log , (error) => {
        if(error){
            console.error('error in doing');
            res.statusCode = 500;
            res.end('Internal Server error');
        }
        res.end("Completed");
    })
})

server.listen(PORT,() => {
    console.log("Running at port 3000")
})


