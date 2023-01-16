import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
 
export default class Step1 extends Component {
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
  render() {
    const { values, handleChange } = this.props;
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
                <TextField
                  placeholder="Enter NIK"
                  label="NIK"
                  onChange={handleChange("nik")}
                  defaultValue={values.nik}
                  fullWidth
                  margin="dense"
                />
                <TextField
                  placeholder="Enter Your Name"
                  label="Your Name"
                  onChange={handleChange("namaktp")}
                  defaultValue={values.namaktp}
                  fullWidth
                  margin="dense"
                />{" "}
                <TextField
                  placeholder="Enter Your NPWP"
                  label="NPWP"
                  onChange={handleChange("npwp")}
                  defaultValue={values.npwp}
                  fullWidth
                  margin="dense"
                />
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                  xs="10"
                >
                  <p className="text-center m-8 font-bold text-gray-500">
                    Upload a picture of
                  </p>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={3}>
                    <DropzoneArea
                      onChange={this.handleChange.bind(this)}
                      dropzoneText={" "}
                    />
                    <p className="text-center mt-2 font-bold text-gray-500">
                      KTP
                    </p>
                  </Grid>
                  <Grid item xs={3}>
                    <DropzoneArea
                      onChange={this.handleChange.bind(this)}
                      dropzoneText={" "}
                    />
                    <p className="text-center mt-2 font-bold text-gray-500">
                      Selfie
                    </p>
                  </Grid>
                  <Grid item xs={3}>
                    <DropzoneArea
                      onChange={this.handleChange.bind(this)}
                      dropzoneText={" "}
                    />
                    <p className="text-center mt-2 font-bold text-gray-500">
                      NPWP
                    </p>
                  </Grid>
                  <Grid item xs={3}>
                    <DropzoneArea
                      onChange={this.handleChange.bind(this)}
                      dropzoneText={" "}
                    />
                    <p className="text-center mt-2 font-bold text-gray-500">
                      Signature
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                xs={12}
              >
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.continue}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </>
    );
  }
}
