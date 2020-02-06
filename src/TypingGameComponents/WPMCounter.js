import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import "./css/WPMCounter.css";

function WPMCounter(props) {
  const {
    duration,
    doneFunc,
    correctCharCount,
    charCount,
    restart,
    durationFunc
  } = props;
  const [wpm, setWpm] = useState(0);
  const [percentAccuracy, setPercentAccuracy] = useState(100);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [timer, setTimer] = useState(undefined);

  useEffect(() => {
    if (!timer) {
      let start = Date.now();
      setTimer(
        setInterval(() => {
          setSecondsElapsed((Date.now() - start) / 1000);
        }, 150)
      );
    }

    if (restart || secondsElapsed >= duration) {
      if (restart) {
        durationFunc(secondsElapsed);
      }
      clearInterval(timer);
      doneFunc(true);
    }

    if (charCount > 0) {
      updateStats();
    }
  }, [props]);

  function updateStats() {
    let words = correctCharCount / 5;
    setWpm((words / secondsElapsed) * 60);
    setPercentAccuracy(((words * 5) / charCount) * 100);
  }

  return (
    <div>
      <div>{wpm.toFixed(0)} WPM</div>
      <div className="padded">{percentAccuracy.toFixed(0)} % Accuracy</div>
      <ProgressBar
        timeRemaining={(duration - secondsElapsed).toFixed(1)}
        duration={duration}
      ></ProgressBar>
    </div>
  );
}

export default WPMCounter;
