import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";

import NumberFormatCustom from "../../helper/NumberFormatCustom";

export default class Funding extends Component {
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
                <Stepper orientation="vertical" activeStep={1}>
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
                  Step 2: Funding
                </p>
                <p className="font-base text-gray-400 text-xl">
                  We need information about the source of your funds.
                </p>
                <TextField
                  required
                  id="jumlah"
                  label="Jumlah"
                  variant="standard"
                  onChange={handleChange("income")}
                  defaultValue={values.income}
                  fullWidth
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                    startAdornment: (
                      <InputAdornment position="start">Rp. </InputAdornment>
                    ),
                  }}
                />
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="occupation">Occupation</InputLabel>
                      <Select
                        labelId="select-occupation"
                        id="select-occupation"
                        onChange={handleChange("occupation")}
                        value={values.occupation}
                        label="Occupation"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="General employees">
                          General employees
                        </MenuItem>
                        <MenuItem value="PNS">PNS</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="funding">Source of funds</InputLabel>
                      <Select
                        labelId="select-funding"
                        id="select-funding"
                        onChange={handleChange("funds")}
                        value={values.funds}
                        label="Source of funds"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Salary">Salary</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <TextField
                  placeholder="Biological mother's name"
                  label="Biological Mother's Name"
                  onChange={handleChange("mother")}
                  defaultValue={values.mother}
                  fullWidth
                  margin="dense"
                />
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                fullWidth
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
