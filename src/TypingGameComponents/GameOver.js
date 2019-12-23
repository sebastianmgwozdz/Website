import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";

function GameOver(props) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const WPM = ((props.correctChars / 5) * 2).toFixed(0);

  let accuracy =
    props.charsPressed > 0
      ? ((props.correctChars / props.charsPressed) * 100).toFixed(0)
      : 100;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Game Over"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Final Speed: {WPM} words per minute
            <br></br>
            Final Accuracy: {accuracy}%
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            component={Link}
            to="/typinggame"
            onClick={handleClose}
            color="primary"
          >
            Home
          </Button>
          <Button onClick={props.resetFunc} color="primary" autoFocus>
            Play Again
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default GameOver;
