import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function NavigationButton(props) {
  const classes = useStyles();
  const { text, disabled, onClick } = props;

  return (
    <Fragment className={classes.root}>
      <Fab variant="extended" disabled={disabled} onClick={onClick}>
        <NavigationIcon className={classes.extendedIcon} />
        {text}
      </Fab>
    </Fragment>
  );
}
