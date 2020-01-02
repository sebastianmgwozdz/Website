import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(3)
  }
}));

export default function DiscreteSlider(props) {
  const classes = useStyles();
  const { text, val, changeFunc } = props;

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        {text}
      </Typography>
      <Slider
        defaultValue={val}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={120}
        onChange={(e, val) => changeFunc(val)}
      />
    </div>
  );
}
