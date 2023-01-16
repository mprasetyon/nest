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
import BankFormatCustom from "../../helper/BankFormatCustom";
import Bank from "../../assets/img/Dashboard/bank.png";

export default class Withdraw extends Component {
  state = {
    step: 1,
    norek: "",
    bank: "",
    jumlah: null,
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { norek, bank, jumlah } = this.state;

    const values = {
      norek,
      bank,
      jumlah,
    };

    return (
      <div className="flex justify-center font-roboto md:container md:mx-auto container mx-auto px-16 py-8 lg:flex">
        <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
          <Container component="main" maxWidth="lg">
            <CssBaseline />
            <p className="font-bold text-gray-600 text-2xl pl-4 pt-6">
              Withdraw
            </p>
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
                    <InputLabel id="bank">Bank</InputLabel>
                    <Select
                      labelId="select-bank"
                      id="select-deposit-bank"
                      label="Pilih Bank"
                      onChange={this.handleChange("bank")}
                      value={values.bank}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="BRI">BRI</MenuItem>
                      <MenuItem value="BCA">BCA</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    required
                    id="jumlah"
                    label="Jumlah"
                    variant="standard"
                    onChange={this.handleChange("jumlah")}
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
                <Grid item xs={12} sm={5}>
                  <TextField
                    required
                    id="Nomor Rekening"
                    label="Nomor Rekening"
                    variant="standard"
                    onChange={this.handleChange("norek")}
                    value={values.norek}
                    fullWidth
                    InputProps={{
                      inputComponent: BankFormatCustom,
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
                  <p className="text-lg text-red-800 font-semibold">
                    Pastikan nomor rekening beserta bank tujuan sudah benar !
                  </p>
                </div>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Button variant="outlined">Withdraw</Button>
              </Grid>
            </Box>
          </Container>
        </div>
      </div>
    );
  }
}
