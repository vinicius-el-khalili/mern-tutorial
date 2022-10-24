// modules
const express = require('express')
const {
    GetWorkouts,
    GetSingleWorkout,
    PostWorkout
} = require('../controllers/workoutControllers')
// Router
const workoutRoutes = express.Router()

// GET workouts
workoutRoutes.get('/', GetWorkouts)

// GET single workout
workoutRoutes.get('/:id',GetSingleWorkout)

// POST new workout
workoutRoutes.post('/', PostWorkout)

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