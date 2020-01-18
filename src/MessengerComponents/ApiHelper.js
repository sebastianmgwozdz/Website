import axios from "axios";

export function get(extension) {
  return axios
    .get("https://sgwomessenger.azurewebsites.net/api/" + extension)
    .then(function(response) {
      return response;
    });
}

export function postUser(displayName, em, pass) {
  axios.post("https://sgwomessenger.azurewebsites.net/api/users", {
    username: displayName,
    email: em,
    password: pass
  });
}
