import HurricaneBody from '../../../components/Guide/Disasters/HurricaneBody';
import './Manuals.css';
import { Component } from 'react';


class Hurricane extends Component {
    render(){
        return (
            <div className = "Body"><HurricaneBody /></div>
        )
    };  
}

export default Hurricane;