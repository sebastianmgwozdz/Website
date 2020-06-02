import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { get } from "../Helpers";
import { server } from "../../links";
import { withFirebase } from "../../Firebase";

const columns = [
  {
    title: "Open Date",
    dataIndex: "openDate",
    key: "openDate",
  },
  {
    title: "Close Date",
    dataIndex: "closeDate",
    key: "closeDate",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Initial",
    dataIndex: "initial",
    key: "initial",
  },

  {
    title: "Type",
    key: "type",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag === "Buy" ? "green" : "red";

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
];

function localTime(utc) {
  let local = utc.valueOf();
  let offset = utc.getTimezoneOffset() * 60 * 1000;
  console.log(utc.getTimezoneOffset());
  local -= offset;
  return new Date(local);
}

function formattedDate(date) {
  return date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
}

function ClosedPositions(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    get(
      server +
        "positions/id=" +
        props.firebase.auth.currentUser.uid +
        "/ticker=" +
        props.ticker +
        "/closed"
    ).then((res) => {
      setData(res);
    });
  }, [props.ticker, props.firebase.auth.currentUser.uid]);

  function formattedData() {
    return data.map((entry, index) => {
      let openDate = localTime(new Date(entry["openDate"]));
      let closeDate = localTime(new Date(entry["closeDate"]));

      return {
        key: index,
        openDate: formattedDate(openDate),
        closeDate: formattedDate(closeDate),
        price: entry["price"] / 100,
        initial: entry["initial"],
        tags: [entry["isLong"] ? "Buy" : "Short"],
        long: entry["isLong"],
      };
    });
  }

  return (
    <Table columns={columns} dataSource={formattedData()} style={props.style} />
  );
}

export default withFirebase(ClosedPositions);
