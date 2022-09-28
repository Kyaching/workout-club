import React, { useEffect, useState } from "react";
import Exercises from "../Exercises/Exercises";
import "./Activities.css";

const Activities = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("workout.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);
  return (
    <div className="activity-container">
      <h1>Workout Activity Club</h1>
      <h4>Select Today's Exercise</h4>
      <div className="workout-container">
        {workouts.map((workout) => (
          <Exercises key={workout.id} workout={workout}></Exercises>
        ))}
      </div>
    </div>
  );
};

export default Activities;
