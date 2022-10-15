const express = require('express')
const workoutRoutes = express.Router()

// GET workouts
workoutRoutes.get('/', (req,res)=>{
    res.json({msg:'GET all workouts'})
})

// GET single workout
workoutRoutes.get('/:id',(req,res)=>{
    res.json({msg:'GET single workout'})
})

// POST new workout
workoutRoutes.post('/', (req,res)=>{
    res.json({msg:'POST workout'})
})

// DELETE workout
workoutRoutes.delete('/:id', (req,res)=>{
    res.json({msg:'DELETE workout'})
})

// PATCH workout
workoutRoutes.patch('/:id', (req,res)=>{
    res.json({msg:'PATCH workout'})
})


// export module
module.exports = workoutRoutes