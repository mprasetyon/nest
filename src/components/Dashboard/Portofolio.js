import React, { Component } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import NumberFormat from "react-number-format";

export default class Portofolio extends Component {
  render() {
    return (
      <div className="flex justify-center font-roboto md:container md:mx-auto container mx-auto px-16 py-8 lg:flex">
        <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
          <Container component="main" maxWidth="lg">
            <CssBaseline />
            <p className="font-bold text-gray-600 text-2xl pl-8 pt-6">
              Portofolio
            </p>
            <Box
              sx={{
                marginTop: 2,
                marginBottom: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Nilai Portofolio</div>
                <div>
                  <NumberFormat
                    value={11000000}
                    displayType={"text"}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix="Rp. "
                  />
                </div>
              </div>
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Total Keuntungan (%)</div>
                <div>5%</div>
              </div>
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Total Keuntungan (Rp)</div>
                <div>
                  <NumberFormat
                    value={550000}
                    displayType={"text"}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix="Rp. "
                  />
                </div>
              </div>
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Estimasi Keuntungan (%)</div>
                <div>5%</div>
              </div>
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Estimasi Keuntungan (Rp)</div>
                <div>
                  <NumberFormat
                    value={550000}
                    displayType={"text"}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix="Rp. "
                  />
                </div>
              </div>
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Keuntungan Terealisasi (%)</div>
                <div>5%</div>
              </div>
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Keuntungan Terealisasi (Rp)</div>
                <div>
                  <NumberFormat
                    value={550000}
                    displayType={"text"}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix="Rp. "
                  />
                </div>
              </div>
            </Box>
          </Container>
        </div>
      </div>
    );
  }
}
