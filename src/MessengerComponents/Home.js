import React, { useState, useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { get } from "./ApiHelper";

function Home(props) {
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [tick, setTick] = useState(0);

  if (props.firebaseAppAuth.currentUser === undefined) {
    props.history.push("/messenger");
  }

  useEffect(() => {
    let timer = setInterval(async () => {
      await updateMessages();
      setTick(tick + 1);
    }, 5000);
    props.firebaseAppAuth.onAuthStateChanged(function(user) {
      if (!user) {
        clearInterval(timer);
      }
    });
  }, []);

  async function updateMessages() {
    await get(
      "messages/for/" + props.firebaseAppAuth.currentUser.displayName
    ).then(result => {
      if (messages.length < result.data.length) {
        for (let i = messages.length; i < result.data.length; i++) {
          messages.push(
            <div key={result.data[i].messageId}>{result.data[i].text}</div>
          );
        }
      }
    });
  }

  console.log(messages);
  return (
    <Fragment>
      <button
        onClick={() => {
          props.firebaseAppAuth
            .signOut()
            .then(props.history.replace("/messenger"));
        }}
      >
        Sign out
      </button>
      {messages}
    </Fragment>
  );
}

export default withRouter(Home);
