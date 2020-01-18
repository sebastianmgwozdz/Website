import React, { useState, Fragment } from "react";
import ValidationTextField from "./ValidationTextField";
import {
  userNameRequirements,
  emailRequirements,
  passRequirements
} from "./SignUpRequirements";
import NavigationButton from "./NavigationButton";
import { hashAndPostUser } from "./BcryptHelper";

export default function Validation(props) {
  const { firebaseAppAuth } = props;
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function createAccount() {
    firebaseAppAuth.createUserWithEmailAndPassword(email, pass).then(() => {
      hashAndPostUser(user, email, pass);
      firebaseAppAuth.currentUser.updateProfile({
        displayName: user
      });
    });
  }

  return (
    <Fragment>
      <ValidationTextField
        requirements={emailRequirements}
        setItem={setEmail}
        label="Email"
      ></ValidationTextField>
      <ValidationTextField
        requirements={userNameRequirements}
        setItem={setUser}
        label="Username"
      ></ValidationTextField>

      <ValidationTextField
        requirements={passRequirements}
        setItem={setPass}
        label="Password"
      ></ValidationTextField>
      <NavigationButton
        disabled={!user || !pass || !email}
        onClick={createAccount}
        text="Register"
      ></NavigationButton>
    </Fragment>
  );
}
