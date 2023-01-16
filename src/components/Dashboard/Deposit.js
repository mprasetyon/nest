import React, { Component } from "react";

import DepositForm from "./DepositForm";
import DepositDetail from "./DepositDetail";

export default class Deposit extends Component {
  classes = {
    root: {
      flexGrow: 1,
      fontFamily: "Roboto",
    },
    paper: {
      padding: 20,
      textAlign: "center",
      color: "blue",
      fontFamily: "Roboto",
    },
  };

  state = {
    step: 1,
    metode: "",
    bank: "",
    jumlah: null,
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { metode, bank, jumlah } = this.state;

    const values = {
      metode,
      bank,
      jumlah,
    };

    switch (step) {
      case 1:
        return (
          <div
            className="flex justify-center md:container md:mx-auto container mx-auto px-16 py-8 lg:flex"
            style={this.classes.root}
          >
            <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
              <DepositForm
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div
            className="flex justify-center md:container md:mx-auto container mx-auto px-16 py-8 lg:flex "
            style={this.classes.root}
          >
            <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
              <DepositDetail
                handleChange={this.handleChange}
                values={values}
                prevStep={this.prevStep}
              />
            </div>
          </div>
        );
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}
