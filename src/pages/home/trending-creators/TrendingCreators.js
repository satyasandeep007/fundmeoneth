import React, { Component } from "react";
import CreatorCard from "../../CreatorCard";

export default class TrendingCreators extends Component {
  render() {
    return (
      <section className="w-full py-12 bg-white lg:py-24">
        <div className="max-w-6xl px-12 mx-auto text-center">
          <div className="space-y-12 md:text-center">
            <div className="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
              <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">Trending Creators</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <CreatorCard /> <CreatorCard /> <CreatorCard />
          </div>
        </div>
      </section>
    );
  }
}
