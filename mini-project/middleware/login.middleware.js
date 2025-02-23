import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const loginMiddleware = (req,res,next) => {
    const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`
    const logFile = path.join(__dirname,"../logs/request.logs")

    fs.appendFile(logFile,log,(err) => {
        if(err) console.error("Append Error",err)
    })

    next();
}

export default loginMiddleware;