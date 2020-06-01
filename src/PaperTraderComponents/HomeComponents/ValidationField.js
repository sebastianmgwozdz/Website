import React, { useState, useEffect } from "react";
import AntButton from "./AntButton";
import { withFirebase } from "../../Firebase";
import InputField from "./InputField";
import { withRouter } from "react-router-dom";
import { Alert } from "antd";

function ValidationField(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [props.login]);

  // CHANGE SUBMIT TO user, pass
  function handleButtonClick() {
    props
      .submit("test@gmail.com", "lolweed")
      .then((res) => {
        props.history.replace("/papertrader/dashboard");
      })
      .catch((err) => {
        setError(true);
      });
  }

  return (
    <div>
      <InputField
        type="user"
        changeFunc={(us) => {
          setError(false);
          setUser(us);
        }}
        style={{}}
      ></InputField>
      <InputField
        type="pass"
        changeFunc={(us) => {
          setError(false);
          setPass(us);
        }}
      ></InputField>
      <AntButton click={handleButtonClick} text="Submit"></AntButton>

      {error ? (
        <Alert message={props.errorMessage} type="error" showIcon />
      ) : null}
    </div>
  );
}

export default withRouter(withFirebase(ValidationField));
