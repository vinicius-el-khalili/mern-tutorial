// modules
const express = require('express')
const dotenv = require('dotenv')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// .env
dotenv.config()

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// routes
app.use('/api/workouts',workoutRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('connected do database')
        // listen for requests
        app.listen(process.env.PORT,()=>{console.log(`listening at port ${process.env.PORT}`)})
    })
    .catch(()=>{console.log('error connecting to database')})
