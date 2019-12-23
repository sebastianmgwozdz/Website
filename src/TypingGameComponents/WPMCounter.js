import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import "./css/WPMCounter.css";

function WPMCounter(props) {
  const [wpm, setWpm] = useState(0);
  const [percentAccuracy, setPercentAccuracy] = useState(100);
  const [timeRemaining, setTimeRemaining] = useState(30);

  useEffect(() => {
    if (timeRemaining === 30) {
      let start = Date.now();
      let timer = setInterval(() => {
        let secondsElapsed = (Date.now() - start) / 1000;

        setTimeRemaining(30 - secondsElapsed);

        if (secondsElapsed >= 30) {
          console.log("done");
          props.doneFunc(true);
          clearInterval(timer);
        }
      }, 150);
    }

    let words = props.correctCharCount / 5;

    if (props.charCount > 0) {
      setWpm((words / (30 - timeRemaining)) * 60);
      setPercentAccuracy(((words * 5) / props.charCount) * 100);
    }
  }, [timeRemaining, props]);

  return (
    <div>
      <div>{wpm.toFixed(0)} WPM</div>
      <div className="padded">{percentAccuracy.toFixed(0)} % Accuracy</div>
      <ProgressBar timeRemaining={timeRemaining.toFixed(1)}></ProgressBar>
    </div>
  );
}

export default WPMCounter;
