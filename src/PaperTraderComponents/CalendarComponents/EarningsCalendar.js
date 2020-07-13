import React, { useState, useEffect } from "react";
import { Calendar, Select, Col, Row, Typography, Badge, Card } from "antd";
import { get } from "../Helpers";

export default function EarningsCalendar() {
  const [earnings, setEarnings] = useState(undefined);

  useEffect(() => {
    let start = Date.now();
    let end = start + 2628000000;

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

  function symbolList(earnings) {}

  function getListData() {
    if (!earnings) {
      return [];
    }

    let data = [];

    for (let d of earnings.keys()) {
      let e = earnings.get(d).map((val) => {
        return <li>{val["symbol"]}</li>;
      });

      data.push(
        <Card title={d} style={{ width: 300 }}>
          {<ul>{e}</ul>}
        </Card>
      );
    }

    console.log(data);

    return data.reverse();
  }

  return <div>{getListData()}</div>;
}
