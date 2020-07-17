import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
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
  console.log("auto complete");

  async function onSearch(searchText) {
    let arr = [];
    if (!searchText) {
      setOptions([]);
      props.setSymbol("");
      return;
    }

    let filtered = stocks.get(searchText[0].toUpperCase());

    if (filtered) {
      for (let i = 0; i < filtered.length; i++) {
        let curr = filtered[i];

        if (curr.toLowerCase().indexOf(searchText.toLowerCase()) === 0) {
          arr.push({
            value: (
              <span>
                <b> {searchText}</b>
                {curr.substring(searchText.length, curr.length)}
              </span>
            ),
          });
        }
      }
    }

    setOptions(arr);
    props.setSymbol(arr.length === 0 ? "" : searchText);
  }

  return (
    <AutoComplete
      options={options}
      style={{
        width: props.width,
      }}
      onSearch={onSearch}
      onSelect={onSearch}
      placeholder={props.search ? "" : "Enter Stock Symbol"}
      autoFocus
    >
      {props.search ? (
        <Input.Search
          size="large"
          placeholder="Enter Stock Symbol"
          enterButton
        />
      ) : null}
    </AutoComplete>
  );
}
