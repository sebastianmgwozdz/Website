import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    maxHeight: 350
  },
  media: {
    height: 100
  }
});

export default function ProjectCard(props) {
  const { image, title, text, switchFunc } = props;
  const classes = useStyles();

  return (
    <div style={{ marginLeft: "2%" }}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Router>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                switchFunc();
              }}
            >
              Demo
            </Button>
          </Router>
        </CardActions>
      </Card>
    </div>
  );
}
