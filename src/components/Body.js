import React, { Component } from 'react';
import './Body.css';
import Create from './subcomponents/Create';

export default class Body extends Component {
    constructor() {
        super();
        }



    render() {
        return(
        <div>
        
<div class="video-background">
    <div class="video-foreground">
      <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
    <Create />
        </div>


        )
    }

}