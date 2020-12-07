import VolcanoBody from '../../../components/Guide/Disasters/VolcanoBody';
import './Manuals.css';
import { Component } from 'react';


class Volcano extends Component {
    render(){
        return (
            <div className = "Body"><VolcanoBody /></div>
        )
    };  
}

export default Volcano;