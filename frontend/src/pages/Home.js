import { useEffect, useState } from "react"
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
    const [workouts,setWorkouts]=useState(null)
    useEffect(()=>{
        const fetchWorkouts = async ()=>{
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if (response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    },[])
    return(
        <div className="home">
            <h2>Home</h2>
            <div className="workouts">
                {workouts && workouts.map( workout=>(
                    <div className="workout">
                        <WorkoutDetails key={workout._id} workout={workout}/>     
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home