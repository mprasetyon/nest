import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

import nestLogo from "../assets/img/Questions-pana.png";

export default function FaqPage() {
  return (
    <>
      <div className="h-max py-6">
        <div></div>
        <div className="bg-gray-500 w-80 font-semibold text-white mt-10">
          <p className="py-2 px-16 antialiased ">FAQ</p>
        </div>
        <div className="grid grid-cols-1 sm:px-5 md:grid-cols-2 md:px-5 lg:grid-cols-2 lg:px-5 gap-4">
          <div className="grid justify-items-center">
            <img
              href="/"
              src={nestLogo}
              alt="Nest-Logo"
              className="h-72 w-72"
            />
          </div>
          <div>
            <button
              className="items-center justify-center rounded-md bg-gray-400 text-white border border-gray-300 hover:bg-white hover:text-gray-600 px-6 hover:shadow-lg"
              type="submit"
            >
              Investor
            </button>
            <button
              className="items-center justify-center rounded-md border border-gray-300 px-6 hover:shadow-lg"
              type="button"
            >
              Investee
            </button>
            <div className="w-full py-8 flex">
              <div className="jutstify-center w-full mx-auto bg-white border-2 p-8 rounded-2xl">
                <h1 className="text-3xl pb-4 font-bold">
                  Frequently Asked Questions
                </h1>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black border-b-2 border-gray-300 hover:bg-gray-400 hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                        <span>How to invest in NEST ?</span>
                        {open ? (
                          <FaMinus className="w-5 h-5" />
                        ) : (
                          <FaPlus className="w-5 h-5" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-gray-200 border-b-2">
                        If you're unhappy with your purchase for any reason,
                        email us within 90 days and we'll refund you in full, no
                        questions asked.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black border-b-2 border-gray-300 hover:bg-gray-400 hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                        <span>What are the benefit by investing in NEST ?</span>
                        {open ? (
                          <FaMinus className="w-5 h-5" />
                        ) : (
                          <FaPlus className="w-5 h-5" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-gray-200 border-b-2">
                        If you're unhappy with your purchase for any reason,
                        email us within 90 days and we'll refund you in full, no
                        questions asked.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black border-b-2 border-gray-300 hover:bg-gray-400 hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                        <span>Does NEST have OJK permitions ?</span>
                        {open ? (
                          <FaMinus className="w-5 h-5" />
                        ) : (
                          <FaPlus className="w-5 h-5" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-gray-200 border-b-2">
                        If you're unhappy with your purchase for any reason,
                        email us within 90 days and we'll refund you in full, no
                        questions asked.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black border-b-2 border-gray-300 hover:bg-gray-400 hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                        <span>What is dividen ?</span>
                        {open ? (
                          <FaMinus className="w-5 h-5" />
                        ) : (
                          <FaPlus className="w-5 h-5" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-gray-200 border-b-2">
                        If you're unhappy with your purchase for any reason,
                        email us within 90 days and we'll refund you in full, no
                        questions asked.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black border-b-2 border-gray-300 hover:bg-gray-400 hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                        <span>When will I get my dividen ?</span>
                        {open ? (
                          <FaMinus className="w-5 h-5" />
                        ) : (
                          <FaPlus className="w-5 h-5" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-gray-200 border-b-2">
                        If you're unhappy with your purchase for any reason,
                        email us within 90 days and we'll refund you in full, no
                        questions asked.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
