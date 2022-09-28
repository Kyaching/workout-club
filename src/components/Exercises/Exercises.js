import React from "react";
import "./Exercises.css";

const Exercises = ({ workout }) => {
  const { img, name, time } = workout;
  return (
    <div className="exercise-container">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Time Required: {time}</p>
      <button className="add-btn">
        <p>Add to List</p>
      </button>
    </div>
  );
};

export default Exercises;
