
import { Component } from 'react';
import CreateNewPw from '../../components/Auth/CreateNewPw';

class CreateNewPwPage extends Component {
    render(){
      const token =  localStorage.getItem('token');
      if(token !== null && token === this.props.match.params.token){
        return (
          <div className = "PwReset"><CreateNewPw/></div>
        )
      }
      else {
        return  (
          <div>
            <h3>404 page not found</h3>
            <p>We are sorry but the page you are looking for does not exist.</p>
          </div>
        )
      }
        
    };
}

export default CreateNewPwPage;