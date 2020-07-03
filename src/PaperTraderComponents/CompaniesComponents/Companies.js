import React, { useState } from "react";
import Autocomplete from "../PositionsComponents/Autocomplete";

export default function Companies() {
  const [symbol, setSymbol] = useState("");
  return (
    <div>
      <Autocomplete setSymbol={setSymbol}></Autocomplete>
      {symbol}
    </div>
  );
}
