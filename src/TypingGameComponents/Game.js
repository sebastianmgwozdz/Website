import React, { useState } from "react";
import GameDisplay from "./GameDisplay.js";
import $ from "jquery";
import WPMCounter from "./WPMCounter.js";
import GameOver from "./GameOver.js";
import "./css/Game.css";
import SetupScreen from "./SetupScreen.js";

function Game(props) {
  const { length, lengthFunc, duration, durationFunc, navFunc } = props;
  const [done, setDone] = useState(false);
  const [correctChars, setCorrectChars] = useState(-1);
  const [charsPressed, setCharsPressed] = useState(0);
  const [words, setWords] = useState("");

  async function getWords() {
    let set = [];
    await $.getJSON(
      "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json",
      data => {
        const words = Object.keys(data).filter(e => {
          return e.length >= length[0] && e.length <= length[1];
        });
        for (let i = 0; i < 100; i++) {
          let random = Math.ceil(Math.random() * words.length);
          set.push(words[random]);
        }
      }
    );
    return set;
  }

  function incrementCorrectChars() {
    setCorrectChars(correctChars + 1);
  }

  function incrementCharsPressed() {
    setCharsPressed(charsPressed + 1);
  }

  function reset() {
    setCorrectChars(-1);
    setCharsPressed(0);
    setDone(false);
  }

  if (correctChars === -1) {
    return (
      <SetupScreen
        onButtonClick={incrementCorrectChars}
        lengthFunc={lengthFunc}
        wordFunc={setWords}
        words={getWords}
        onDiscreteChange={durationFunc}
        discreteVal={duration}
        rangeVal={length}
        onRangeChange={lengthFunc}
      ></SetupScreen>
    );
  } else if (done) {
    return (
      <GameOver
        correctChars={correctChars}
        charsPressed={charsPressed}
        resetFunc={reset}
        navFunc={navFunc}
        duration={duration}
      ></GameOver>
    );
  }

  return (
    <div>
      <div className="centeredGame">
        <GameDisplay
          words={words}
          correctCharFunc={incrementCorrectChars}
          charFunc={incrementCharsPressed}
        ></GameDisplay>
        <WPMCounter
          correctCharCount={correctChars}
          charCount={charsPressed}
          doneFunc={setDone}
          duration={duration}
        ></WPMCounter>
      </div>
    </div>
  );
}

export default Game;
