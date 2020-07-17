import React, { useState } from "react";
import Autocomplete from "../PositionsComponents/Autocomplete";

export default function Companies() {
  const [symbol, setSymbol] = useState("");

  return (
    <div
      style={{
        paddingTop: "40vh",
        paddingLeft: "23vw",
      }}
    >
      <Autocomplete setSymbol={setSymbol} search width={500}></Autocomplete>
    </div>
  );
}
