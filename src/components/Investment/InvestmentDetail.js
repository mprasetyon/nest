import React, { Component } from "react";

import {
  Grid,
  ImageList,
  ImageListItem,
  TextField,
  Button,
  Box,
  Paper,
  Typography,
  Link,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import NumberFormat from "react-number-format";

import { DataInvestmentDetail } from "../../data/DataDetailInvestment";
import { DataFacilities } from "../../data/DataFacilities";

export default class InvestmentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investment: DataInvestmentDetail,
      value: "1",
      facilities: DataFacilities,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <>
        <div className="bg-gray-500 w-80 font-semibold text-white mt-10">
          <p className="py-2 px-16 antialiased">
            INVESTMENT DETAILS : Name of Building
          </p>
        </div>
        <div className="container mx-auto grid py-8">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <div className="text-gray-500 font-semibold w-full border-2 shadow-lg rounded-lg">
                <ImageList
                  sx={{
                    gridAutoFlow: "column",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(140px,1fr)) !important",
                    gridAutoColumns: "minmax(140px, 1fr)",
                  }}
                  cols={3}
                  rowHeight={400}
                >
                  {this.state.investment.map((image, index) => (
                    <ImageListItem sx={{ width: 200 }} key={index}>
                      <img
                        src={`${image.path}`}
                        srcSet={`${image.path}`}
                        alt="Data Investment Detail"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="grid grid-cols-2 text-gray-500 font-semibold w-full border-2 shadow-lg rounded-lg p-8 gap-4">
                <div className="grid grid-rows-2 grid-flow-col">
                  <div>Dana dibutuhkan</div>
                  <div>
                    <NumberFormat
                      value={5000000000}
                      displayType={"text"}
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="Rp. "
                    />
                  </div>
                </div>
                <div className="grid grid-rows-2 grid-flow-col">
                  <div>ROI</div>
                  <div>13%</div>
                </div>
                <div className="grid grid-rows-2 grid-flow-col">
                  <div>Harga Per Lembar</div>
                  <div>
                    <NumberFormat
                      value={1000}
                      displayType={"text"}
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix=""
                    />
                  </div>
                </div>
                <div className="grid grid-rows-2 grid-flow-col">
                  <div>Total Lembar</div>
                  <div>
                    <NumberFormat
                      value={5000000}
                      displayType={"text"}
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix=""
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-3 text-gray-500 font-semibold w-full border-2 shadow-lg rounded-lg p-8 gap-y-4">
                <TextField
                  id="input-lembar"
                  label="Lembar Saham"
                  variant="standard"
                  fullWidth
                />
                <div className="grid grid-cols-2">
                  <p> Total Investasi</p>
                  <NumberFormat
                    value={1000}
                    displayType={"text"}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix=""
                  />
                </div>
                <Button variant="contained">Become an investor</Button>
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className="flex justify-end mb-1 ">
                <span className="text-sm font-medium text-gray-700 dark:text-white">
                  Crowdfunding is going on (filled {40}
                  %)
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                <div
                  className="bg-red-800 h-2.5 rounded-full"
                  style={{ width: "40%" }}
                >
                  {""}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <Paper>
                <Box sx={{ width: "100%", typography: "body1" }}>
                  <TabContext value={this.state.value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={this.handleChange}
                        aria-label="lab API tabs example"
                      >
                        <Tab label="About" value="1" />
                        <Tab label="Document" value="2" />
                        <Tab label="Location" value="3" />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <Typography component="h2" variant="h5">
                        About
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse eget ipsum non ligula mollis ultricies ut et
                        dolor. Nam id fermentum ipsum, id tincidunt odio.
                        Praesent ut nisl quis libero placerat mattis sed at
                        nisi. Fusce a vehicula nibh. Vestibulum accumsan iaculis
                        bibendum. Sed at posuere sapien, ac porta lectus. Donec
                        tincidunt, mauris id ultrices ullamcorper, eros leo
                        hendrerit ante, sit amet tincidunt lorem arcu sed velit.
                        Maecenas consequat scelerisque ullamcorper. Nam a tellus
                        sit amet diam aliquam tempus ac eu ipsum. Suspendisse
                        aliquet, tortor eu malesuada pretium, metus nisi
                        faucibus tellus, sed ullamcorper metus nisi id dui.
                        Nullam ut augue tempus, vestibulum felis sit amet,
                        fringilla diam. Proin bibendum odio eu metus rutrum
                        posuere. Quisque eu nisi eu nibh dignissim porta. Sed
                        vel neque vitae ligula suscipit interdum in id ante.
                        Vivamus semper at neque imperdiet interdum. Nulla sed
                        metus libero. Vestibulum gravida diam neque, at
                        convallis arcu feugiat et. Aliquam ut massa lacus. Fusce
                        imperdiet enim tellus, at molestie elit consequat ut.
                        Donec id arcu nec odio suscipit eleifend. Nulla congue
                        non augue at ornare. Donec consequat massa mi, sed
                        venenatis justo lacinia et. Sed commodo elit et odio
                        facilisis, ut ultricies neque condimentum. Aliquam erat
                        volutpat. Suspendisse interdum eros et massa laoreet
                        placerat. Suspendisse potenti. Nulla facilisi. Duis
                        efficitur nisi sed varius ultrices. In scelerisque
                        tristique sem id tincidunt. Suspendisse non venenatis
                        augue. Nulla gravida ipsum massa, sit amet semper augue
                        ultrices quis. Nam in lacus nec enim tincidunt lacinia.
                      </Typography>
                      <Typography component="h2" variant="h5">
                        Facilities
                      </Typography>
                      <div className="grid grid-cols-6 sm:grid-cols-6 lg:grid-cols-6 w-80 gap-4 my-4">
                        {this.state.facilities.map((fac, index) => (
                          <div key={index}>
                            <img
                              src={fac.path}
                              alt={fac.name}
                              className="bg-gray-100 rounded-lg p-1 border-2"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 w-80 gap-4 my-4 ml-8">
                        <ul className="list-disc">
                          <li>5 Bedroom</li>
                          <li>Air conditioner</li>
                          <li>Swimming pool</li>
                        </ul>
                        <ul className="list-disc">
                          <li>BBQ</li>
                          <li>Kitchen</li>
                          <li>6 Bathroom</li>
                        </ul>
                      </div>
                    </TabPanel>
                    <TabPanel value="2">
                      <Typography component="h2" variant="h5">
                        Document
                      </Typography>
                      <Link
                        href={require("../../assets/file/TEST NEST.pdf")}
                        target="blank"
                      >
                        Download Prospektus
                      </Link>
                    </TabPanel>
                    <TabPanel value="3">
                      <Typography component="h2" variant="h5">
                        Location
                      </Typography>
                    </TabPanel>
                  </TabContext>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}
