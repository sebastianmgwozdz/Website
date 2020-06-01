import React, { useEffect, useState } from "react";
import { List } from "antd";
import { get } from "../Helpers";

const liStyle = {
  width: "15vw",
  display: "inline-block",
  textAlign: "left",
};

export default function AboutCompany(props) {
  const [values, setValues] = useState({
    quote: undefined,
    mktCap: undefined,
    pe: undefined,
  });

  console.log(values);

  async function quote() {
    let data = [];
    await get(
      "https://finnhub.io/api/v1/quote?symbol=" +
        props.ticker +
        "&token=bpleiinrh5r8m26im1dg"
    ).then((res) => {
      data.push("Open: " + res["o"]);
      data.push("High: " + res["h"]);
      data.push("Low: " + res["l"]);
      data.push("Previous Close: " + res["pc"]);
    });

    return data;
  }

  async function mktCap() {
    let m;
    await get(
      "https://finnhub.io/api/v1/stock/profile2?symbol=" +
        props.ticker +
        "&token=bpleiinrh5r8m26im1dg"
    ).then((res) => {
      if (res["marketCapitalization"]) {
        m = "Market Cap: " + formattedMktCap(res["marketCapitalization"]);
      }
    });

    return m;
  }

  function formattedMktCap(val) {
    let num = Number(val);

    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "T";
    } else {
      return (num / 1000).toFixed(2) + "B";
    }
  }

  async function pe() {
    let p;

    let currDate = new Date().toISOString().substring(0, 10);
    let lastDate =
      Number(currDate.substring(0, 4)) - 1 + currDate.substring(4, 10);

    await get(
      "https://finnhub.io/api/v1/calendar/earnings?from=" +
        lastDate +
        "&to=" +
        currDate +
        "&symbol=" +
        props.ticker +
        "&token=bpleiinrh5r8m26im1dg"
    ).then((p) => {
      console.log(p);
      if (p["earningsCalendar"][0] && p["earningsCalendar"][0]["epsActual"]) {
        p = "P/E Ratio: " + props.price / p["earningsCalendar"][0]["epsActual"];
      }
    });

    return p;
  }

  useEffect(() => {
    async function fetch() {
      let q = await quote();
      let m = await mktCap();
      let p = await pe();
      return [q, m, p];
    }
    fetch().then((res) => {
      setValues({ quote: res[0], mktCap: res[1], pe: res[2] });
    });
  }, []);

  function data() {
    console.log(values);

    let arr = [];

    for (let i of Object.values(values)) {
      if (Array.isArray(i)) {
        for (let el of i) {
          arr.push(listItem(el));
        }
      } else {
        arr.push(listItem(i));
      }
    }
    return arr;
  }

  function listItem(str) {
    if (!str) {
      return "";
    }

    console.log(str);
    let colon = str.indexOf(":");

    let label = str.substring(0, colon + 1);
    let value = str.substring(colon + 2, str.length);

    return (
      <div>
        <span style={liStyle}>{label}</span>
        {value}
      </div>
    );
  }

  let d = data();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <List
        size="large"
        bordered
        dataSource={d}
        renderItem={(item) => <List.Item>{item}</List.Item>}
        style={{ width: "45vh" }}
      />
    </div>
  );
}
