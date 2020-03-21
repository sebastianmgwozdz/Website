import axios from "axios";

export async function get(url) {
  let res;

  await axios
    .get(url)
    .then(function(response) {
      res = response.data;
    })
    .catch(function(error) {
      console.log(error);
    });

  return res;
}

export async function post(url, data) {
  await axios.post(url, data).catch(function(error) {
    console.log(error);
  });
}

export function isOpen() {
  let date = new Date();

  let currDay = date.getUTCDay();
  let currHour = date.getUTCHours();
  let currMin = date.getUTCMinutes();

  return !(
    currDay === 0 ||
    currDay === 6 ||
    currHour < 13 ||
    currHour >= 20 ||
    (currHour === 13 && currMin < 30)
  );
}
