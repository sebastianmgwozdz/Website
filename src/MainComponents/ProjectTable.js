import React from "react";
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export default function ProjectTable() {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
  /*
  return (
    <Table striped bordered hover className="Aligned-Table" variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="https://github.com/sebastianmgwozdz/Sudoku">Sudoku</a>
          </td>
          <td>
            A console based Sudoku game that I made while learning recursion. It
            utilizes backtracking by finding all possible winning scenarios
            given a specific board.
          </td>
          <td>Java</td>
        </tr>
        <tr>
          <td>
            <a href="https://github.com/sebastianmgwozdz/Clicking">Clicking</a>
          </td>
          <td>
            My first attempt at a Java Swing application. It features two games,
            one for tracking the user's reaction times and the other for testing
            mouse accuracy.
          </td>
          <td>Java</td>
        </tr>
        <tr>
          <td>
            <a href="https://github.com/sebastianmgwozdz/Tic-tac-toe">
              Tic-tac-toe
            </a>
          </td>
          <td>
            A 2D tic-tac-toe game that utilizes the pygame and pynum libraries.
            Includes rudimentary, reactive AI.
          </td>
          <td>Python</td>
        </tr>
        <tr>
          <td>
            <a href="https://github.com/sebastianmgwozdz/Evasive-Maneuvers">
              Evasive-Maneuvers
            </a>
          </td>
          <td>
            A sidescrolling game inspired by Helicopter Game and Flappy Bird.
          </td>
          <td>Python</td>
        </tr>
        <tr>
          <td>
            <a href="https://github.com/sebastianmgwozdz/Stock-Market">
              Stock-Market
            </a>
          </td>
          <td>
            My first application using the JavaFX library. It allows the user to
            search a stock and see its history displayed on a line graph. From
            there, the user can see various information like closing price,
            low/high, volume for each individual day. The data is pulled from a
            CSV file and parsed within the application.
          </td>
          <td>Java</td>
        </tr>
        <tr>
          <td>
            <a href="https://github.com/sebastianmgwozdz/Shortest-Path">
              Shortest-Path
            </a>
          </td>
          <td>
            Application made while learning Dijkstra / A* algorithms. The user
            sets a starting point, ending point, and obstacles that cannot be
            crossed. The algorithm finds the shortest path between the start and
            end points, and draws it all out on a grid.
          </td>
          <td>Java</td>
        </tr>
      </tbody>
    </Table>
  ); */
}
