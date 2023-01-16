import React, { Component } from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { DropzoneArea } from "material-ui-dropzone";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";

import NumberFormatCustom from "../../../helper/NumberFormatCustom";
import PhoneNumberFormat from "../../../helper/PhoneNumberFormat";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class AddProperty extends Component {
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

  async componentDidMount() {
    if (!cookies.get("token")) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <div className="bg-gray-500 w-80 font-semibold text-white my-10">
          <p className="py-2 px-16 antialiased ">ADD PROPERTY</p>
        </div>
        <Paper>
          <div className="p-4">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ my: 1 }}
            >
              <DropzoneArea
                onChange={(files) => console.log("Files:", files)}
              />
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ my: 1 }}
            >
              <TextField
                placeholder="Property Name"
                label="Property Name"
                //   onChange={handleChange("npwp")}
                //   defaultValue={values.npwp}
                fullWidth
                margin="dense"
              />
              <TextField
                placeholder="Address"
                label="Address"
                // onChange={handleChange("npwp")}
                // defaultValue={values.npwp}
                fullWidth
                margin="dense"
              />
              <TextField
                placeholder="Description"
                label="Description"
                // onChange={handleChange("npwp")}
                // defaultValue={values.npwp}
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
              sx={{ my: 1 }}
            >
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  my: 1,
                }}
              >
                <TextField
                  required
                  id="contact"
                  label="Contact"
                  variant="standard"
                  //   onChange={handleChange("income")}
                  //   defaultValue={values.income}
                  fullWidth
                  InputProps={{
                    inputComponent: PhoneNumberFormat,
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                  fullWidth
                >
                  <InputLabel id="Position">Position</InputLabel>
                  <Select
                    labelId="Position"
                    id="position"
                    label="Position"
                    value="Vendor"
                  >
                    <MenuItem value="Vendor">Vendor</MenuItem>
                    <MenuItem value="Contractor">Contractor</MenuItem>
                    <MenuItem value="Manager">Manager</MenuItem>
                    <MenuItem value="Developer">Developer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  my: 2,
                }}
              >
                <input type="file" id="upload-file" />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
              sx={{ my: 1 }}
            >
              <Grid item xs={12} sm={3} sx={{ my: 1 }}>
                <TextField
                  required
                  id="jumlah"
                  label="Jumlah"
                  variant="standard"
                  //   onChange={handleChange("income")}
                  //   defaultValue={values.income}
                  fullWidth
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                    startAdornment: (
                      <InputAdornment position="start">Rp. </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={5}>
                    Jangka Waktu
                    <TextField type="date" fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12} sm={2} sx={{ mt: 4 }}>
                    <Typography>Sampai</Typography>
                  </Grid>
                  <Grid item xs={12} sm={5} sx={{ mt: 3 }}>
                    <TextField type="date" fullWidth variant="standard" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={2}
                sx={{
                  my: 1,
                }}
              >
                <TextField
                  required
                  id="alokasi-saham"
                  label="Alokasi Saham (%)"
                  variant="standard"
                  type="number"
                  //   onChange={handleChange("income")}
                  //   defaultValue={values.income}
                  fullWidth
                  min="0"
                  max="1"
                  step="0.01"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ my: 1 }}
            >
              <Typography variant="h6" gutterBottom component="div">
                Facilities
              </Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ my: 1 }}
            >
              <Typography variant="h6" gutterBottom component="div">
                Document
              </Typography>
              <input type="file" id="upload-file" />
            </Grid>
          </div>
        </Paper>
      </div>
    );
  }
}
