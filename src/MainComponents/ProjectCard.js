import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "antd";

import Typography from "@material-ui/core/Typography";
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
        footer={null}
        width={700}
      >
        <p style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={data["demo"]}
            width="600"
            height="300"
            alt="WORK IN PROGRESS"
          ></img>
        </p>
        <p>{data["features"]}</p>
        <p>{data["function"]}</p>
        <p>{data["tools"]}</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href={data["link"]}>
            <Button type="dashed">GitHub Repository</Button>
          </a>
        </p>
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
        <CardActions
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            type="primary"
            onClick={() => {
              setOpen(true);
            }}
            style={{ backgroundColor: "#ee8040", borderColor: "#ee8040" }}
          >
            More Info
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
