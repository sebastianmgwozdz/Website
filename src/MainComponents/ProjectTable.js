import React, { Fragment } from "react";
import "./css/Projects.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, description, toolsUsed, link) {
  return { name, description, toolsUsed, link };
}

const rows = [
  createData(
    "Shortest Path",
    "Application that finds the shortest path between start and end points specified by the user, and draws the path taken. Utilizes Dijkstra/A* algorithms and HashSet/LinkedHashSet/HashMap/2D Array Data Structures.",
    "Java, JavaFX",
    "https://github.com/sebastianmgwozdz/Shortest-Path"
  ),
  createData(
    "Stock Market",
    "Application allowing the user to search a stock and see its graph and the daily statistics, by parsing data from a CSV file. Utilizes TreeSet, TreeMap, and array Data Structures.",
    "Java, JavaFX",
    "https://github.com/sebastianmgwozdz/Stock-Market"
  ),

  createData(
    "Evasive Maneuvers",
    "Sidescroller game inspired by Helicopter Game and Flappy Bird, where the user maneuvers through a series of obstacles in the air.",
    "Python, Pygame",
    "https://github.com/sebastianmgwozdz/Evasive-Maneuvers"
  )
];

export default function ProjectTable() {
  const classes = useStyles();

  return (
    <div style={{ width: "48%" }}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Tools Used</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.link ? <a href={row.link}>{row.name}</a> : row.name}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.toolsUsed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
