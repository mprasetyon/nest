import React from "react";
import { withRouter, Link } from "react-router-dom";
import api from "../../data/Api";
import {
  FaChevronCircleRight,
  FaPlusCircle,
  FaDollarSign,
} from "react-icons/fa";

import NumberFormat from "react-number-format";
import { parseDate } from "../../helper/date";

import Cookies from "universal-cookie";
const cookies = new Cookies();

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dashboard: null };
  }

  async componentDidMount() {
    if (!cookies.get("token")) {
      this.props.history.push("/login");
    }

    var data = await api.dashboard();
    this.setState({ dashboard: data.data });
  }

  render_asset(item) {
    return (
      <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4 font-medium dark:text-white whitespace-nowrap">
          {item.properties.name}
        </td>
        <td className="px-6 py-4">{item.total_book}</td>
        <td className="px-6 py-4">
          {" "}
          <NumberFormat
            value={item.total_price}
            displayType="text"
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix="Rp. "
          />
        </td>
      </tr>
    );
  }

  render_dividen(item) {
    return (
      <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-white">
        <td className="px-6 py-4 font-medium  text-white dark:text-white whitespace-nowrap">
          {parseDate(item.created_at)}
        </td>
        <td className="px-6 py-4  text-white">{item.property.code}</td>
        <td className="px-6 py-4  text-white">
          {" "}
          <NumberFormat
            value={item.amount}
            displayType="text"
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix="Rp. "
          />
        </td>
      </tr>
    );
  }

  render_trx(item) {
    return (
      <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-black">
        <td className="px-6 py-4 font-medium  dark:text-white whitespace-nowrap">
          {parseDate(item.created_at)}
        </td>
        <td className="px-6 py-4">{item.properties.code}</td>
        <td className="px-6 py-4">
          {" "}
          <NumberFormat
            value={item.total_price}
            displayType="text"
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix="Rp. "
          />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <>
        <div className="md:container md:mx-auto lg:container mx-auto px-20 p-8">
          <h1 className="mb-6">
            <strong>DASHBOARD</strong>
          </h1>
          <div className="grid grid-rows-8 grid-flow-col gap-4">
            <div className="row-span-2 row-start-1 bg-gradient-to-b from-pink-300 to-pink-100 border-2 rounded-xl shadow-xl">
              <div className="pt-6 md:p-8 md:text-left">
                <div className="flex justify-between">
                  <div className="text-2xl font-semibold text-gray-500">
                    Portofolio
                  </div>
                  <div className="font-semibold">
                    <Link to="/portofolio">
                      <FaChevronCircleRight />
                    </Link>
                  </div>
                </div>
                <figcaption className="font-medium">
                  <p className="text-gray-500 text-lg font-normal antialiased ">
                    Total Jumlah Asset Anda
                  </p>
                </figcaption>
                <br />
                <h1 className="text-gray-900 text-3xl font-bold">
                  {this.state.dashboard ? (
                    <NumberFormat
                      value={this.state.dashboard.portofolio}
                      displayType="text"
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix="Rp. "
                    />
                  ) : (
                    "Rp. 0"
                  )}
                  ,-
                </h1>
              </div>
            </div>
            <div className="row-span-2 row-start-5 bg-gradient-to-b from-gray-100 to-gray-50 border-2 rounded-xl shadow-xl">
              <div className="pt-6 md:p-8 md:text-left">
                <div className="flex justify-between">
                  <div className="text-lg font-semibold">Assets</div>
                  <div>
                    <Link to="/assets">
                      <FaChevronCircleRight />
                    </Link>
                  </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Nama
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Jumlah
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Lembar Saham
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.dashboard
                      ? this.state.dashboard.assets.map((item) =>
                          this.render_asset(item),
                        )
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row-span-2 row-start-1 bg-gradient-to-b from-indigo-300 to-gray-100 rounded-xl shadow-xl">
              <div className="pt-6 md:p-8 md:text-left">
                <div className="flex justify-between">
                  <div className="text-2xl font-semibold text-gray-500">
                    Balance
                  </div>
                </div>
                <figcaption className="font-medium ">
                  <p className="text-2xl">
                    {this.state.dashboard ? (
                      <NumberFormat
                        value={this.state.dashboard.balances}
                        displayType="text"
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix="Rp. "
                      />
                    ) : (
                      "Rp. 0"
                    )}
                    ,-
                  </p>
                </figcaption>
                <div className="flex justify-between py-4">
                  <Link to="/deposit">
                    <button className="bg-white text-red-800 font-bold rounded-3xl hover:bg-red-800 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                      <FaPlusCircle />
                      &nbsp;Deposit
                    </button>
                  </Link>
                  <Link to="/withdraw">
                    <button className="bg-white text-red-800 font-bold rounded-3xl hover:bg-red-800 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                      <FaDollarSign />
                      &nbsp; Withdraw
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row-span-2 row-start-5 bg-gradient-to-b from-green-400 to-gray-300 rounded-xl shadow-xl">
              <div className="pt-6 md:p-8 md:text-left">
                <div className="flex justify-between">
                  <div className="text-lg font-semibold text-white">
                    Dividen
                  </div>
                  <div>
                    <Link to="/dividen">
                      <FaChevronCircleRight />
                    </Link>
                  </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-white">
                        Tanggal
                      </th>
                      <th scope="col" className="px-6 py-3 text-white">
                        Kode Asset
                      </th>
                      <th scope="col" className="px-6 py-3 text-white">
                        Nilai
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.dashboard
                      ? this.state.dashboard.dividen.map((item) =>
                          this.render_dividen(item),
                        )
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row-span-6 row-start-1 bg-gray-200 rounded-xl shadow-xl">
              <div className="pt-6 md:p-8 md:text-left">
                <div className="flex justify-between">
                  <div className="text-lg font-semibold">transaction</div>
                  <div>
                    <Link to="/transaction">
                      <FaChevronCircleRight />
                    </Link>
                  </div>
                </div>
                <figcaption className="font-medium ">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Tanggal
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Kode Asset
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Nilai
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.dashboard
                        ? this.state.dashboard.transaction.map((item) =>
                            this.render_trx(item),
                          )
                        : null}
                    </tbody>
                  </table>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(DashboardPage);
