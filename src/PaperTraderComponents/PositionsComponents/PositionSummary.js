import React, { useState, useEffect } from "react";
import Header from "./Header";
import { withFirebase } from "../../Firebase";
import ActivePositions from "./ActivePositions";
import ClosedPositions from "./ClosedPositions";
import PriceCounter from "../CompaniesComponents/PriceCounter";
import { get } from "../Helpers";
import BalanceButton from "./BalanceButton";
import AboutCompany from "./AboutCompany";
import { Divider } from "antd";
import CompanyNews from "./CompanyNews";
import DayCard from "./DayCard";

const headerStyle = {
  fontSize: "40px",
  marginTop: "10px",
};

const buttonStyle = {
  width: "12vw",
  height: "8vh",
  fontSize: "22px",
  margin: "6vh",
};

const tableStyle = {
  marginBottom: "5vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function PositionSummary(props) {
  const [companyName, setCompanyName] = useState("");
  const [price, setPrice] = useState("");
  const [graphData, setGraphData] = useState(undefined);

  useEffect(() => {
    get(
      "https://finnhub.io/api/v1/stock/profile2?symbol=" +
        props.ticker +
        "&token=bpleiinrh5r8m26im1dg"
    ).then((res) => {
      setCompanyName(res["name"]);
    });
    get(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
        props.ticker +
        "&interval=5min&apikey=MZVTEZTGKT653IH3"
    ).then((res) => {
      setGraphData(Object.values(res)[1]);
    });
  }, [props.ticker]);

  console.log(graphData);

  return (
    <div style={{ textAlign: "center", width: "100vw" }}>
      <Header returnFunc={props.returnFunc}></Header>
      <div style={headerStyle}>
        {props.ticker + (companyName ? " (" + companyName + ")" : "")}
      </div>
      <PriceCounter ticker={props.ticker} setPrice={setPrice}></PriceCounter>
      <BalanceButton
        style={buttonStyle}
        symbol={props.ticker}
        text={"Trade"}
      ></BalanceButton>
      <Divider></Divider>
      <DayCard
        data={graphData}
        width={750}
        height={450}
        reference={price["pc"]}
      ></DayCard>
      <Divider>Summary</Divider>
      {price ? (
        <AboutCompany ticker={props.ticker} price={price}></AboutCompany>
      ) : null}
      <Divider>Active Positions</Divider>
      <ActivePositions
        ticker={props.ticker}
        style={tableStyle}
      ></ActivePositions>
      <Divider>Closed Positions</Divider>
      <ClosedPositions
        ticker={props.ticker}
        style={tableStyle}
      ></ClosedPositions>
      <Divider>Related News</Divider>
      <CompanyNews ticker={props.ticker}></CompanyNews>
    </div>
  );
}

export default withFirebase(PositionSummary);
