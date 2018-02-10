import React, { Component } from 'react';
import axios from 'axios';

export default class Favorite extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <button className="submit-button" onClick={() => {this.props.favorite(this.props.id)}}>{(this.props.fav)}</button>
        )
    }








}