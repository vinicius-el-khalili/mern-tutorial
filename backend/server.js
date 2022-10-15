// modules
const express = require('express')
const dotenv = require('dotenv')
const workoutRoutes = require('./routes/workouts')

// .env
dotenv.config()

// express app
const app = express()

// middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// routes
app.use('/api/workouts',workoutRoutes)

// listen for requests
app.listen(process.env.PORT,()=>{console.log(`listening at port ${process.env.PORT}`)})
