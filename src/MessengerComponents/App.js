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
    let formData = new FormData();
    formData.append("Nickname", user);
    formData.append("Email", em);
    formData.append("Password", pass);

    axios
      .post("https://sgwomessenger.azurewebsites.net/api/users", formData)
      .catch(function(error) {
        console.log(error);
      });
  }

  hashAndStore("lol@meme.com", "test", "terenger");

  return <div>test</div>;
}
