import React from "react";
import "./css/About.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "gray"
  },
  inline: {
    display: "inline"
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className="About-Background" id="about">
      <div className="About-Header">
        About Me
        <div className="About-Subtext">
          From an early age, I have always had a place in my heart for
          technology. I appreciate tech in all forms, from cars to smartphones,
          though computers have interested me the most. When studying, reading,
          or listening to music, I will be channeling my creativity to build
          something that leaves me feeling fulfilled. Programming is one of many
          tools I use to achieve that.
        </div>
        <div style={{ marginBottom: "2%", marginTop: "2%" }}>Skills</div>
        <div>
          <div style={{ float: "left" }}>
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Brunch this weekend?" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="Summer BBQ" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Oui Oui" />
              </ListItem>
            </List>
          </div>
          <div style={{ float: "left" }}>
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Brunch this weekend?" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="Summer BBQ" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Oui Oui" />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}
