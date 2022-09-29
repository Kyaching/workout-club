import React from "react";
import "./Exercises.css";

const Exercises = ({ workout, handleAddToList }) => {
  const { img, name, time, age, description } = workout;
  return (
    <div className="exercise-container">
      <div>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{description}</p>
        <p>For age: {age}</p>
        <p>Time Required: {time}s</p>
      </div>
      <button onClick={() => handleAddToList(workout)} className="add-btn">
        Add to List
      </button>
    </div>
  );
};

export default Exercises;
