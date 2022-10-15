// modules
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
// express app
const app = express()
// middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
// routes
app.listen(process.env.PORT,()=>{console.log(`listening at port ${process.env.PORT}`)})
app.get('/',(req,res)=>{
    res.json({'msg':'hello!'})
})
