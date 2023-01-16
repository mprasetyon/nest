import React, { Component } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@mui/material/Button";

import NumberFormat from "react-number-format";
import Bank from "../../assets/img/Dashboard/bank.png";

export default class DepositDetail extends Component {
  prev = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { metode, bank, jumlah },
    } = this.props;
    return (
      <>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              marginBottom: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={10}>
                <p className="font-bold text-gray-600 text-2xl">
                  Deposit Confirmation
                </p>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <List>
                      <ListItem>
                        <ListItemText primary="Metode" secondary={metode} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Bank" secondary={bank} />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Jumlah"
                          secondary={
                            <NumberFormat
                              value={jumlah}
                              displayType={"text"}
                              thousandSeparator="."
                              decimalSeparator=","
                              prefix="Rp. "
                            />
                          }
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Box
                      sx={{
                        height: 150,
                        width: 200,
                        p: 2,
                      }}
                    >
                      <img src={Bank} alt="Bank" />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ marginLeft: 5, marginTop: 10 }}
                xs={12}
              >
                <p className="text-gray-500 font-semibold">
                  Cara Menggunakan Transfer Bank
                </p>
                <ol className="list-decimal list-outside">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                </ol>
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                xs={12}
              >
                <div className="mx-2">
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={this.prev}
                  >
                    Back
                  </Button>
                </div>
                <div className="mx-2">
                  <Button color="primary" variant="contained">
                    Confirm
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </>
    );
  }
}
