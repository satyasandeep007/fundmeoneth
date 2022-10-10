/* This example requires Tailwind CSS v2.0+ */
import React, { useContext } from "react";
import { GlobalContext } from "../context/context";
import { Link } from "react-router-dom";

import { ethers } from "ethers";
import Config from "../Config";
import { getAllCreators, getLoggedInUser, addNewUserOnLogin } from "../helpers/functions";

export default function Example() {
  const { accounts, addWeb3ProviderToContext, addUserInfo, addCreatorData, userInfo, Contract } = useContext(GlobalContext);

  const doAuth = async () => {
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(Config.CREATOR_FUND.MUMBAI.CONTRACT_ADDRESS, Config.CREATOR_FUND.MUMBAI.ABI, signer);
    await addWeb3ProviderToContext({
      provider,
      signer,
      accounts,
      Contract
    });
    const creatorData = await getAllCreators(Contract);
    await addCreatorData({
      creatorData
    });
    const userInfo = await getLoggedInUser(creatorData, accounts[0]);
    await addUserInfo({
      userInfo: userInfo[0]
    });
  };

  const signUp = async () => {
    // insert user if he is not in our records
    if (!userInfo || !userInfo.name) {
      await addNewUserOnLogin(Contract);
    }
  };

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
            <Link to="/analytics/dashboard/user" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link to="/creator/profile" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
              Become a Creator
            </Link>
          </nav>
        </div>

        <div className="inline-flex items-center ml-1 space-x-5 lg:justify-end">
          {accounts && accounts.length > 0 && (
            <span className="mr-2 font-medium leading-6 text-gray-600 hover:text-gray-900 bg-indigo-100">Connected to : {accounts[0]}</span>
          )}

          <button
            disabled={accounts && accounts.length > 0 && accounts[0] ? true : false}
            onClick={doAuth}
            className="inline-flex items-center justify-center px-2 py-1 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
            {accounts && accounts.length > 0 && accounts[0] ? "Connected" : "Connect to wallet"}
          </button>
        </div>
        {!userInfo && (
          <button
            disabled={userInfo && userInfo.name ? true : false}
            onClick={signUp}
            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {/* {userInfo && userInfo.name ? `${userInfo.name}` : "Sign Up"} */}
            Sign Up
          </button>
        )}
      </div>
    </section>
  );
}
