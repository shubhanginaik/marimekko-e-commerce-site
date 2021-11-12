import React, { Component } from 'react';
import Form from './Form';
import Home from '../pageComponents/Home';
import './SellProduct.css'

class SellProduct extends Component {
    state= {
        showHome:false
    }
    submitHandler= (event)=>{
        event.preventDefault();
        this.setState({showHome: true,
        });
    };
    render() {
        return (
            <div className="sellProduct">
                <Form submit={this.submitHandler} />
                {this.state.showHome && <Home />}
            </div>
        );
    }
}

export default SellProduct;