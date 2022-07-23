import React, { Component } from "react";

export default class CreatorCard extends Component {
  render() {
    return (
      <div className="w-full border border-gray-200 rounded-lg shadow-sm">
        <div className="flex flex-col items-center justify-center p-10">
          <img className="w-32 h-32 mb-6 rounded-full" src="https://cdn.devdojo.com/images/june2021/headshot-n.jpg" />
          <h2 className="text-lg font-medium">Fred Clemens</h2>
          <p className="font-medium text-blue-500">Marketing Manager</p>
          <p className="text-gray-400">Team member as of 2016</p>
        </div>
        </div>
    );
  }
}
