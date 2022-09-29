import React, { useEffect, useState } from "react";
import Exercises from "../Exercises/Exercises";
import WorkoutInfo from "../WorkoutInfo/WorkoutInfo";
import "./Activities.css";

const Activities = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState([]);

  const handleAddToList = (workout) => {};

  useEffect(() => {
    fetch("workout.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);

  return (
    <div>
      <h1>Workout Activity Club</h1>
      <h4>Select Today's Exercise</h4>
      <div className="activity-container">
        <div className="workout-container">
          {workouts.map((workout) => (
            <Exercises
              key={workout.id}
              workout={workout}
              handleAddToList={handleAddToList}
            ></Exercises>
          ))}
        </div>
        <WorkoutInfo workout={workout}></WorkoutInfo>
      </div>
    </div>
  );
};

export default Activities;
