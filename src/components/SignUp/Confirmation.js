import React, { Component } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import DefaultPict from "../../assets/img/pict.png";

export default class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }
  handleChange(files) {
    console.log(files);
    this.setState({
      files: files,
    });
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  prev = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { nik, namaktp, npwp, income, occupation, funds, mother },
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
              <Grid item xs={2}>
                <Stepper orientation="vertical" activeStep={3}>
                  <Step>
                    <StepLabel> </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel> </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel> </StepLabel>
                  </Step>
                </Stepper>
              </Grid>
              <Grid item xs={10}>
                <p className="font-bold text-gray-600 text-2xl">
                  Step 3: Confirmation
                </p>
                <p className="font-base text-gray-400 text-xl">
                  Make sure all of the information you already registered are
                  correct.
                </p>

                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <List>
                      <ListItem>
                        <ListItemText primary="Full Name" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Email" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Phone Number" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="NIK" secondary={nik} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="KTP" secondary={namaktp} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="NPWP" secondary={npwp} />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={4}>
                    <List>
                      <ListItem>
                        <ListItemText primary="Income" secondary={income} />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Occupation"
                          secondary={occupation}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Source of Funds"
                          secondary={funds}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Biologic's Mother Name"
                          secondary={mother}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems="center"
                  xs={12}
                >
                  <div className="mx-2">
                    <p className="font-base text-center text-gray-400 text-xl">
                      KTP
                    </p>
                    <Box
                      sx={{
                        height: 150,
                        width: 200,
                        p: 2,
                        border: "2px solid grey",
                      }}
                    >
                      <div className="items-center">
                        <img src={DefaultPict} alt="KTP" />
                      </div>
                    </Box>
                  </div>
                  <div className="mx-2">
                    <p className="font-base text-center text-gray-400 text-xl">
                      NPWP
                    </p>
                    <Box
                      sx={{
                        height: 150,
                        width: 200,
                        p: 2,
                        border: "2px solid grey",
                      }}
                    >
                      <div className="items-center">
                        <img src={DefaultPict} alt="NPWP" />
                      </div>
                    </Box>
                  </div>
                  <div className="mx-2">
                    <p className="font-base text-center text-gray-400 text-xl">
                      FOTO SELFIE
                    </p>
                    <Box
                      sx={{
                        height: 150,
                        width: 200,
                        p: 2,
                        border: "2px solid grey",
                      }}
                    >
                      <div className="items-center">
                        <img src={DefaultPict} alt="FOTO SELFIE" />
                      </div>
                    </Box>
                  </div>
                  <div className="mx-2">
                    <p className="font-base text-center text-gray-400 text-xl">
                      SIGNATURE
                    </p>
                    <Box
                      sx={{
                        height: 150,
                        width: 200,
                        p: 2,
                        border: "2px solid grey",
                      }}
                    >
                      <div className="items-center">
                        <img src={DefaultPict} alt="SIGNATURE" />
                      </div>
                    </Box>
                  </div>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  xs={12}
                >
                  <div className="mx-2 my-4">
                    <label className="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2 text-gray-700">
                        <p>
                          I agree with the{" "}
                          <Link
                            to="/about/TermsAndConditions"
                            className="hover:text-blue-500 text-red-800"
                          >
                            Terms and Conditions
                          </Link>{" "}
                          of NEST.
                        </p>
                      </span>
                    </label>
                  </div>
                </Grid>
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
