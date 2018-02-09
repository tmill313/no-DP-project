import React, { Component } from 'react';
import axios from 'axios';

export default class Update extends Component {
    constructor() {
        super();
        this.state = {
            editting: false,
    }

    }



render() {
    return(
            <div>
         {this.state.editting

            ?
            <div>
            <input onChange={e => this.props.handleChange(e)}></input>
            <button className="submit-button" onClick={() => {this.props.update(this.props.id); this.setState({
                editting: !this.state.editting
            })}}> YO - DUH </button>
            </div>
            :

        <button onClick={() => this.setState({ 
            editting: !this.state.editting
        })}> change me </button>
        }
        </div>
    )
    }







}