import React, { Component } from 'react';
import axios from 'axios';

export default class Delete extends Component {
    constructor() {
        super();

        }




    


    render() {

        return(
            <button className="delete-button" onClick={() => this.props.delete(this.props.id)}>Delete Me</button>
        )
    }
}
