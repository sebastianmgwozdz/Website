import React from "react";
import GameStartButton from "./GameStartButton.js";
import DiscreteSlider from "./DiscreteSlider";
import RangeSlider from "./RangeSlider";
import "./css/Game.css";

export default function SetupScreen(props) {
  const {
    onButtonClick,
    lengthFunc,
    wordFunc,
    words,
    onDiscreteChange,
    discreteVal,
    rangeVal,
    onRangeChange,
  } = props;

  return (
    <div style={{ paddingTop: "10%" }}>
      <div className="centeredSetup">
        <DiscreteSlider
          text="Game Length (Seconds)"
          min={10}
          max={120}
          step={10}
          changeFunc={onDiscreteChange}
          val={discreteVal}
        ></DiscreteSlider>
      </div>
      <div className="centeredSetup">
        <RangeSlider
          text="Word Length"
          min={3}
          max={15}
          step={1}
          val={rangeVal}
          changeFunc={onRangeChange}
        ></RangeSlider>
      </div>
      <div className="centeredSetup">
        <GameStartButton
          clickFunc={onButtonClick}
          lengthFunc={lengthFunc}
          wordFunc={wordFunc}
          words={words}
        ></GameStartButton>
      </div>
    </div>
  );
}
