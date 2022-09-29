import React, { useEffect, useState } from "react";
import "./WorkoutInfo.css";
import photo from "../../images/pic.jpg";
import { addToDB, getFromDb } from "../../Utilities/fakeDB";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WorkoutInfo = ({ workout }) => {
  const totalTime = workout.reduce(
    (prev, currentTime) => prev + currentTime.time,
    0
  );
  const [time, setTime] = useState([0]);

  const handleBreak = (e) => {
    const times = e.target.value;
    setTime(times);
    addToDB(times);
  };
  useEffect(() => {
    const getData = getFromDb();
    setTime(getData);
  }, []);

  const notify = () =>
    toast.success(" Wow! You completed your daily activities successfully.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div className="workout-info-container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="my-info">
        <img src={photo} alt="" />
        <div className="name-container">
          <h3>Mark</h3>
          <p>Sydney, Australia</p>
        </div>
      </div>
      <div className="measurement-container">
        <div className="measures">
          <h2>
            75<sub>kg</sub>
          </h2>
          <p>Weight</p>
        </div>
        <div className="measures">
          <h2>5.5</h2>
          <p>Height</p>
        </div>
        <div className="measures">
          <h2>
            25<sub>yrs</sub>
          </h2>
          <p>Age</p>
        </div>
      </div>
      <h2>Add A Break</h2>
      <div className="measurement-container">
        <button onClick={handleBreak} value="10">
          10s
        </button>
        <button onClick={handleBreak} value="20">
          20s
        </button>
        <button onClick={handleBreak} value="30">
          30s
        </button>
        <button onClick={handleBreak} value="40">
          40s
        </button>
        <button onClick={handleBreak} value="50">
          50s
        </button>
      </div>
      <h3>Exercise Details</h3>
      <div className="measurement-container">
        <h4>Exercise Time:</h4>
        <h4>{totalTime} seconds</h4>
      </div>
      <div className="measurement-container">
        <h4>Break Time:</h4>
        <h4>{time ? time : "0"} seconds</h4>
      </div>
      <button onClick={notify} className="activity-btn">
        Activity Completed
      </button>
    </div>
  );
};

export default WorkoutInfo;
