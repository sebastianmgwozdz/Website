import React, { useState } from "react";
import { AutoComplete } from "antd";
import { get } from "../Helpers";

let stocks = new Map();
get(
  "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bpleiinrh5r8m26im1dg"
).then((res) => {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 26; i++) {
    let char = chars[i];
    stocks.set(
      char,
      res
        ? res.filter((val) => {
            return val["displaySymbol"][0] === char;
          })
        : []
    );
  }
});

export default function Autocomplete(props) {
  const [options, setOptions] = useState([]);

  console.log("Autocomplete");

  async function onSearch(searchText) {
    let arr = [];
    if (!searchText) {
      setOptions([]);
      return;
    }

    let filtered = stocks.get(searchText[0].toUpperCase());
    if (!filtered) {
      setOptions([]);
      return;
    }
    for (let i = 0; i < filtered.length; i++) {
      let curr = filtered[i]["displaySymbol"];
      if (curr.toLowerCase().includes(searchText.toLowerCase())) {
        arr.push({ value: curr });
      }
    }

    setOptions(arr);
    props.setSymbol(searchText);
  }

  function selectStock(symbol) {
    props.setSelectedVal(symbol);
    currPrice(symbol).then((res) => {
      props.setPrice(res);
    });
  }

  async function currPrice(ticker) {
    let currPrice;

    await get(
      "https://finnhub.io/api/v1/quote?symbol=" +
        ticker +
        "&token=bpleiinrh5r8m26im1dg"
    ).then((res) => {
      if (res) {
        currPrice = res["c"];
      }
    });

    return currPrice;
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
