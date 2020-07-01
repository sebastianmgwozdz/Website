import React, { useState } from "react";
import { AutoComplete } from "antd";
import { get } from "../Helpers";

let stocks = new Map();
get(
  "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bpleiinrh5r8m26im1dg"
).then((res) => {
  for (let stock of res) {
    let symbol = stock["displaySymbol"];
    let firstChar = symbol[0];
    if (stocks.has(firstChar)) {
      stocks.get(firstChar).push(symbol);
    } else {
      stocks.set(firstChar, []);
    }
  }
});

export default function Autocomplete(props) {
  const [options, setOptions] = useState([]);

  console.log("Autocomplete");

  async function onSearch(searchText) {
    let arr = [];
    if (!searchText) {
      setOptions([]);
      props.setSymbol("");
      return;
    }

    let filtered = stocks.get(searchText[0].toUpperCase());
    if (!filtered) {
      setOptions([]);
      return;
    }
    for (let i = 0; i < filtered.length; i++) {
      let curr = filtered[i];
      if (curr.toLowerCase().includes(searchText.toLowerCase())) {
        arr.push({ value: curr });
      }
    }

    setOptions(arr);
    props.setSymbol(searchText);
  }

  return (
    <AutoComplete
      options={options}
      style={{
        width: 200,
        marginRight: "25px",
      }}
      onSearch={onSearch}
      placeholder="Enter Stock Symbol"
    />
  );
}
