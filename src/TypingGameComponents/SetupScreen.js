import React from "react";
import GameStartButton from "./GameStartButton.js";
import DiscreteSlider from "./DiscreteSlider";
import RangeSlider from "./RangeSlider";

export default function SetupScreen(props) {
  const {
    onButtonClick,
    lengthFunc,
    wordFunc,
    words,
    onDiscreteChange,
    discreteVal,
    rangeVal,
    onRangeChange
  } = props;

  return (
    <div>
      <GameStartButton
        clickFunc={onButtonClick}
        lengthFunc={lengthFunc}
        wordFunc={wordFunc}
        words={words}
      ></GameStartButton>
      <DiscreteSlider
        text="Game Length (Seconds)"
        min={10}
        max={120}
        step={10}
        changeFunc={onDiscreteChange}
        val={discreteVal}
      ></DiscreteSlider>
      <RangeSlider
        text="Word Length"
        min={3}
        max={15}
        step={1}
        val={rangeVal}
        changeFunc={onRangeChange}
      ></RangeSlider>
    </div>
  );
}
