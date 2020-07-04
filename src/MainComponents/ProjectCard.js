import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router } from "react-router-dom";
import { Modal } from "antd";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    maxHeight: 350,
  },
  media: {
    height: 100,
  },
});

export default function ProjectCard(props) {
  const { switchFunc, data } = props;
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginLeft: "2%" }}>
      <Modal
        title={data["title"]}
        visible={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <p>{data["video"]}</p>
        <p>{data["features"]}</p>
        <p>{data["function"]}</p>
        <p>{data["tools"]}</p>
        <p>{data["demo"]}</p>
      </Modal>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={data["image"]} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data["title"]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data["description"]}
          </Typography>
        </CardContent>
        <CardActions>
          <Router>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                setOpen(true);
              }}
            >
              More Info
            </Button>
          </Router>
        </CardActions>
      </Card>
    </div>
  );
}
