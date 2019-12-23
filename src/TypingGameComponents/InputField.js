import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

function InputField(props) {
  return (
    <form className={useStyles()} noValidate autoComplete="off">
      <TextField
        variant="outlined"
        onChange={props.changeFunc}
        value={props.value}
      />
    </form>
  );
}

export default InputField;
