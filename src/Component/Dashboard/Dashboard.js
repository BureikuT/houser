import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }
  componentDidMount() {
    this.getTheHouses();
  }
  getTheHouses = () => {
    axios.get("/api/houses").then(results => {
      this.setState({ houses: results.data });
    });
  };

  deleteHouse = (id) => {
    axios.delete(`api/houses/${id}`).then(this.getTheHouses);
  };

  render() {
    let houses = this.state.houses.map((house, i) => {
      return (
        <div key={i}>
          <House house={house} deleteHouse={this.deleteHouse} />
        </div>
      );
    });

    return (
      <div>
        Dashboard
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>
        {houses}
      </div>
    );
  }
}
