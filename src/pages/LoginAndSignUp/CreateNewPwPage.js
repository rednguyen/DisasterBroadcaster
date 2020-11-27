
import { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Container/FooterContainer';
import CreateNewPw from '../../components/Auth/CreateNewPw';

class CreateNewPwPage extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "Body"><CreateNewPw/></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default CreateNewPwPage;