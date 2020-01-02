import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import "./css/WPMCounter.css";

function WPMCounter(props) {
  const { duration, doneFunc, correctCharCount, charCount } = props;
  const [wpm, setWpm] = useState(0);
  const [percentAccuracy, setPercentAccuracy] = useState(100);
  const [timeRemaining, setTimeRemaining] = useState(props.duration);

  useEffect(() => {
    if (timeRemaining === duration) {
      let start = Date.now();
      let timer = setInterval(() => {
        let secondsElapsed = (Date.now() - start) / 1000;

        setTimeRemaining(duration - secondsElapsed);

        if (secondsElapsed >= duration) {
          doneFunc(true);
          clearInterval(timer);
        }
      }, 150);
    }

    let words = correctCharCount / 5;

    if (charCount > 0) {
      setWpm((words / (duration - timeRemaining)) * 60);
      setPercentAccuracy(((words * 5) / charCount) * 100);
    }
  }, [timeRemaining]);

  return (
    <div>
      <div>{wpm.toFixed(0)} WPM</div>
      <div className="padded">{percentAccuracy.toFixed(0)} % Accuracy</div>
      <ProgressBar
        timeRemaining={timeRemaining.toFixed(1)}
        duration={duration}
      ></ProgressBar>
    </div>
  );
}

export default WPMCounter;
