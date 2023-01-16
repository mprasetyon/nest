import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//assets
import logo from "../assets/img/nest-logo.png";
import DefaultPicture from "../assets/img/Ellipse 1.png";

import { createPopper } from "@popperjs/core";

import { Transition } from "@headlessui/react";
import ButtonWhite from "../reusableComponents/button/ButtonWhite";
import ButtonRed from "../reusableComponents/button/ButtonRed";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

import "../index.css";
import "../App.less";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-slate-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <button
          className=" hover:text-gray-700 text-black hover:underline px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
          type="button"
          ref={btnDropdownRef}
          onClick={() => {
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          About{" "}
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            (color === "white" ? "bg-white " : bgColor + " ") +
            "text-base z-50 float-left list-none text-left shadow-lg mt-1 rounded-lg divide-y divide-gray-100 w-44 dark:bg-gray-700"
          }
          style={{ minWidth: "12rem" }}
        >
          <ul className="rounded-lg text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                className="bg-red-800 text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-t-md"
                to="/about/ourteam"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                className="bg-red-800 text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                to="/about/termsandconditions"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                className="bg-red-800 text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                to="/about/privacypolicy"
              >
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link
                className="bg-red-800 text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                to="/about/risk"
              >
                Risk
              </Link>
            </li>
            <li>
              <Link
                className="bg-red-800 text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-b-md"
                to="/aboutus"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const ProfileDropdown = ({ color }) => {
  let history = useHistory();

  function Logout() {
    cookies.remove("token", { path: "/" });
    cookies.remove("user_name", { path: "/" });
    history.go("/nestapp");
  }

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-slate-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <button
          className=" hover:text-gray-700 text-black hover:underline px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
          type="button"
          ref={btnDropdownRef}
          onClick={() => {
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          <Avatar alt="Profile Pict" src={DefaultPicture} />
        </button>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            (color === "white" ? "bg-white " : bgColor + " ") +
            "text-base z-50 float-left list-none text-left shadow-lg mt-1 rounded-lg divide-y divide-gray-100 w-44 dark:bg-gray-700"
          }
          style={{ minWidth: "12rem" }}
        >
          <ul className="rounded-lg text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                className="bg-red-800 text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-t-md"
                to="/editprofile"
              >
                Edit Profile
              </Link>
            </li>

            <li>
              <Link
                className="bg-red-800 text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                to="/about/privacypolicy"
              >
                Update Info
              </Link>
            </li>
            <li>
              <Link
                to="/nestapp"
                className="bg-red-800 text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-b-md"
                onClick={Logout}
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="sm:px-1 md:px-1 lg:px-20 lg:py-2 shadow-lg border-b-2">
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="object-contain max-h-16"
                  // href="/"
                  src={logo}
                  alt="Nest-Logo"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block ">
                <div className="ml-10 flex items-center space-x-4">
                  <Link
                    to="/nestapp"
                    className="hover:text-gray-700 text-black hover:underline px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/investment"
                    className=" hover:text-gray-700 text-black hover:underline px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Investment
                  </Link>
                  {cookies.get("token") ? (
                    <Link
                      to="/dashboard"
                      className=" hover:text-gray-700 text-black hover:underline px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </Link>
                  ) : null}
                  <Dropdown color="red" />
                  <Link
                    to="/faq"
                    className=" hover:text-gray-700 text-black hover:underline px-3 py-2 rounded-md text-sm font-medium"
                  >
                    FAQ
                  </Link>
                  {!cookies.get("token") ? (
                    <Link to="/login" className="logbtn w-full">
                      <ButtonWhite>Login</ButtonWhite>
                    </Link>
                  ) : null}
                  {!cookies.get("token") ? (
                    <Link to="/signup" className="w-full">
                      <ButtonRed>Daftar</ButtonRed>
                    </Link>
                  ) : null}
                  {cookies.get("token") ? <ProfileDropdown /> : null}
                </div>
              </div>
            </div>

            {/* ---------- MOBILE NAVBAR ------------ */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-200 inline-flex items-center justify-end p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/investment"
                  className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Invesment
                </Link>
                <Link
                  to="/dashboard"
                  className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </Link>

                <Link
                  to="/about"
                  className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>

                <Link
                  to="/faq"
                  className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  FAQ
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
