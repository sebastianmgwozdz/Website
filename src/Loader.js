import React, { useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    maxHeight: "100vh"
  }
}));

export default function Loader(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.loading);

  useEffect(() => {
    setOpen(props.loading);
  }, [props.loading]);

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
