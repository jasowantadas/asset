import React, { useState, useEffect } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import  Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";

function Logs() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let value = data.map((item, i) => ({
          name: item.name,
          phone: item.phone,
          username: item.username,
          website: item.website,
        }));
        setTableData(value);
      });
  }, []);
  console.log(tableData);
  return (
    <Grid item xs={9}>
      <Typography variant="h6" style={{marginTop: 30, marginBottom: 30, color: '#ffffff'}}>Asset Logs </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{background: 'yellow'}}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((item) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell >{item.phone}</TableCell>
                <TableCell >{item.username}</TableCell>
                <TableCell >{item.website}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Logs;
