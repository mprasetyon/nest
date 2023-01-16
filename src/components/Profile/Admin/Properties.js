import React, { Component } from "react";
import { FaPlus, FaClipboardList, FaEdit } from "react-icons/fa";
import api from "../../../data/Api";
import { Link } from "react-router-dom";

import NumberFormat from "react-number-format";
import Pagination from "@material-ui/lab/Pagination";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = { properties: [], page: 1, count: 0 };
  }

  async componentDidMount() {
    if (!cookies.get("token")) {
      this.props.history.push("/login");
    }

    var data = await api.properties();
    this.setState({ properties: data.data });
  }

  render() {
    return (
      <>
        <div className="flex justify-end bg-gray-100">
          <button className="bg-white text-red-800 font-bold rounded border-2 border-red-800 hover:border-gray-800 hover:border-2 hover:bg-gray-300 hover:text-black shadow-md inline-flex px-2 py-2.5 items-center mr-2">
            <FaClipboardList /> <span className="ml-2">Create Report</span>
          </button>
          <Link to={"/admin/add-property/"}>
            <button className="bg-red-800 text-white font-bold rounded border-2 border-red-800 hover:border-gray-800 hover:border-2 hover:bg-gray-300 hover:text-black shadow-md inline-flex px-2 py-2.5 items-center">
              <FaPlus /> <span className="ml-2">Add Property</span>
            </button>
          </Link>
        </div>
        <div className="bg-gray-500 w-80 font-semibold text-white mt-10">
          <p className="py-2 px-16 antialiased ">PROPERTIES</p>
        </div>
        <div className="container mx-auto grid py-8">
          <div className="grid gap-x-8 gap-y-20 grid-cols-4 grid-rows-2 py-8">
            {this.state.properties.map((item) => {
              return (
                <div key={item.id}>
                  <Link sx={{ mr: "20" }} to={"/detailinvestment/" + item.id}>
                    <div className="relative mt-16 xl:max-w-sm lg:w-full">
                      <div className="rounded-lg overflow-visible shadow-lg border-2 drop-shadow-lg bg-gray-50 ">
                        <div className="absolute -mt-20 w-full flex justify-center">
                          <div className="h-full w-full px-6">
                            <img
                              src={item.image[0].image_url}
                              alt="gambar Properties"
                              className="object-cover h-full w-full shadow-md rounded-lg"
                            />
                            <div className="absolute top-0 right-7 bg-gray-600 bg-opacity-75">
                              <p className="leading-normal px-6 text-gray-100 float-right">
                                {item.name}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="px-2 mt-40">
                          <div className="flex justify-end mb-1 ">
                            <span className="text-xs font-medium text-gray-700 dark:text-white">
                              Crowdfunding is going on (filled{" "}
                              {item.crowdfunding_percentage}
                              %)
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                            <div
                              className="bg-red-800 h-2.5 rounded-full"
                              style={{
                                width: item.crowdfunding_percentage + "%",
                              }}
                            >
                              {""}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-xs font-medium text-gray-700">
                              <p>Jumlah Dana</p>
                              <NumberFormat
                                value={item.funds_needed}
                                displayType="text"
                                thousandSeparator={"."}
                                decimalSeparator={","}
                                prefix="Rp. "
                              />
                            </div>
                            <div className="text-xs font-medium text-gray-700">
                              <p>ROI</p>
                              <p>{item.return_on_investment}%</p>
                            </div>
                            <div className="text-xs font-medium text-gray-700">
                              <p>Harga per Lembar</p>
                              <NumberFormat
                                value={item.price_to_book_value}
                                displayType="text"
                                thousandSeparator={"."}
                                decimalSeparator={","}
                                prefix="Rp. "
                              />
                            </div>
                            <div className="text-xs font-medium text-gray-700">
                              <p>Total Lembar</p>
                              <NumberFormat
                                value={item.total_shares}
                                displayType="text"
                                thousandSeparator={"."}
                                decimalSeparator={","}
                              />
                            </div>
                          </div>
                          <Link to={"/admin/edit-property/" + item.id}>
                            <button className="flex  justify-center px-6 py-1 bg-red-800 mr-1 text-white font-semibold rounded w-full mt-2">
                              <FaEdit className="h-6 w-6" />
                              <span className="ml-1">Edit</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="items-center">
          <Pagination
            count={10}
            color="secondary"
            shape="rounded"
            // onChange={this.handlePageChange}
          />
        </div> */}
      </>
    );
  }
}
