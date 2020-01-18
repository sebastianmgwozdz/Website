import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 275
    }
  }
}));

export default function ValidationTextField(props) {
  const classes = useStyles();
  const { setItem, requirements, label } = props;

  const [error, setError] = useState(false);
  const [, setCurrInput] = useState("");
  const [requirementStrings] = useState(new Set(Object.keys(requirements)));

  async function handleChange(e) {
    let newInput = e.target.value;

    for (let key in requirements) {
      Promise.resolve(requirements[key](newInput))
        .then(requirementMet => {
          if (requirementMet) {
            requirementStrings.delete(key);
          } else {
            requirementStrings.add(key);
          }
        })
        .then(() => {
          setCurrInput(newInput);
          setError(requirementStrings.size !== 0 && newInput.length !== 0);

          if (requirementStrings.size === 0) {
            setItem(newInput);
          } else {
            setItem("");
          }
        });
    }
  }

  function getText() {
    let arr = [];
    requirementStrings.forEach((val1, val2, set) => {
      arr.push(
        <span key={val2}>
          {val1}
          <br></br>
        </span>
      );
    });

    return arr;
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        error={error}
        label={label}
        helperText={error && getText()}
        variant="outlined"
        onChange={handleChange}
      />
    </form>
  );
}
