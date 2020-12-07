import NavBar from '../../components/NavBar/NavBar';
import GuideBody from '../../components/Guide/GuideBody';
import Footer from '../../components/Footer/Container/FooterContainer';
import './Guide.css';
import { Component } from 'react';
import NavBarTwo from '../../components/NavBar/NavBarTwo';

class Guide extends Component {
  constructor(props){
    super(props);
    this.state ={
      redirect: false
    }
    this.logout = this.logout.bind(this)
  }
  componentWillMount(){
    if(sessionStorage.getItem("userData")){
      console.log("Call")
    }
    else{
      this.setState({redirect:true})
    }
  }
  logout(){
    sessionStorage.setItem("userData","");
    sessionStorage.clear();
    this.setState({
      redirect:true
    })
  }

    render(){
      // if redirect = false, user didnt login in
      if(this.state.redirect){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "Body"><GuideBody /></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
        }
        else {
          return (
            <div className="Wrapper">
              <div className="TopPage"><NavBarTwo /></div>
              <div className = "Body"><GuideBody /></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
        }
    };  
}

export default Guide;