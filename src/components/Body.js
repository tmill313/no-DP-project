import React, { Component } from 'react';
import './Body.css';
import Create from './subcomponents/Create';

export default class Body extends Component {
    constructor() {
        super();
        }



    render() {
        return(
            <div className="body">
                
                <Create />
            </div>

        )
    }

}