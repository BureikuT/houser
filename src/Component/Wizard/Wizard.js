import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import axios from "axios";
import Wizard1 from "../Wizard1/Wizard1";
import Wizard2 from '../Wizard2/Wizard2'
import {connect} from 'react-redux'

 class Wizard extends Component {
  constructor() {
    super();

    
  }

  render() {
    return (
      <div>
        <h1> Add New Listings</h1>

        <Link to="/">
          <button >Complete</button>
        </Link>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <Route path='/wizard/step1' component={Wizard1} />
        <Route path='/wizard/step2' component={Wizard2}/>
        
      </div>
    );
  }
}

export default connect(null)(Wizard)