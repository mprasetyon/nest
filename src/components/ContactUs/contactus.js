import React from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import nestLogo from "../../assets/img/nest_logo-06.png";
import ButtonWhite from "../../reusableComponents/button/ButtonWhite";

function contactus() {
  return (
    <div>
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 sm:px-5 md:px-5 lg:px-5">
          {" "}
          <div className="container mx-auto justify-center p-8">
            <h1 className="text-3xl font-bold text-gray-600">
              <strong>
                Get in <span className="text-red-700">Touch</span>
              </strong>
            </h1>
            <p>Please don't hesitate to ask anything</p>
            <div className="flex items-center justify-center pt-6">
              <div className="font-bold rounded-xl border shadow-lg w-5/6">
                <div className="grid md:grid-cols-1 lg:grid-cols-12">
                  <div className="flex justify-center relative overflow-hidden lg:col-span-8">
                    <img
                      className="object-cover h-80 w-80"
                      src={nestLogo}
                      alt="gambar-Nest"
                    />
                    <div className="md:p-8  md:text-left text-center absolute top-0 left-0 px-6 w-full">
                      <h3 className="font-bold text-2xl text-red-700">
                        Send Message
                      </h3>
                      <form className="py-6">
                        <div className="grid md:grid-cols-1 lg:grid-cols-2">
                          <div className="grid cols-span-6 md:grid-cols-1 lg:grid-cols-1 py-2 px-2">
                            <label className="font-medium">Your Name</label>
                            <div className="form-row">
                              <div className="flex items-center border-b border-red-500 px-2">
                                <input
                                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                                  type="text"
                                  aria-label="Full name"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="grid cols-span-6 md:grid-cols-1 lg:grid-cols-1 py-2 px-2">
                            <label className="font-medium">Phone Number</label>
                            <div className="form-row">
                              <div className="flex items-center border-b border-red-500 px-2">
                                <input
                                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                                  type="text"
                                  aria-label="Phone Number"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-1">
                          <div className="grid cols-span-6 md:grid-cols-1 lg:grid-cols-1 py-2 px-2">
                            <label className="font-medium">Email</label>
                            <div className="form-row">
                              <div className="flex items-center border-b border-red-500 px-2">
                                <input
                                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                                  type="text"
                                  aria-label="Email"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-1">
                          <div className="grid cols-span-6 md:grid-cols-1 lg:grid-cols-1 py-2 px-2">
                            <label className="font-medium">Message</label>
                            <div className="form-row">
                              <div className="flex items-center border-b border-red-500">
                                <textarea
                                  className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none "
                                  id="message"
                                  rows="3"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ButtonWhite
                          className="btn btn-outline-maroon w-auto flex items-center justify-center text-white rounded-lg border p-2 float-right "
                          type="submit"
                        >
                          Submit &nbsp;
                          <FaPaperPlane />
                        </ButtonWhite>
                      </form>
                    </div>
                  </div>
                  <div className="lg:col-span-4 text-white bg-red-900 object-fill object-center overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                    <div className="pt-6 md:p-8 text-center md:text-left">
                      <h3 className="font-bold text-2xl text-white">
                        Contact Us
                      </h3>
                      <ul className="grid grid-flow-row auto-rows-max font-light pt-6">
                        <li className="inline-flex items-center text-sm p-1">
                          <FaEnvelope /> &nbsp;&nbsp;
                          corporate.rwi@raywhite.co.id
                        </li>
                        <li className="inline-flex items-center text-sm p-1">
                          <FaPhoneAlt /> &nbsp;&nbsp; (021) 2788 9777
                        </li>
                        <li className="inline-flex items-center text-sm p-1">
                          <FaBuilding /> &nbsp;&nbsp;&nbsp;
                          <strong className="font-medium">
                            Sahid Sudirman Center
                          </strong>
                        </li>
                        <li className="inline-flex items-center text-sm p-1">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sahid
                          Sudirman Center 43E <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Floor
                          Jl.Jend.Sudirman No.86 <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jakarta
                          Pusat 10220 DKI
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jakarta
                          Indonesia
                          <br />
                        </li>
                      </ul>
                      <h3 className="text-white">Follow Us</h3>
                      <hr />
                      <span className="inline-grid grid-cols-5 gap-x-4 py-2">
                        <span className="bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center">
                          <FaFacebookF />
                        </span>
                        <span className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center">
                          <FaLinkedinIn />
                        </span>
                        <span className="bg-blue-400 rounded-full h-8 w-8 flex items-center justify-center">
                          <FaTwitter />
                        </span>
                        <span className="bg-red-600 rounded-full h-8 w-8 flex items-center justify-center">
                          <FaInstagram />
                        </span>
                        <span className="bg-red-700 rounded-full h-8 w-8 flex items-center justify-center">
                          <FaYoutube />
                        </span>
                      </span>
                    </div>
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

export default contactus;
