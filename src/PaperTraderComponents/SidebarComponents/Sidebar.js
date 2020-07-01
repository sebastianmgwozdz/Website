import React from "react";
import { Menu } from "antd";
import MarketCounter from "./MarketCounter";

const menuLabels = ["Positions", "Companies", "Earnings Calendar", "Account"];

export default function Sidebar(props) {
  function getMenuItems() {
    let items = [];
    for (let i = 0; i < menuLabels.length; i++) {
      items.push(
        <Menu.Item
          key={i}
          onClick={() => {
            props.setMenuOption(i);
          }}
        >
          {menuLabels[i]}
        </Menu.Item>
      );
    }

    return items;
  }

  return (
    <Menu
      mode="inline"
      style={{ maxWidth: "17vw" }}
      defaultSelectedKeys={["0"]}
    >
      <MarketCounter></MarketCounter>

      {getMenuItems()}
    </Menu>
  );
}
