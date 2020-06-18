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

  useEffect(() => {
    get(
      "https://finnhub.io/api/v1/stock/profile2?symbol=" +
        props.ticker +
        "&token=bpleiinrh5r8m26im1dg"
    ).then((res) => {
      setCompanyName(res["name"]);
    });
  }, [props.ticker]);

  return (
    <div style={{ textAlign: "center" }}>
      <Header returnFunc={props.returnFunc}></Header>
      <div style={headerStyle}>
        {props.ticker + (companyName ? " (" + companyName + ")" : "")}
      </div>
      <PriceCounter ticker={props.ticker} setPrice={setPrice}></PriceCounter>
      <BalanceButton
        style={buttonStyle}
        symbol={props.ticker}
        text={"Trade"}
        price={price}
      ></BalanceButton>
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
      <Divider>Summary</Divider>
      {price ? (
        <AboutCompany ticker={props.ticker} price={price}></AboutCompany>
      ) : null}
    </div>
  );
}

export default withFirebase(PositionSummary);
