import React, { useState } from "react";
import { AutoComplete } from "antd";
import { allStocks } from "./Helpers";

let stocks = new Map();
allStocks().then(res => {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 26; i++) {
    let char = chars[i];
    stocks.set(
      char,
      res.filter(val => {
        return val["displaySymbol"][0] === char;
      })
    );
  }
});

export default function TradeInput() {
  const [selectedVal, setSelectedVal] = useState("");
  const [options, setOptions] = useState([]);

  async function onSearch(searchText) {
    let arr = [];
    if (!searchText) {
      return arr;
    }

    let filtered = stocks.get(searchText[0].toUpperCase());
    for (let i = 0; i < filtered.length; i++) {
      let curr = filtered[i]["displaySymbol"];
      if (curr.toLowerCase().includes(searchText.toLowerCase())) {
        arr.push({ value: curr });
      }
    }
    setOptions(arr);
  }

  function onSelect(data) {
    setSelectedVal(data);
  }

  return (
    <div>
      <AutoComplete
        options={options}
        style={{
          width: 200
        }}
        onSearch={onSearch}
        onSelect={onSelect}
        placeholder="Enter Stock Symbol"
      />
    </div>
  );
}
