import React, { useState, useEffect } from "react";
import GameDisplay from "./GameDisplay.js";
import $ from "jquery";
import WPMCounter from "./WPMCounter.js";
import GameOver from "./GameOver.js";
import Loader from "../Loader";
import "./css/Game.css";

async function getWords() {
  let set = [];
  await $.getJSON(
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json",
    data => {
      const words = Object.keys(data).filter(e => {
        return e.length === 5;
      });
      for (let i = 0; i < 100; i++) {
        let random = Math.ceil(Math.random() * words.length);
        set.push(words[random]);
      }
    }
  );
  return set;
}

function Game() {
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState(false);
  const [correctChars, setCorrectChars] = useState(0);
  const [charsPressed, setCharsPressed] = useState(0);
  const [words, setWords] = useState("");

  function updateCorrectChars() {
    setCorrectChars(correctChars + 1);
  }

  function updateCharsPressed() {
    setCharsPressed(charsPressed + 1);
  }

  function reset() {
    setLoading(true);
    getWords().then(result => {
      setWords(result);
      setCorrectChars(0);
      setCharsPressed(0);
      setDone(false);
      setLoading(false);
    });
  }

  useEffect(() => {
    getWords().then(result => {
      setWords(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader loading={loading}></Loader>;
  } else if (done) {
    return (
      <GameOver
        correctChars={correctChars}
        charsPressed={charsPressed}
        resetFunc={reset}
      ></GameOver>
    );
  }

  return (
    <div>
      <div className="centeredGame">
        <GameDisplay
          words={words}
          correctCharFunc={updateCorrectChars}
          charFunc={updateCharsPressed}
        ></GameDisplay>
        <WPMCounter
          correctCharCount={correctChars}
          charCount={charsPressed}
          doneFunc={setDone}
        ></WPMCounter>
      </div>
    </div>
  );
}

export default Game;
