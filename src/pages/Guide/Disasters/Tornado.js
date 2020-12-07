import TornadoBody from '../../../components/Guide/Disasters/TornadoBody';
import './Manuals.css';
import { Component } from 'react';


class Tornado extends Component {
    render(){
        return (
            <div className = "Body"><TornadoBody /></div>
        )
    };  
}

export default Tornado;