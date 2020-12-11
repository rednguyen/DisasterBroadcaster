import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import 'materialize-css'

class Slider extends Component {
  
  componentDidMount() {
    const options = {
      indicators: true,
      interval: 4200,

      duration: 450,
      height: 500,
    };
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  }
  componentDidUpdate() {
    const options = {
      indicators: true,
      interval: 4200,

      duration: 450,
      height: 500,
    };
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  }

  render() {
    let newss = this.props.newss;
    let newss_render = ''
    const min = Math.ceil(1);
    const max = Math.floor(18);;
    const rand = Math.floor(Math.random() * (max - min ) + min);
    const rand2 = Math.floor(Math.random() * (max - min ) + min);
    const rand3 = Math.floor(Math.random() * (max - min) + min);
    const rand4 = Math.floor(Math.random() * (max - min) + min);
    console.log("random1: ", rand)
    console.log("random2: ", rand2)

    if (newss.length > 0) {
      newss_render =
        <div className="slider">
          <ul className="slides">
            <li>
              <a href={newss[rand].url} className = "a">
              <img className = "newsImg" src = {newss[rand].media} alt=''/>
              </a>
              <div className="caption left-align">
                <h3>{newss[rand].country_id.name}</h3>
                <h5 className="light grey-text text-lighten-3">
                 {newss[rand].headline}
              </h5>
              </div>
            </li>
            <li>
              <a href={newss[rand2].url} className = "a">
              <img className = "newsImg" src = {newss[rand2].media} alt=''/>
              </a>
              <div className="caption left-align">
                <h3>{newss[rand2].country_id.name}</h3>
                <h5 className="light grey-text text-lighten-3">
                 {newss[rand2].headline}
              </h5>
              </div>
            </li>
            <li>
              <a href={newss[rand3].url} className = "a">
              <img className = "newsImg" src = {newss[rand3].media} alt=''/>
              </a>
              <div className="caption left-align">
                <h3>{newss[rand3].country_id.name}</h3>
                <h5 className="light grey-text text-lighten-3">
                 {newss[rand3].headline}
              </h5>
              </div>
            </li>
            <li>
              <a href={newss[rand4].url} className = "a">
              <img className = "newsImg" src = {newss[rand4].media} alt=''/>
              </a>
              <div className="caption left-align">
                <h3>{newss[rand4].country_id.name}</h3>
                <h5 className="light grey-text text-lighten-3">
                 {newss[rand4].headline}
              </h5>
              </div>
            </li>
          </ul>
        </div>
    }
    return (
      <div>
        {newss_render}
      </div>
    )
  }
}

export default Slider;