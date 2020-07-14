import React, { useState, useEffect } from "react";
import { Card, Tabs, Badge } from "antd";
import { get } from "../Helpers";

const { TabPane } = Tabs;

export default function EarningsCalendar() {
  const [earnings, setEarnings] = useState(undefined);

  useEffect(() => {
    let start = Date.now();
    let end = start + 2628000000;

    console.log(new Date(start));

    let startForm = new Date(start).toISOString().substring(0, 10);
    let endForm = new Date(end).toISOString().substring(0, 10);

    get(
      "https://finnhub.io/api/v1/calendar/earnings?from=" +
        startForm +
        "&to=" +
        endForm +
        "&token=bpleiinrh5r8m26im1dg"
    ).then((res) => {
      if (res) {
        setEarnings(getMapped(res["earningsCalendar"]));
        console.log(getMapped(res["earningsCalendar"]));
      }
    });
  }, []);

  function getMapped(earnings) {
    let m = new Map();
    for (let e of earnings) {
      let date = e["date"];
      if (m.has(date)) {
        m.get(date).push(e);
      } else {
        m.set(date, [e]);
      }
    }
    return m;
  }

  function getBadgeColor(value) {
    let hour = value["hour"];

    switch (hour) {
      case "bmo":
        return "red";
      case "dmh":
        return "green";
      default:
        return "blue";
    }
  }

  function getListData(date) {
    let arr = earnings.get(date);

    let data = arr.map((val) => {
      return (
        <div>
          <Badge color={getBadgeColor(val)} text={val["symbol"]} />
        </div>
      );
    });

    return <ul>{data}</ul>;
  }

  function getTabs() {
    if (!earnings) {
      return [];
    }

    let t = [];

    let arr = Array.from(earnings.keys()).sort((a, b) => {
      return a.localeCompare(b);
    });

    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
      let date = arr[i];

      t.push(
        <TabPane tab={date} key={i}>
          {getListData(date)}
        </TabPane>
      );
    }

    return t;
  }

  //<Badge color={"red"} text={"Test"} />

  return (
    <header
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Tabs defaultActiveKey="1">{getTabs()}</Tabs>
    </header>
  );
  //return <div>{getListData()}</div>;
}
