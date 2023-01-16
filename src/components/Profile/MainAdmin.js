import React from "react";
import { Link, useHistory, Router } from "react-router-dom";
import AvatarAdmin from "../../assets/img/Ellipse 1.png";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default ({ children }) => {
  let history = useHistory();

  function Logout() {
    cookies.remove("token", { path: "/" });
    cookies.remove("user_name", { path: "/" });
    history.go("/");
  }

  return (
    <div
      style={{ display: "flex" }}
      className="h-screen w-full bg-white relative flex overflow-hidden"
    >
      <nav className="flex flex-col bg-gray-50 w-64 h-screen px-4 text-gray-900 drop-shadow-lg border-gray-200 border-r-2">
        <div className="flex flex-wrap mt-8">
          <div className="w-1/2">
            <img
              src={AvatarAdmin}
              className="mx-auto w-20 h-20 rounded-full"
              alt="Avatar-Pict"
            />
          </div>
          <div className="w-1/2">
            <span className="font-semibold text-gray-400 text-center">
              Admin
            </span>
          </div>
        </div>
        <div className="mt-10 mb-4">
          <ul>
            <li className="mb-2 px-4 py-2 text-red-800 flex flex-row border-gray-300 hover:text-black hover:bg-gray-300  hover:font-bold hover:border-l-8 hover:border-red-800 rounded-lg">
              <Link to="/admin">
                <span className="ml-2 font-bold tracking-wide">Home</span>
              </Link>
            </li>
            <li className="mb-2 px-4 py-2 text-red-800 flex flex-row  border-gray-300 hover:text-black hover:bg-gray-300  hover:font-bold hover:border-l-8 hover:border-red-800 rounded-lg">
              <Link to="/admin/properties">
                <span className="ml-2 font-bold tracking-wide">Properties</span>
              </Link>
            </li>
            <li className="mb-2 px-4 py-2 text-red-800 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold hover:border-l-8 hover:border-red-800 rounded-lg">
              <Link to="/admin/investment">
                <span className="ml-2 font-bold tracking-wide">Investment</span>
              </Link>
            </li>
            <li className="mb-2 px-4 py-2 text-red-800 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold hover:border-l-8 hover:border-red-800 rounded-lg">
              <Link to="/admin/users">
                <span className="ml-2 font-bold tracking-wide">Users</span>
              </Link>
            </li>
            <li className="mb-2 px-4 py-2 text-red-800 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold hover:border-l-8 hover:border-red-800 rounded-lg">
              <Link to="#" className="logbtn w-full" onClick={Logout}>
                <button className="ml-2 font-bold tracking-wide">
                  Log Out
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-full h-full flex flex-col justify-between">
        <main className="max-w-full h-full flex relative overflow-y-hidden">
          <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
            <Router history={history}>{children}</Router>
          </div>
        </main>
      </div>
    </div>
  );
};
