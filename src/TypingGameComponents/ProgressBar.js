import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

function ProgressBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress
        variant="determinate"
        value={(props.timeRemaining * 10) / 3 - 1}
        color="secondary"
      />
    </div>
  );
}

export default ProgressBar;
