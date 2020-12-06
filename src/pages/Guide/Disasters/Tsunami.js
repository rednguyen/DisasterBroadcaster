import TsunamiBody from '../../../components/Guide/Disasters/TsunamiBody';
import './Manuals.css';
import { Component } from 'react';


class Tsunami extends Component {
    render(){
        return (
            <div className = "Body"><TsunamiBody /></div>
        )
    };  
}

export default Tsunami;