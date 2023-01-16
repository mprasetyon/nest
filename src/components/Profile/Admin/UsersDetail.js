import React, { Component } from "react";
import { Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";

import { List, ListItem } from "@material-ui/core/";

import { BsThreeDots } from "react-icons/bs";
import AvaPict from "../../../assets/img/Ellipse 1.png";

export default class UsersDetail extends Component {
  user = [
    {
      id: 1,
      property: "ABC Luxury House",
      regist_date: "02/02/2022",
      amount: "1224",
    },
    {
      id: 2,
      property: "ABC Luxury House",
      regist_date: "02/02/2022",
      amount: "2345",
    },
    {
      id: 3,
      property: "ABC Luxury House",
      regist_date: "02/02/2022",
      amount: "1234",
    },
    {
      id: 4,
      property: "ABC Luxury House",
      regist_date: "02/02/2022",
      amount: "1235",
    },
    {
      id: 5,
      property: "ABC Luxury House",
      regist_date: "02/02/2022",
      amount: "2346",
    },
    {
      id: 6,
      property: "ABC Luxury House",
      regist_date: "02/02/2022",
      amount: "2134",
    },
    {
      id: 7,
      property: "ABC Luxury House",
      regist_date: "02/02/2022",
      amount: "1234",
    },
    {
      id: 8,
      property: "ABC Luxury House",
      regist_date: "02/02/2022",
      amount: "1245",
    },
  ];

  render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom component="div">
          User Detail
        </Typography>
        <Paper elevation={3} sx={{ p: 2, mb: 6 }}>
          <Box
            sx={{
              p: 3,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={2}>
                <Avatar
                  alt="Gambar User Detail"
                  src={AvaPict}
                  sx={{ width: 150, height: 150 }}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <List>
                  <ListItem>
                    <p className="text-red-800 text-2xl font-bold">Jane Doe</p>
                  </ListItem>
                  <ListItem>
                    <p className="text-gray-500 text-lg font-bold">
                      02/02/2022 09:30:12
                    </p>
                  </ListItem>
                  <ListItem>
                    <p className="text-gray-500 text-lg font-bold">
                      Pending Verification
                    </p>
                  </ListItem>
                </List>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item>
                    <Button variant="outlined" color="error">
                      Verify Account
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="error">
                      Freeze Account
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>

        <TableContainer component={Paper}>
          <Table sx={{}} size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">No</TableCell>
                <TableCell align="center">Property</TableCell>
                <TableCell align="center">Transaction Date</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.user &&
                this.user.map((users, index) => (
                  <TableRow key={index}>
                    <TableCell align="right">{index + 1}</TableCell>
                    <TableCell>{users.property}</TableCell>
                    <TableCell align="center">{users.regist_date}</TableCell>
                    <TableCell>{users.amount}</TableCell>
                    <TableCell>
                      <IconButton aria-label="detail">
                        <Link to={"/admin/user-detail/" + users.id}>
                          <BsThreeDots />
                        </Link>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>

            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={6}>
                  <Grid container>
                    <Grid item xs={12} sm={3}>
                      <FormControl
                        fullWidth={true}
                        variant="standard"
                        sx={{ minWidth: 100 }}
                      >
                        <InputLabel id="perpagelabel">
                          Items per Page
                        </InputLabel>
                        <Select
                          labelId="perpagelabel"
                          label="Items per Page"
                          value={this.props.common.currentPageSize}
                          onChange={this.handlePageSizeChange}
                        >
                          {this.pageSizes.map((size, index) => (
                            <MenuItem key={index} value={size}>
                              {size}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={9} justifyContent="flex-end">
                      <Grid container justifyContent="flex-end">
                        <Stack spacing={2}>
                          <Pagination
                            count={this.state.count}
                            page={this.props.common.currentPage}
                            onChange={this.handlePageChange}
                            color="primary"
                            siblingCount={1}
                            boundaryCount={1}
                          />
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
        </TableContainer>
      </div>
    );
  }
}
