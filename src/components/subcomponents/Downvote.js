import React, { Component } from 'react';
import axios from 'axios';

export default class Downvote extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <button className="downvote-button" onClick={() => {this.props.downVote(this.props.id)}}></button>
        )
    }
}