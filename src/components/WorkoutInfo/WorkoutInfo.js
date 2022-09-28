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
        <div>
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
      <h2>Add a break</h2>
      <div className="measurement-container">
        <button>
          10<span>s</span>
        </button>
        <button>
          20<span>s</span>
        </button>
        <button>
          30<span>s</span>
        </button>
        <button>
          40<span>s</span>
        </button>
        <button>
          50<span>s</span>
        </button>
      </div>
    </div>
  );
};

export default WorkoutInfo;
