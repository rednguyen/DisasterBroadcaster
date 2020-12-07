import { Component } from 'react';
import PwReset from '../../components/Auth/PwReset';
import "./Background.css"

class PwResetPage extends Component {
    render(){
        return (
            <div className = "PwReset"><PwReset/></div>
          )
    };  
}

export default PwResetPage;