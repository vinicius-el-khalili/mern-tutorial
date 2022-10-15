const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
app.listen(process.env.PORT,()=>{console.log(`listening at port ${process.env.PORT}`)})
app.get('/',(req,res)=>{
    res.json({'msg':'hello!'})
})