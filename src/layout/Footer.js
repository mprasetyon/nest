import React from "react";
//assets
import logo from "../assets/img/nest-logo.png";

import "./../App.less";

import {
  FaGooglePlus,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="sticky w-full">
      <div className="mx-auto px-20 py-6 bg-gray-200 ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6">
          <div className="col-span-2">
            <div>
              <img src={logo} alt="Logo" className="h-1/2 w-1/2" />
            </div>
            <div className="py-2">
              <p className="text-sm text-gray-800">
                Sahid Sudirman Center 43E floor
                <br />
                Jl. Jend. Sudirman No.86, Jakarta Pusat
                <br />
                DKI Jakarta Indonesia 10220
                <br />
                Email :&nbsp;
                <a href="mailto:corporate.rwi@raywhite.co.id">
                  corporate.rwi@raywhite.co.id
                </a>
              </p>
            </div>
            <span className="inline-grid grid-cols-4 gap-x-4 ">
              <a href="https://www.facebook.com/">
                <FaFacebookF size="20" />
              </a>
              <a href="https://twitter.com/">
                <FaTwitter size="20" />
              </a>
              <a href="https://plus.google.com/">
                <FaGooglePlus size="20" />
              </a>
              <a href="mailto:bootsnipp@gmail.com">
                <FaEnvelope size="20" />
              </a>
            </span>
          </div>
          <div>
            <ul className="list-unstyled text-sm text-gray-800">
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="/#"
                >
                  Home
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="/#"
                >
                  About
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="/#"
                >
                  FAQ
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="/#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2 footers-three">
            <ul className="list-unstyled text-sm text-gray-800">
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="/#"
                >
                  Dashboard
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="/#"
                >
                  Our Team
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="/#"
                >
                  Terms &amp; Condition
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="/#"
                >
                  Risk
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="/#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2 footers-four">
            <ul className="list-unstyled text-sm text-gray-800">
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="maintenance.html"
                >
                  News
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="contact.html"
                >
                  Sitemap
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="about.html"
                >
                  Testimonials
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="about.html"
                >
                  Feedbacks
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="about.html"
                >
                  User Agreement
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2 footers-five">
            <ul className="list-unstyled text-sm text-gray-800">
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="maintenance.html"
                >
                  Career
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="about.html"
                >
                  For Parters
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="about.html"
                >
                  Terms
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="about.html"
                >
                  Policy
                </a>
              </li>
              <li className="py-1">
                <a
                  className="rounded-md p-1 hover:bg-gray-300 hover:underline"
                  href="contact.html"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto bg-red-900">
        <div className=" text-center py-3">
          <p className="text-white">
            © 2021 NEST | Powered by Ray White &amp; Loan Market | All rights
            reserved | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
