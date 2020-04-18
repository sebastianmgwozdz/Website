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

export function del(url) {
  axios.delete(url).catch(function(error) {
    console.log(error);
  });
}

export function post(url, data) {
  axios.post(url, data).catch(function(error) {
    console.log(error);
  });
}

export function isOpen(date) {
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
