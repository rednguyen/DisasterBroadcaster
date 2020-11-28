import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import 'materialize-css'
import { Link} from "react-router-dom";

class Slider extends Component {
  componentDidMount() {
    const options = {
      indicators: true,
      interval: 4200,
      
      duration: 450,
      height: 500,
    };
    M.Slider.init(this.Slider, options);
  }

  render() {
    return (
      <div
        ref={(Slider) => {
          this.Slider = Slider;
        }}
        className="slider"
      >
        {/* If you want fullscreen slider then add fullscreen to
      this div */}
        <ul className="slides">
          <li>
          <a href="https://www.thenewhumanitarian.org/maps-and-graphics/2020/11/16/typhoon-vamco-philippines-vietnam-flooding-climate-change">
            <img src={"https://assets.irinnews.org/s3fs-public/styles/responsive_large/public/philippines-storm-typhoon-vamco.jpg?YPGi9DwnCtbKIMT8us5dvs4498JS9.oU&itok=qUqfHNs8"} />
          </a>  
            <div className="caption left-align">
              <h4>One storm after another: Southeast Asia’s typhoon barrage</h4>
              <h6 className="light grey-text text-lighten-3">
              Each time they start rebuilding their lives and livelihoods, they are pummelled by yet another storm.’
              </h6>
            </div>
          </li>
          <li>
          <a href = "https://www.abc27.com/news/us-world/national/crews-try-to-tame-massive-forest-fire-north-of-los-angeles/">   
            <img src={"https://www.pahomepage.com/wp-content/uploads/sites/91/2020/08/d6ac33a995b84df2ac76c523ef99d4e3.jpg?w=876&h=493&crop=1"} />
          </a>   
            <div className="caption left-align">
              <h3>California</h3>
              <h5 className="light grey-text text-lighten-3">
                Crews try to tame California wildfire as heat wave arrives
              </h5>
            </div>
          </li>
          <li>
          <a href = "https://www.beaumontenterprise.com/news/article/NWS-urges-immediate-evacuation-for-SETX-15515852.php">    
            <img src={"https://i.guim.co.uk/img/media/f86258bbdd4c6b8afc9640e66489743f4abe85df/0_103_2400_1440/master/2400.jpg?width=1920&quality=85&auto=format&fit=max&s=95fa8209adc71a74ff76e6687764adc0"} />
          </a> 
            <div className="caption left-align">
              <h3>Louisiana</h3>
              <h5 className="light grey-text text-lighten-3">
              A satellite image shows Hurricane Laura moving north-west in the Gulf of Mexico towards Louisiana on Wednesday.
              </h5>
            </div>
          </li>
          
        </ul>
      </div>
    );
  }
}

export default Slider;