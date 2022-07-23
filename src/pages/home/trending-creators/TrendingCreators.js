import React, { useContext } from "react";
import { GlobalContext } from "../../../context/context";
import CreatorCard from "../../CreatorCard";

const TrendingCreators = () => {
  const { creatorData } = useContext(GlobalContext);
  return (
    <section className="w-full py-12 bg-white lg:py-24">
      <div className="max-w-6xl px-12 mx-auto text-center">
        <div className="space-y-12 md:text-center">
          <div className="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
            <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">Trending Creators</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {creatorData &&
            creatorData.sort((a,b) => { a.totalFundsReceived - b.totalFundsReceived }).slice(0, 3).map((item, i) => {
              return <CreatorCard data={item} key={i} />;
            })}
        </div>
      </div>
    </section>
  );
};
export default TrendingCreators;
