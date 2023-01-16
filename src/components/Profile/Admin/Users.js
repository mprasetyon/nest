import React, { Component } from "react";
import { Link } from "react-router-dom";

// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import TableFooter from "@mui/material/TableFooter";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

import { BsThreeDots } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: false,
    };
  }

  user = [
    {
      id: 1,
      name: "Jane Doe",
      regist_date: "02/02/2022 09:30:12",
      status: "Successful",
    },
    {
      id: 2,
      name: "Jane Doe",
      regist_date: "02/02/2022 09:30:12",
      status: "Pending Verification",
    },
    {
      id: 3,
      name: "Jane Doe",
      regist_date: "02/02/2022 09:30:12",
      status: "Successful",
    },
    {
      id: 4,
      name: "Jane Doe",
      regist_date: "02/02/2022 09:30:12",
      status: "Pending Verification",
    },
    {
      id: 5,
      name: "Jane Doe",
      regist_date: "02/02/2022 09:30:12",
      status: "Successful",
    },
    {
      id: 6,
      name: "Jane Doe",
      regist_date: "02/02/2022 09:30:12",
      status: "Pending Verification",
    },
    {
      id: 7,
      name: "Jane Doe",
      regist_date: "02/02/2022 09:30:12",
      status: "Successful",
    },
    {
      id: 8,
      name: "Jane Doe",
      regist_date: "02/02/2022 09:30:12",
      status: "Pending Verification",
    },
  ];

  render() {
    return (
      <div>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h4" gutterBottom component="div">
              Users
            </Typography>

            <Box component="form">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Search "
                    // value={this.state.searchNote}
                    // onChange={(e) => this.onChangeSearchNote(e)}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<FaSearch />}
                    color="error"
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <div className="mt-8">
              <TableContainer component={Paper}>
                <Table sx={{}} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">No</TableCell>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Register Date</TableCell>
                      <TableCell align="center">Status</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.user &&
                      this.user.map((users, index) => (
                        <TableRow key={index}>
                          <TableCell align="right">{index + 1}</TableCell>
                          <TableCell>{users.name}</TableCell>
                          <TableCell align="center">
                            {users.regist_date}
                          </TableCell>
                          <TableCell>{users.status}</TableCell>
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
            {/* <Dialog
          open={this.state.alert}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Delete "{this.state.delTitle}" ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} autoFocus>
              Cancel
            </Button>
            <Button onClick={this.deleteRow}>Yes</Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.error}
          onClose={this.handleClose}
          aria-labelledby="error-dialog-title"
          aria-describedby="error-dialog-description"
        >
          <DialogTitle id="error-dialog-title">Failed</DialogTitle>
          <DialogContent>
            <DialogContentText id="error-dialog-description">
              {this.state.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog> */}
          </Paper>
        </Grid>
      </div>
    );
  }
}
