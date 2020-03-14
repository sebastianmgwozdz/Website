import axios from "axios";

export default async function latestQuote(ticker) {
  let currPrice;

  await axios
    .get(
      "https://finnhub.io/api/v1/quote?symbol=" +
        ticker +
        "&token=bpleiinrh5r8m26im1dg"
    )
    .then(function(response) {
      currPrice = response.data["c"];
    })
    .catch(function(error) {
      console.log(error);
    });

  return currPrice;
}
