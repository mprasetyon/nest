import React, { Component } from "react";

import Step1 from "./Step1";
import Confirmation from "./Confirmation";

import Awaiting from "./Awaiting";
import Approved from "./Approved";
import Funding from "./Funding";
 
export default class SignUp2 extends Component {
  state = {
    step: 1,
    nik: "",
    namaktp: "",
    npwp: "",
    fotoktp: "",
    fotoselfie: "",
    fotonpwp: "",
    income: "",
    occupation: "",
    funds: "",
    mother: "",
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
    const {
      nik,
      namaktp,
      npwp,
      fotoktp,
      fotoselfie,
      fotonpwp,
      income,
      occupation,
      funds,
      mother,
    } = this.state;

    const values = {
      nik,
      namaktp,
      npwp,
      fotoktp,
      fotoselfie,
      fotonpwp,
      income,
      occupation,
      funds,
      mother,
    };

    switch (step) {
      case 1:
        return (
          <div className="flex justify-center md:container md:mx-auto container mx-auto px-16 py-8 lg:flex">
            <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
              <Step1
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex justify-center md:container md:mx-auto container mx-auto px-16 py-8 lg:flex">
            <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
              <Awaiting
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex justify-center md:container md:mx-auto container mx-auto px-16 py-8 lg:flex">
            <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
              <Approved
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex justify-center md:container md:mx-auto container mx-auto px-16 py-8 lg:flex">
            <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
              <Funding
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="flex justify-center md:container md:mx-auto container mx-auto px-16 py-8 lg:flex">
            <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
              <Confirmation
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}
