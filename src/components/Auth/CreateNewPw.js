import React, {Component} from 'react'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import "./auth.css"
// const useStyles = makeStyles()

class CreateNewPw extends Component {
    state = {
        new_password: '',
        new_comfirm_password: ''
}
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
} 
handleSubmit = (e) => {
    e.preventDefault(this.state)
    console.log(this.state)
} 

render(){
    return (
        <Container component="main" maxWidth = "sm">
        <div className = "container">
            <form onSubmit={this.handleSubmit} className = "white" class = "form1">
                <h5 className= "grey-text text-darken-3">Create New Password</h5>
                
                <div className = "input-field">
                    <label htmlFor="new_password">New Password</label>
                    <input type="password" id="new_password" onChange={this.handleChange}/>
                </div>

                <div className = "input-field">
                    <label htmlFor="new_comfirm_password">Comfirm New Password</label>
                    <input type="password" id="new_comfirm_password" onChange={this.handleChange}/>
                </div>
                <div className = "input-field">
                <button className = "btn  blue darken-3 z-depth-0" href="/about">Reset</button>
                </div>
            </form>
        </div>
        </Container>
        )
    }
}
// export default SignIn;
export default CreateNewPw;
