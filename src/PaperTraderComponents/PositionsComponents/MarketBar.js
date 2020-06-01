import React from "react";
import MarketCard from "./MarketCard";

import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function MarketBar() {
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        <MarketCard name="NASDAQ" symbol="QQQ"></MarketCard>
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <MarketCard name="DJIA" symbol="DIA"></MarketCard>
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        <MarketCard name="S&P 500" symbol="QQQ"></MarketCard>
      </TabPane>
    </Tabs>
  );
}
