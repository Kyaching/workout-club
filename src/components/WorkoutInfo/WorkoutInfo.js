import React from "react";
import "./WorkoutInfo.css";
import photo from "../../images/pic.jpg";

const WorkoutInfo = () => {
  return (
    <div className="workout-info-container">
      <div className="my-info">
        <img src={photo} alt="" />
        <div>
          <h3>Mark</h3>
          <p>Sydney, Australia</p>
        </div>
      </div>
      <div className="measurement-container">
        <div className="measure-info">
          <h2>
            75<sub>kg</sub>
          </h2>
          <p>Weight</p>
        </div>
        <div>
          <h2>5.5</h2>
          <p>Height</p>
        </div>
        <div>
          <h2>
            25<sub>yrs</sub>
          </h2>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutInfo;
