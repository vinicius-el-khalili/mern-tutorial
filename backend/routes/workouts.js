// modules
const express = require('express')
const Workout = require('../models/workoutModel')

// Router
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
workoutRoutes.post('/', async (req,res)=>{
    const {title,load,repetitions} = req.body
    
    try{
        const workout = await Workout.create({title,load,repetitions})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
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