import React, { useContext, useState, useEffect } from "react";
import Transactions from "./Transactions";
import { GlobalContext } from "../../context/context";
import { getTransactions } from "../../helpers/getAllTransactions";

const initialStats = [
  { name: "Withdrawable Balance", stat: "0 ETH" },
  { name: "Total funded", stat: "0 ETH" },
  { name: "Total Contributors", stat: "0" }
];

const CreatorDashboard = () => {
  const { provider, accounts, userInfo } = useContext(GlobalContext);
  const [stats, setStats] = useState(initialStats);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const stat = userInfo && [
      { name: "Withdrawable Balance", stat: `${userInfo.withdrawbleBalance} ETH` },
      { name: "Total funded", stat: `${userInfo.totalFundsReceived} ETH` },
      { name: "Total Contributors", stat: userInfo.totalFundContributorsCount }
    ];
    userInfo && setStats(stat);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        // const walletAddress = accounts[0].toLowerCase();
        const walletAddress = accounts[0];
        const transac = await getTransactions(walletAddress, provider);
        setTransactions(transac.toTransactions);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [accounts[0]]);

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
      <Transactions transactions={transactions} />
    </div>
  );
};

export default CreatorDashboard;
