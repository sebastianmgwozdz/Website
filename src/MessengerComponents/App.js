import React from "react";
import bcrypt from "bcryptjs";
import axios from "axios";

export default function App() {
  function hashAndStore(em, pass, user) {
    bcrypt.hash(pass, 10, (err, hash) => {
      if (err) {
        console.error(err);
        return;
      }
      insertUser(em, hash, user);
    });
  }

  function insertUser(em, pass, user) {
    axios
      .post("https://sgwomessenger.azurewebsites.net/api/users", {
        email: em,
        password: pass,
        username: user
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  hashAndStore("lol@meme.com", "test", "terenger");

  return <div>test</div>;
}
