import React, { Component } from "react";
import { FiLogOut } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import HomeImage from "../../../assets/img/profile/home.png";
import MoneyImage from "../../../assets/img/profile/Group 468.png";
import RoiImage from "../../../assets/img/profile/blackboard-graph.png";

import { Link } from "react-router-dom";

import Line from "react-apexcharts";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        colors: ["#941C1E"],
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 60, 80, 34, 78],
        },
      ],
    };
  }

  async componentDidMount() {
    if (!cookies.get("token")) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <div className="flex justify-end">
          <button className="bg-white text-red-800 font-bold rounded border-2 border-red-800 hover:border-gray-800 hover:border-2 hover:bg-gray-300 hover:text-black shadow-md inline-flex px-2 py-2.5 items-center mr-2">
            <FaPlus />
            <span className="ml-2">Add Property</span>
          </button>
          <button className="bg-red-800 text-white font-bold rounded border-2 border-red-800 hover:border-gray-800 hover:border-2 hover:bg-gray-300 hover:text-black shadow-md inline-flex px-2 py-2.5 items-center">
            <FiLogOut />
            <span className="ml-2">Log Out</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 py-8">
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center py-8 px-6">
              <img src={HomeImage} alt="Home-pict" />
              <h1 className="text-red-800 font-bold text-xl">25 Properties</h1>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center py-8 px-6">
              <h1 className="text-gray-400 font-semibold text-lg mb-2">
                ABC Luxury House
              </h1>
              <img src={MoneyImage} alt="Money-pict" />
              <h1 className="text-red-800 font-bold text-xl">
                Rp 1.750.000.000
              </h1>
              <h2 className="text-gray-400 font-base text-xl">
                Total Funds Raised
              </h2>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center py-8 px-6">
              <h1 className="text-gray-400 font-semibold text-lg mb-2">
                ABC Luxury House
              </h1>
              <img src={RoiImage} alt="Roi-pict" />
              <h1 className="text-red-800 font-bold text-xl">25% ROI</h1>
            </div>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-8">
          <div className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col p-4">
              <h1 className="text-red-800 font-bold text-2xl text-center pb-6">
                TOP 5 PROPERTIES
              </h1>
              <ul>
                <li className="flex justify-start py-2">
                  <div className="text-red-800 font-bold text-xl mr-5">#1</div>
                  <div className="text-gray-500 font-bold text-xl">
                    ABC Luxury House
                  </div>
                </li>
                <li className="flex justify-start py-2">
                  <div className="text-red-800 font-bold text-xl mr-5">#2</div>
                  <div className="text-gray-500 font-bold text-xl">
                    DEF Villa
                  </div>
                </li>
                <li className="flex justify-start py-2">
                  <div className="text-red-800 font-bold text-xl mr-5">#3</div>
                  <div className="text-gray-500 font-bold text-xl">
                    GHI Apartment
                  </div>
                </li>
                <li className="flex justify-start py-2">
                  <div className="text-red-800 font-bold text-xl mr-5">#4</div>
                  <div className="text-gray-500 font-bold text-xl">
                    JKL Luxury House
                  </div>
                </li>
                <li className="flex justify-start py-2">
                  <div className="text-red-800 font-bold text-xl mr-5">#5</div>
                  <div className="text-gray-500 font-bold text-xl">
                    MNO Club House
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col p-2 items-center">
              <h1 className="text-red-800 font-bold text-lg mb-2 tracking-wide">
                Monthly Earnings
              </h1>
              <Line
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="500"
              />
              <h1 className="text-gray-500 font-bold text-lg mb-2 tracking-wide">
                Rp 250.700.000
              </h1>
            </div>
            <Link
              to="/admin"
              className="flex flex-col pr-8 pb-8 text-red-800 items-end text-lg"
            >
              More Details
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
