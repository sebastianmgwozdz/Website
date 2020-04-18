import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { get, post } from "../Helpers";
import { server } from "../../links";
import { withFirebase } from "../../Firebase";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price"
  },
  {
    title: "Initial",
    dataIndex: "initial",
    key: "initial"
  },
  {
    title: "Remaining",
    dataIndex: "remaining",
    key: "remaining"
  },
  {
    title: "Type",
    key: "type",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag === "Buy" ? "green" : "red";

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "",
    key: "action",
    dataIndex: "action",
    render: param => (
      <span>
        <a onClick={param.func}>{param.text}</a>
      </span>
    )
  }
];

function localTime(utc) {
  let local = utc.valueOf();
  let offset = utc.getTimezoneOffset() * 60 * 1000;
  console.log(utc.getTimezoneOffset());
  local -= offset;
  return new Date(local);
}

function formattedDate(date) {
  return date.getMonth() + "-" + date.getDate() + "-" + date.getFullYear();
}

function ActivePositions(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    update();
  }, [update]);

  function update() {
    positions().then(res => {
      setData(res);
    });
  }

  function formattedData() {
    return data.map((entry, index) => {
      let date = localTime(new Date(entry["openDate"]));

      return {
        key: index,
        date: formattedDate(date),
        price: entry["price"],
        initial: entry["initial"],
        remaining: entry["remaining"],
        tags: [entry["long"] ? "Buy" : "Short"],
        action: {
          text: entry["long"] ? "Sell All" : "Cover All",
          func: () => {
            action(index);
          }
        }
      };
    });
  }

  async function action(id) {
    let pos = data[id];

    console.log(id);
    console.log(pos);
    pos["remaining"] = 0;
    pos["closeDate"] = new Date();
    post(server + "positions/", pos);
    update();
  }

  async function positions() {
    let d = [];
    let arr = await get(
      server +
        "positions/id=" +
        props.firebase.auth.currentUser.uid +
        "/ticker=" +
        props.ticker
    );

    for (let i = 0; i < arr.length; i++) {
      let entry = arr[i];
      if (entry["remaining"] !== 0) {
        d.push(entry);
      }
    }

    return d;
  }
  return <Table columns={columns} dataSource={formattedData()} />;
}

export default withFirebase(ActivePositions);
