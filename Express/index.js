import express from 'express';

const app = express()

function HiFarhan(req,res,next){
    console.log("king Farhan")
    next()
}
// app.use(HiFarhan)

app.get('/',HiFarhan,(req,res) => {
    res.end("Main Page")
})

app.get('/users',(req,res) => {
    res.end("User Page")
})

app.listen(3000,() => {
    console.log("Server Running ")
})