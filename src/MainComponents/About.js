import React from "react";
import "./css/About.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "gray",
  },
  inline: {
    display: "inline",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className="About-Background" id="about">
      <header className="About-Header">
        About Me
        <span className="About-Subtext">
          From an early age, I have always had a place in my heart for
          technology. I appreciate tech in all forms, from cars to smartphones,
          though computers have interested me the most. When I am not studying,
          playing guitar, or listening to music, I will be channeling my
          creativity to build something that leaves me feeling fulfilled.
          Programming is one of the many tools I use to achieve that.
        </span>
        <span style={{ marginBottom: "2%", marginTop: "2%" }}>Skills</span>
        <div>
          <div style={{ float: "left" }}>
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Java" src="icons/java.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Java" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="JavaScript" src="icons/javascript.png" />
                </ListItemAvatar>
                <ListItemText primary="JavaScript" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="React" src="icons/react.png" />
                </ListItemAvatar>
                <ListItemText primary="React" />
              </ListItem>
            </List>
          </div>
          <div style={{ float: "left" }}>
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="C#" src="icons/csharp.png" />
                </ListItemAvatar>
                <ListItemText primary="C#" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Python" src="icons/python.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Python" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="HTML" src="icons/html.png" />
                </ListItemAvatar>
                <ListItemText primary="HTML" />
              </ListItem>
            </List>
          </div>
        </div>
      </header>
    </div>
  );
}
