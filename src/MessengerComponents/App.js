import React from "react";
import bcrypt from "bcryptjs";
import axios from "axios";
import NavBar from "./NavBar";
import PrivateRoute from "./PrivateRoute";

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
        Nickname: user,
        Email: em,
        Password: pass
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <div>
      <PrivateRoute path="/messenger/home" component={NavBar} />
    </div>
  );
}
