import React from "react";
import "./css/NavBar.css";
import { Divider } from "antd";

export default function NavBar(props) {
  function change(val) {
    props.setPage(val);
  }

  const labels = ["Home", "About Me", "Projects", "Education"];

  function menuItems() {
    let items = [];
    for (let i = 0; i < labels.length; i++) {
      let value = labels[i];
      let item = (
        <a
          onClick={() => {
            change(i);
          }}
          style={{
            fontSize: props.page === i ? "22px" : "18px",
            textShadow: props.page === i ? "0 0 3px #d9d7d7" : null,
            color: "#ffffff",
          }}
        >
          {value}
        </a>
      );

      items.push(item);

      if (i < labels.length - 1) {
        items.push(
          <span
            style={{
              marginLeft: "1vw",
              marginRight: "1vw",
              color: "#ffffff",
              fontSize: "24px",
            }}
          >
            /
          </span>
        );
      }
    }

    return items;
  }

  return (
    <div
      class="fade-in"
      style={{
        height: "8vh",
        zIndex: 9,
        position: "absolute",
        width: "100vw",
      }}
    >
      <div
        style={{
          paddingTop: "1.5vh",
          textAlign: "right",
          paddingRight: "7vw",
        }}
      >
        {menuItems()}
      </div>
    </div>
  );
}
