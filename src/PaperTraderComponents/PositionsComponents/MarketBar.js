import React from "react";
import MarketCard from "./MarketCard";

import { Tabs, Popover, Button } from "antd";

const c1 = <MarketCard name="NASDAQ" symbol="QQQ"></MarketCard>;
const c2 = <MarketCard name="DJIA" symbol="DIA"></MarketCard>;
const c3 = <MarketCard name="S&P 500" symbol="SPY"></MarketCard>;

export default function MarketBar() {
  return (
    <div>
      <Popover content={c1} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
      <Popover content={c2} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
      <Popover content={c3} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
    </div>
  );
}
