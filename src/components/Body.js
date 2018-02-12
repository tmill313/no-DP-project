import React, { Component } from 'react';
import './Body.css';
import Create from './subcomponents/Create';
import Header from './Header'

export default class Body extends Component {
    constructor() {
        super();
        }



    render() {
        return(
        <div>
        
<div className="video-background">
    <div className="video-foreground">
      <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
  <Header />
    <Create />
        </div>


        )
    }

}