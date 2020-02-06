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
  const { timeRemaining, duration } = props;

  return (
    <div className={classes.root}>
      <LinearProgress
        variant="determinate"
        value={(timeRemaining * 10) / (duration / 10) - 1}
        color="secondary"
      />
    </div>
  );
}

export default ProgressBar;
