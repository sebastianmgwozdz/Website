import axios from "axios";

export async function latestQuote(ticker) {
  let currPrice;

  await axios
    .get(
      "https://finnhub.io/api/v1/quote?symbol=" +
        ticker +
        "&token=bpleiinrh5r8m26im1dg"
    )
    .then(function(response) {
      currPrice = response.data;
    })
    .catch(function(error) {
      console.log(error);
    });

  return currPrice;
}

export async function positions(userId) {
  let positions = [];

  await axios
    .get("http://localhost:8080/positions/" + userId)
    .then(function(response) {
      positions = response.data;
    })
    .catch(function(error) {
      console.log(error);
    });

  return positions;
}

export async function allStocks() {
  let stocks = [];

  await axios
    .get(
      "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bpleiinrh5r8m26im1dg"
    )
    .then(function(response) {
      stocks = response.data;
    })
    .catch(function(error) {
      console.log(error);
    });

  return stocks;
}
