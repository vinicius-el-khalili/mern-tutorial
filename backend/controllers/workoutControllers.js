const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')
// get all
const GetWorkouts = async (req,res)=>{
    try{
        const workouts = await Workout.find({}).sort({CreatedAt:-1})
        res.status(200).json(workouts)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

// get single
const GetSingleWorkout = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout (invalid id)"})
    }
    const workout = await Workout.findById(id)
    if (!workout){
        return res.status(404).json({error:"No such workout"})
    }
    res.status(200).json(workout)
}
// post
const PostWorkout = async (req,res) => {
    const {title,load,repetitions} = req.body;
    try{
        const workout = await Workout.create({title,load,repetitions});
        res.status(200).json(workout)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

// delete
const DeleteWorkout = async(req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout (invalid id)"})
    }
    const workout = await Workout.findOneAndDelete({_id:id})
    if (!workout){
        return res.status(400).json({error:"No such workout"})
    }
    res.status(200).json(workout)
}

// patch
const PatchWorkout = async(req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout (invalid id)"})
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body})
    if (!workout){
        return res.status(400).json({error:"No such workout"})
    }
    res.status(200).json(workout)
}

module.exports = {
    GetWorkouts,
    GetSingleWorkout,
    PostWorkout,
    DeleteWorkout,
    PatchWorkout
}