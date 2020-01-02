import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

export default function RangeSlider(props) {
  const { val, changeFunc, text, step, min, max } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(val);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeFunc(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        {text}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        step={step}
        min={min}
        max={max}
      />
    </div>
  );
}
