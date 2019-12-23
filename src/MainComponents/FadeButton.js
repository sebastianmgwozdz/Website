import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import DataCard from "./DataCard";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    height: 180
  },
  container: {
    display: "flex"
  },
  paper: {
    margin: theme.spacing(1)
  },
  svg: {
    width: 100,
    height: 100
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
}));

export default function FadeButton(props) {
  const classes = useStyles();
  const [active, setActive] = React.useState(false);

  const handleChange = () => {
    setActive(prev => !prev);
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={handleChange}>
        {props.label}
      </Button>

      <div className={classes.container}>
        <Fade in={active}>
          <Paper elevation={4} className={classes.paper}>
            <DataCard text={props.text}></DataCard>
          </Paper>
        </Fade>
      </div>
    </div>
  );
}
