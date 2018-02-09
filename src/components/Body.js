import React, { Component } from 'react';
import './Body.css';

export default class Body extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            text:""
        }
    }

    // getApi() {
    //     axios.get().then(() => console.log())
    // }

    render() {
        return(
            <div className="body">
            <input className="input-box" placeholder={"Say what you wanna say."}></input>
            <button onClick={this.getApi}> YO - DUH </button>
            </div>
        )
    }
}
