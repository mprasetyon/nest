import React, { Component } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import NumberFormatCustom from "../../helper/NumberFormatCustom";
import Bank from "../../assets/img/Dashboard/bank.png";

export default class DepositForm extends Component {
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
          <p className="font-bold text-gray-600 text-2xl pl-4 pt-6">Deposit</p>
          <Box
            sx={{
              marginTop: 2,
              marginBottom: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="occupation">Metode Deposit</InputLabel>
                  <Select
                    labelId="select-method"
                    id="select-deposit-method"
                    label="Pilih Metode Deposit"
                    onChange={handleChange("metode")}
                    value={values.metode}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Transfer Bank">Transfer Bank</MenuItem>
                    <MenuItem value="Virtual Account">Virtual Account</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="occupation">Bank</InputLabel>
                  <Select
                    labelId="select-bank"
                    id="select-deposit-bank"
                    label="Pilih Bank"
                    onChange={handleChange("bank")}
                    value={values.bank}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="BRI">BRI</MenuItem>
                    <MenuItem value="BCA">BCA</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  required
                  id="jumlah"
                  label="Jumlah"
                  variant="standard"
                  onChange={handleChange("jumlah")}
                  value={values.jumlah}
                  fullWidth
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                    startAdornment: (
                      <InputAdornment position="start">Rp. </InputAdornment>
                    ),
                  }}
                />
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
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <div className="my-4">
                <p className="text-2xl font-bold">PERHATIAN !</p>
                <p className="text-lg font-bold">
                  Limit deposit Anda adalah
                  <span className="text-red-800"> Rp 1.500.000</span>
                </p>
              </div>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="outlined" onClick={this.continue}>
                NEXT
              </Button>
            </Grid>
          </Box>
        </Container>
      </>
    );
  }
}
