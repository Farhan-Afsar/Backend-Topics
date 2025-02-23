import express from 'express';
import PublicRoutes from "./routes/public.routes.js"
import PrivateRoutes from "./routes/private.routes.js"
import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import loginMiddleware from './middleware/login.middleware.js';

const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

if(!fs.existsSync(path.join(__dirname,"logs"))){
    fs.mkdirSync(path.join(__dirname,"logs"))
}

app.use(express.json());
app.use(loginMiddleware);


app.use("/public",PublicRoutes);
app.use("/private",PrivateRoutes);


app.listen(4000,() => {
    console.log("server is running....")
})