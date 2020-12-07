import NavBar from '../../components/NavBar/NavBar';
import GuideBody from '../../components/Guide/GuideBody';
import Footer from '../../components/Footer/Container/FooterContainer';
import './Guide.css';
import { Component } from 'react';


class Guide extends Component {
    render(){
        return (
            <div className = "Body"><GuideBody /></div>
        )
    };  
}

export default Guide;