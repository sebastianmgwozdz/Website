import React, { Fragment } from "react";
import "./css/FrontPage.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={850}
          >
            About Me
          </Link>
        </Button>
        <Button>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={0}
            duration={850}
          >
            Education
          </Link>
        </Button>
        <Button>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={850}
          >
            Projects
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
}
