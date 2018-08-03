import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateWizardOne } from '../../ducks/reducer';
import Wizard from  '../Wizard/Wizard'

class Wizard1 extends Component {
    constructor() {
        super();
        this.state = {
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    componentDidMount() {
        let { propertyName, address, city, state, zipcode } = this.props;
        this.setState({ propertyName, address, city, state, zipcode })
    }
    updatePropertyName=(e)=> {
        this.setState({ propertyName:e.target.value });
    }
    
    updateAddress=(e)=> {
        this.setState({ address:e.target.value });
    }
    
    updateCity=(e)=>{
        this.setState({ city: e.target.value });
    }

    updateState=(e)=> {
        this.setState({ state: e.target.value });
    }

    updateZipcode=(e)=> {
        this.setState({ zipcode: e.target.value });
    }

render() {
    let { propertyName, address, city, state, zipcode } = this.state;
    return (
        <div>
            <h3>Property Name</h3>
            <input type='text' value={propertyName} onChange={this.updatePropertyName} />
            <h3>Address</h3>
            <input type='text' value={address} onChange={this.updateAddress} />
            <h3>City</h3>
            <input type='text' value={city} onChange={this.updateCity} />
            <h3>State</h3>
            <input type='text' value={state} onChange={this.updateState} />
            <h3>Zip Code</h3>
            <input type='text' value={zipcode} onChange={this.updateZipcode} />
            <br/>
            <Link to='/wizard/step2'><button onClick={ () => this.props.updateWizardOne( propertyName, address, city, state, zipcode )}>Step Two</button></Link>
        </div>
    );

}
}
function mapStateToProps(state) {
    let { propertyName, address, city, zipcode } = state;
    return { propertyName, address, city, state: state.state, zipcode }
}

export default connect(mapStateToProps, { updateWizardOne })(Wizard1);