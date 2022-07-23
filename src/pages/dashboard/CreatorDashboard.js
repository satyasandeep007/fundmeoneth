import React, { useContext, useEffect } from "react";
import Transactions from "./Transactions";
import { GlobalContext } from "../../context/context";

const stats = [
  { name: "Withdrawable Balance", stat: "897 eth" },
  { name: "Total funded", stat: "423324 eth" },
  { name: "Total Contributors", stat: "89" }
];

const CreatorDashboard = () => {
  const { provider, accounts } = useContext(GlobalContext);
  // useEffect(() => {
  //   provider.getHistory(accounts[0])
  // }, [])

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
            <dd className="mt-1 text-5xl font-bold text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
      <Transactions />
    </div>
  );
};

export default CreatorDashboard;
