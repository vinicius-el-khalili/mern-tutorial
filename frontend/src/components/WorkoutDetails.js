const WorkoutDetails = ({workout})=>{
    return(
        <div className="workout">
            <h2>{workout.title}</h2>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Repetitions: </strong>{workout.repetitions}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}
export default WorkoutDetails