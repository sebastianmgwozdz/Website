import React, { useState, useEffect } from "react";
import Header from "./Header";
import { withFirebase } from "../../Firebase";
import ActivePositions from "./ActivePositions";
import ClosedPositions from "./ClosedPositions";
import PriceCounter from "../CompaniesComponents/PriceCounter";
import { get } from "../Helpers";
import BalanceButton from "./BalanceButton";
import AboutCompany from "./AboutCompany";

const headerStyle = {
  fontSize: "40px",
  marginTop: "10px",
};

const textStyle = {
  margin: "3vh",
  fontSize: "20px",
  marginTop: "10px",
  color: "black",
};

const buttonStyle = {
  width: "12vw",
  height: "8vh",
  fontSize: "22px",
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
      <div style={textStyle}>Active Positions</div>
      <ActivePositions ticker={props.ticker}></ActivePositions>
      <div style={textStyle}>Closed Positions</div>
      <ClosedPositions ticker={props.ticker}></ClosedPositions>
      <AboutCompany ticker={props.ticker} price={price}></AboutCompany>
    </div>
  );
}

export default withFirebase(PositionSummary);
