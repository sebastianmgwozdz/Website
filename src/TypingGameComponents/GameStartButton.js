import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Loader from "../Loader";

function GameStartButton(props) {
  const { words, wordFunc, clickFunc } = props;
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Loader loading={loading}></Loader>
      <div
        className={
          makeStyles(theme => ({
            root: {
              "& > *": {
                margin: theme.spacing(1)
              }
            }
          })).root
        }
      >
        <Button
          variant="contained"
          onClick={() => {
            setLoading(true);
            words().then(result => {
              wordFunc(result);
              setLoading(false);
              clickFunc();
            });
          }}
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default GameStartButton;
