import React from "react";
import Transactions from "./Transactions";
/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { name: "Withdrawable Balance", stat: "897 eth" },
  { name: "Total funded", stat: "423324 eth" },
  { name: "Total Contributors", stat: "89" }
];

export default function Example() {
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
      <Transactions/>
    </div>
  );
}
