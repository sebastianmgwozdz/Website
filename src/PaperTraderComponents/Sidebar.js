import React from "react";
import { Menu } from "antd";
import MarketCounter from "./MarketCounter";

export default function Sidebar(props) {
  function getMenuItems() {
    let items = [];
    for (let i = 0; i < 5; i++) {
      items.push(
        <Menu.Item
          key={i}
          onClick={() => {
            props.setMenuOption(i);
          }}
        >
          Option {i + 1}
        </Menu.Item>
      );
    }
    return items;
  }

  return (
    <Menu
      mode="inline"
      style={{ width: 256, height: "100vh" }}
      defaultSelectedKeys={["0"]}
    >
      <MarketCounter></MarketCounter>

      {getMenuItems()}
    </Menu>
  );
}
