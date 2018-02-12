import React, { Component } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import App from './App';

class Landing extends Component {
    render() {
      return (

      <div>
  <div className="Lightsaber-box">
  <section className="the-demo">
  <div className="example-item">
  <div className="lightsaber">
  <label for="yoda-example"></label>
  <input type="checkbox" id="yoda-example"></input>
  <div className="switch"></div>
  <div className="plasma yoda"></div>
  </div>
  <h3>Yoda</h3>
  </div>
  <div className="example-item">
  <div className="lightsaber">
  <label for="darth-vader-example"></label>
  <input type="checkbox" id="darth-vader-example"></input>
  <div className="switch"></div>
  <div className="plasma vader"></div>
  </div>
  <h3>Vader</h3>
  </div>
  <div className="example-item">
  <div className="lightsaber">
  <label for="windu-example"></label>
  <input type="checkbox" id="windu-example"></input>
  <div className="switch"></div>
  <div className="plasma windu"></div>
  </div>
  <h3>Windu</h3>
  </div>
  <div className="example-item clearfix">
  <div className="lightsaber">
  <label for="obi-wan-example"></label>
  <input type="checkbox" id="obi-wan-example"></input>
  <div className="switch"></div>
  <div className="plasma obi-wan"></div>
  </div>
  <h3>Obi</h3>

  </div>
  <div className="link-button-div">
  <div  className="Yodatext">
  <h1>CLICK YODA'S HEAD, YOU WILL.</h1>
  </div>
  <button className="link-button">
  <Link to="./App">.</Link>
  </button>
  </div>
  </section>
  </div>
  </div>
      )
  }
}

export default Landing;