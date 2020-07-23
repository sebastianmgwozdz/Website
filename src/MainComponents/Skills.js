import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: "#999997",
    height: 210,
    paddingLeft: "1vw",
    paddingRight: "1vw",
  },
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <div>
      <div style={{ float: "left" }} className={classes.root}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Java" />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText primary="JavaScript" />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText primary="React" />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText primary="C#" />
          </ListItem>
        </List>
      </div>
      <div
        style={{ float: "left", paddingLeft: "5vw" }}
        className={classes.root}
      >
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText primary="HTML" />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText primary="SQL" />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Python" />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText primary="CSS" />
          </ListItem>
        </List>
      </div>
      <div
        style={{ float: "left", paddingLeft: "5vw" }}
        className={classes.root}
      >
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText primary="ASP.NET Core" />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Spring Boot" />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Git" />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Node.js" />
          </ListItem>
        </List>
      </div>
      <div
        style={{ float: "left", paddingLeft: "5vw" }}
        className={classes.root}
      >
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText primary="MySQL" />
          </ListItem>
          <Divider />
        </List>
      </div>
    </div>
  );
}
