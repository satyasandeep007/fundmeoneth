/* This example requires Tailwind CSS v2.0+ */
import React, { useContext } from "react";
import { GlobalContext } from "../context/context";
import { Link } from "react-router-dom";
export default function Example() {
  const { loading, accounts } = useContext(GlobalContext);

  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              fundmeon
              <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">ETH</span>
              <span className="text-indigo-600">.</span>
            </span>
          </Link>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            <Link to="/creator/discover" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
              Discover
            </Link>
            <Link to="/analytics/dashboard" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link to="/creator/profile" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
              Become a Creator
            </Link>
          </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          {accounts && accounts.length > 0 && (
            <span className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 bg-indigo-100">Connected to : {accounts[0]}</span>
          )}

          <button
            disabled={accounts && accounts.length > 0 && accounts[0] ? true : false}
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
            {accounts && accounts.length > 0 && accounts[0] ? "Connected" : "Connect to wallet"}
          </button>
        </div>
      </div>
    </section>
  );
}
