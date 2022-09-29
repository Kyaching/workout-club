import React from "react";
import "./Exercises.css";

const Exercises = ({ workout, handleAddToList }) => {
  const { img, name, time, age, description } = workout;
  return (
    <div className="exercise-container">
      <div className="info-container">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{description}</p>
        <h4>For age: {age}</h4>
        <h4>Time Required: {time}s</h4>
      </div>
      <button onClick={() => handleAddToList(workout)} className="add-btn">
        Add to List
      </button>
    </div>
  );
};

export default Exercises;
