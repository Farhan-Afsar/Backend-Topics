import { validateToken } from "../utils/token.utils.js"


export const authMiddleware = (req,res,next) => {
    const token = req.headers['authorization']

    if(token && validateToken(token)){
        console.log("Welcome")
        next()
    }
    else{
        res.status(401).send("Unauthorized")
    }
}