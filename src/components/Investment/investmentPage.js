import React from "react";
import NumberFormat from "react-number-format";
import Pagination from "../../reusableComponents/Pagination";
import "./../style.scss";
import api from "../../data/Api";
import { withRouter, Link } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

class InvestmentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { properties: [], currentPage: 1, perpage: 8, props: [] };
  }

  async componentDidMount() {
    if (!cookies.get("token")) {
      this.props.history.push("/login");
    }

    var props = await api.properties();
    this.setState({ properties: props.data });
    this.load_props(1);
  }

  async load_props(page) {
    await this.setState({ currentPage: page });

    let first_idx = (page - 1) * this.state.perpage;
    let last_idx = page * this.state.perpage;
    this.setState({ props: this.state.properties.slice(first_idx, last_idx) });
  }

  render_property(item) {
    return (
      <>
        <Link sx={{ mr: "20" }} to={"/detailinvestment/" + item.id}>
          <div key={item.id} className="relative mt-16 xl:max-w-sm lg:w-full">
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
              <div className="px-2 mt-60">
                <div className="flex justify-end mb-1 ">
                  <span className="text-sm font-medium text-gray-700 dark:text-white">
                    Crowdfunding is going on (filled{" "}
                    {item.crowdfunding_percentage}
                    %)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                  <div
                    className="bg-red-800 h-2.5 rounded-full"
                    style={{ width: item.crowdfunding_percentage + "%" }}
                  >
                    {""}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-medium text-gray-700">
                    <p>Jumlah Dana</p>
                    <NumberFormat
                      value={item.funds_needed}
                      displayType="text"
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix="Rp. "
                    />
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    <p>ROI</p>
                    <p>{item.return_on_investment}%</p>
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    <p>Harga per Lembar</p>
                    <NumberFormat
                      value={item.price_to_book_value}
                      displayType="text"
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix="Rp. "
                    />
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    <p>Total Lembar</p>
                    <NumberFormat
                      value={item.total_shares}
                      displayType="text"
                      thousandSeparator={"."}
                      decimalSeparator={","}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }

  render() {
    return (
      <>
        <div className="bg-gray-500 w-80 font-semibold text-white mt-10">
          <p className="py-2 px-16 antialiased ">INVESMENT</p>
        </div>
        <div className="container mx-auto grid py-8">
          <div className="grid gap-x-8 gap-y-20 grid-cols-4 grid-rows-2 py-8">
            {this.state.properties.length > 0
              ? this.state.props.map((item) => this.render_property(item))
              : null}
          </div>
          <div className="h-0">
            <Pagination
              className="pagination-bar"
              currentPage={this.state.currentPage}
              totalCount={this.state.properties.length}
              pageSize={this.state.perpage}
              onPageChange={(page) => this.load_props(page)}
            />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(InvestmentPage);
