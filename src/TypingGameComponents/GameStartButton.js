import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function GameStartButton(props) {
  return (
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
      <Button variant="contained" onClick={props.clickFunc}>
        Start
      </Button>
    </div>
  );
}

export default GameStartButton;
