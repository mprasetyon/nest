import React from "react";
import ImageSignUp from "../../assets/img/ImageSignUp.png";
import Nest from "../../assets/img/nest-logo.png";

import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import api from "../../data/Api"


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      confirm_password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    var log = await api.register(
      this.state.fullname,
      this.state.email,
      this.state.password,
      this.state.confirm_password,
    );
    if (log.success) this.props.history.push("/signup-2");
    else alert(log.message);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <div className="flex justify-center md:container md:mx-auto container mx-auto px-16 py-8 lg:flex">
          <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
            <div className="lg:w-2/3 relative overflow-hidden rounded-l-xl">
              <div className="object-cover bg-red-800 h-full w-full">
                <img
                  src={ImageSignUp}
                  alt="gambar-signup"
                  className="h-full w-full scale-y-125"
                />
                <div className="absolute top-0 left-0">
                  <img src={Nest} alt="gambar-logo-nest" className="scale-75" />
                </div>
                <div className="absolute bottom-10 left-0">
                  <h1 className="font-bold text-white text-3xl pl-20 pt-20">
                    WHY NEST ?
                  </h1>
                  <div className="text-white px-20 pr-50 tracking-wide">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-full py-10 px-5">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-red-800">SIGN UP</h1>
                  <p>
                    A platform where you can invest with a small capital in
                    property
                  </p>
                </div>
                <div>
                  <div className="flex -mx-3 my-2">
                    <div className="w-full px-3 ">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaUserAlt />
                        </div>
                        <input
                          onChange={this.handleInputChange}
                          name="fullname"
                          value={this.state.fullname}
                          type="text"
                          id="floating_filled"
                          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer pl-10"
                          placeholder=" "
                        />
                        <label
                          htmlFor="floating_filled"
                          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 pl-6"
                        >
                          Full Name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3 my-2">
                    <div className="w-full px-3 ">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaEnvelope />
                        </div>
                        <input
                          onChange={this.handleInputChange}
                          name="email"
                          value={this.state.email}
                          type="email"
                          id="email"
                          required
                          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer pl-10"
                          placeholder=" "
                        />
                        <label
                          htmlFor="floating_filled"
                          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 pl-6"
                        >
                          Email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex -mx-3 my-2">
                    <div className="w-full px-3">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaLock />
                        </div>
                        <input
                          name="password"
                          value={this.state.password}
                          onChange={this.handleInputChange}
                          type="password"
                          id="password"
                          required
                          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer pl-10"
                          placeholder=" "
                        />
                        <label
                          htmlFor="floating_filled"
                          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 pl-6"
                        >
                          Password
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3 mb-5">
                    <div className="w-full px-3">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaLock />
                        </div>
                        <input
                          name="confirm_password"
                          value={this.state.confirm_password}
                          onChange={this.handleInputChange}
                          type="password"
                          id="cpassword"
                          required
                          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer pl-10"
                          placeholder=" "
                        />
                        <label
                          htmlFor="floating_filled"
                          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 pl-6"
                        >
                          Confirm Password
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3 mb-5">
                    <label className="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2 text-gray-700">
                        <p>
                          Creating an account means you're agree with our{" "}
                          <Link
                            to="/about/TermsAndConditions"
                            className="hover:text-red-800 text-blue-800"
                          >
                            Terms and Conditions
                          </Link>
                        </p>
                      </span>
                    </label>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 ">
                      <button
                        onClick={this.handleSubmit}
                        className="block w-full max-w-xs mx-auto bg-white border-2 rounded-2xl hover:bg-red-800 hover:text-white focus:bg-gray-700 text-gray-600 px-3 py-3 font-semibold"
                      >
                        SIGN UP
                      </button>
                      <p className="text-center py-2">
                        Already have an account?
                        <Link to="/login" className="text-blue-500">
                          {" "}
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
