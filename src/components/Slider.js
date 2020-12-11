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

    // Ensure 4 random numbers are different from each other
    var arr = [];
    while(arr.length < 4){
        var r = Math.floor(Math.random() * (max - min ) + min);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    
    const rand = arr[0];
    const rand2 = arr[1];
    const rand3 = arr[2];
    const rand4 = arr[3];


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