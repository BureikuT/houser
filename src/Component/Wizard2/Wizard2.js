import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateWizardOne } from '../../ducks/reducer';
import Wizard from  '../Wizard/Wizard'

export default class Wizard1 extends Component {
    constructor(){
        super()
        this.state= {
            image:''
        }
    }
    
    componentDidMount(){
        this.setState({image:this.props.image})
    }

    updateImage=(e)=>{
        this.setState({image:e.target.value})
    }

render(){
    let{image} = this.state
    return(
<div>
        <h4> Image URL </h4>
        <input type='text' value={image} onChange={this.updateImage} />
        
        

</div>
    )
}

}