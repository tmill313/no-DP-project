import React, { Component } from 'react';
import axios from 'axios';
import './Update.css';

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
                <div className="edit-box-div">
            <input className="edit-box" onChange={e => this.props.handleChange(e)}></input>
            </div>
            <div>
            <button className="updated-button" onClick={() => {this.props.update(this.props.id); this.setState({
                editting: !this.state.editting
            })}}></button>
            </div>
            </div>
            :
            <div className="update-div">
        <button className="update-button" onClick={() => this.setState({ 
            editting: !this.state.editting
        })}></button>
        </div>
        }
        </div>
    )
    }







}