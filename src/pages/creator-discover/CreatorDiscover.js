import React, { Component } from "react";
import { GlobalContext } from "../../context/context";
import CreatorList from "./CreatorList";
import Search from "./Search";

export default class CreatorDiscover extends Component {
  static contextType = GlobalContext
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
      <Search />
      <CreatorList />
      </>
    );
  }
}