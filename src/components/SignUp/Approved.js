import React, { Component } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Stepper, Step, StepLabel } from "@material-ui/core";

import { MdCheckCircleOutline } from "react-icons/md";

export default class Approved extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  prev = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
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
                <Stepper orientation="vertical" activeStep={0}>
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
                  Step 1: Identity Verification
                </p>
                <p className="font-base text-gray-400 text-xl">
                  After register your account, you should verifiy your identity.
                  Please fill in the data below.
                </p>
                <div className="my-10">
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                    xs="10"
                    columnSpacing="5"
                  >
                    <MdCheckCircleOutline size={100} />
                    <p className="font-bold text-gray-600 text-2xl text-center">
                      Identity approved!
                    </p>
                    <p className="font-base text-gray-400 text-xl text-center">
                      You may now proceed to the next step
                    </p>
                  </Grid>
                </div>
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
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                  >
                    Next
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
