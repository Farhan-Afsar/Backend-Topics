import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/dashboard",authMiddleware,(req,res)=> {

    res.status(200).send({
        message: "Welcome to Dashboard",
    })
})

export default router;