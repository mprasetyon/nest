import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import api from "../../data/Api";
// import { setCurrentPage, setCurrentPageSize } from "../../redux/action/common";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import NumberFormat from "react-number-format";

import Cookies from "universal-cookie";
const cookies = new Cookies();

class Assets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      currentPageSize: 10,
      count: 1,
      assets: null,
    };
  }

  async componentDidMount() {
    if (!cookies.get("token")) {
      this.props.history.push("/login");
    }

    var data = await api.dashboard_asset();
    this.setState({ assets: data.data });
  }

  pageSizes = [5, 10, 20, 30, 50];

  // handlePageSizeChange = (event) => {
  //   this.props.currentPageSize(event.target.value).then(() => {
  //     this.currentPage(1).then(() => {
  //       this.render_asset();
  //     });
  //   });
  // };

  render_asset(item, index) {
    return (
      <TableRow hover key={index}>
        <TableCell align="right">{index + 1}</TableCell>
        <TableCell align="right">{item.properties.name}</TableCell>
        <TableCell align="right">
          <NumberFormat
            value={item.total_book}
            displayType={"text"}
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix={""}
          />{" "}
          Lembar
        </TableCell>
        <TableCell align="right">
          <NumberFormat
            value={item.total_price}
            displayType={"text"}
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix={"Rp. "}
          />
        </TableCell>
        <TableCell align="right">See Detail</TableCell>
      </TableRow>
    );
  }

  render() {
    return (
      <>
        <div className="flex justify-center font-roboto md:container md:mx-auto container mx-auto px-16 py-8 lg:flex">
          <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
            <Container component="main" maxWidth="lg">
              <CssBaseline />
              <p className="font-bold text-gray-600 text-2xl pl-8 pt-6">
                Assets
              </p>
              <Box
                sx={{
                  marginTop: 2,
                  marginBottom: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TableContainer component={Paper}>
                  <Table sx={{}} size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell width={5}>No.</TableCell>
                        <TableCell align="center">Assets</TableCell>
                        <TableCell align="center">Jumlah Lembar</TableCell>
                        <TableCell align="center">Total</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.assets
                        ? this.state.assets.map((item, index) =>
                            this.render_asset(item, index),
                          )
                        : null}
                    </TableBody>

                    <TableFooter>
                      {/* <TableRow>
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
                                  value={this.state.currentPageSize}
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
                            <Grid item xs={12} sm={9} justifyContent="center">
                              <Grid container justifyContent="center">
                                <Stack spacing={2}>
                                  <Pagination
                                    count={this.state.count}
                                    page={this.state.currentPage}
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
                      </TableRow> */}
                    </TableFooter>
                  </Table>
                </TableContainer>
              </Box>
            </Container>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(Assets);