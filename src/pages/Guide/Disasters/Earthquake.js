import EarthquakeBody from '../../../components/Guide/Disasters/EarthquakeBody';
import './Manuals.css';
import { Component } from 'react';


class Earthquake extends Component {
    render(){
        return (
            <div className = "Body"><EarthquakeBody /></div>
        )
    };  
}

export default Earthquake;