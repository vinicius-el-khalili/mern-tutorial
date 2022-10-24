// modules
const express = require('express')
const {
    GetWorkouts,
    GetSingleWorkout,
    PostWorkout,
    DeleteWorkout,
    PatchWorkout
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
workoutRoutes.delete('/:id', DeleteWorkout)

// PATCH workout
workoutRoutes.patch('/:id', PatchWorkout)

// export module
module.exports = workoutRoutes