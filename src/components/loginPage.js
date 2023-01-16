import React from "react";
import ImageSignUp from "../assets/img/ImageSignUp.png";
import Nest from "../assets/img/nest-logo.png";

import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import api from "../data/Api";

import Cookies from "universal-cookie";
const cookies = new Cookies();

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "user@nest.com", password: "password" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    if (cookies.get("token")) {
      this.props.history.push("/dashboard");
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    var log = await api.login(this.state.username, this.state.password);

    if (log.success) {
      cookies.set("token", log.data.token, { path: "/" });
      cookies.set("user_name", log.data.name, { path: "/" });
      // redirect
      this.props.history.go("/dashboard");
    } else alert(log.message);
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
                <div className="px-20 pr-50 tracking-wide text-white">
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
                <h1 className="font-bold text-3xl text-red-800">SIGN IN</h1>
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
                        <FaEnvelope />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
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
                        type="password"
                        id="password"
                        required
                        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer pl-10"
                        placeholder=" "
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
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
                <div className="flex -mx-3">
                  <div className="w-full px-3 ">
                    <button
                      onClick={this.handleSubmit}
                      className="block w-full max-w-xs mx-auto bg-white border-2 rounded-2xl hover:bg-red-800 hover:text-white focus:bg-gray-700 text-gray-600 px-3 py-3 font-semibold"
                    >
                      SIGN IN
                    </button>
                    <div className="flex justify-between">
                      <div>
                        <label className="inline-flex items-center mt-3">
                          <input
                            type="radio"
                            className="form-radio h-5 w-5 text-green-600"
                          />
                          <span className="ml-2 text-gray-700">
                            Remember Me
                          </span>
                        </label>
                      </div>
                      <div>
                        <Link
                          to="/login"
                          className="text-blue-500 inline-flex items-center mt-3"
                        >
                          Forgot Password
                        </Link>
                      </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="w-full flex flex-col gap-2">
                      <button className="bg-white shadow-lg shadow-blue-200/50 text-black w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-gray-600 hover:text-white rounded-3xl border-2 duration-100 ease-in-out">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          className="w-5"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                        Sign-in with Google
                      </button>
                      <button className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-blue-700 duration-100 rounded-3xl ease-in-out">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          className="w-5"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"
                            fill="currentColor"
                          />
                        </svg>
                        Sign-in with Facebook
                      </button>
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

export default withRouter(LoginPage);
