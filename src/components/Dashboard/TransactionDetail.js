import React, { Component } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import NumberFormat from "react-number-format";

import ButtonRed from "../../reusableComponents/button/ButtonRed";

export default class TransactionDetail extends Component {
  render() {
    return (
      <div className="flex justify-center font-roboto md:container md:mx-auto container mx-auto px-16 py-8 lg:flex">
        <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
          <Container component="main" maxWidth="lg">
            <CssBaseline />
            <p className="font-bold text-gray-600 text-2xl pl-8 pt-6">
              Transaction Details
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
                <div>Tanggal</div>
                <div>22/02/2022 15:36</div>
              </div>
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Kode Saham</div>
                <div>ABCD</div>
              </div>
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Nama Properti</div>
                <div>ABC Luxury House</div>
              </div>
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Jumlah</div>
                <div>2000 Lembar</div>
              </div>
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Nilai</div>
                <div>
                  <NumberFormat
                    value={20000000}
                    displayType={"text"}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix="Rp. "
                  />
                </div>
              </div>
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Kode Transaksi</div>
                <div>TR1234</div>
              </div>
              <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400 border-b-2">
                <div>Status</div>
                <p className="text-green-600">Transaksi Berhasil</p>
              </div>
              <div className="flex justify-center py-8">
                <ButtonRed>Bantuan</ButtonRed>
              </div>
            </Box>
          </Container>
        </div>
      </div>
    );
  }
}
