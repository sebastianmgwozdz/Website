import React, { useState, useEffect } from "react";
import InputField from "./InputField";

function GameDisplay(props) {
  const { words, charFunc, correctCharFunc } = props;
  const [completedString, setCompletedString] = useState("");
  const [wordStr] = useState(
    words.reduce((total, current) => {
      return total + " " + current;
    })
  );
  const [currWord, setCurrWord] = useState("");
  const [currInput, setCurrInput] = useState("");

  useEffect(() => {
    if (!currWord) {
      setCurrWord(words.shift());
    }
    setCurrInput("");
  }, [currWord, words]);

  function getHighlightedText() {
    let wordEnd = wordStr.indexOf(" ", completedString.length);
    let restOfWord = wordStr.slice(completedString.length, wordEnd);

    return (
      <div>
        <span style={{ backgroundColor: "#88D669" }}>{completedString}</span>
        <span style={{ backgroundColor: "#F26D6D" }}>{restOfWord}</span>
        {wordStr.slice(wordEnd, wordStr.length)}
      </div>
    );
  }

  function removedCompletedChar(curr) {
    return curr.length < currInput.length && currWord.indexOf(currInput) === 0;
  }

  function addedCorrectChar(curr) {
    return currWord.indexOf(curr) === 0 && curr.length > currInput.length;
  }

  function handleChange(e) {
    const curr = e.target.value.trim();

    if (removedCompletedChar(curr)) {
      setCompletedString(completedString.slice(0, completedString.length - 1));
    } else if (addedCorrectChar(curr)) {
      addCharacter(curr);
      charFunc();
      correctCharFunc();
    } else if (curr.length > currInput.length) {
      charFunc();
    }

    setCurrInput(curr);
  }

  function addCharacter(curr) {
    let updatedStr = completedString + curr[curr.length - 1];
    if (curr === currWord) {
      setCurrWord(words.shift());
      updatedStr += " ";
    }
    setCompletedString(updatedStr);
  }

  return (
    <div>
      {getHighlightedText()}
      <div style={{ padding: "10%" }}>
        <InputField changeFunc={handleChange} value={currInput}></InputField>
      </div>
    </div>
  );
}

export default GameDisplay;
