import React, {Component} from 'react'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

// const useStyles = makeStyles()

class PwReset extends Component {
    state = {
        email: '',
        security_question: ''
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
            <form onSubmit={this.handleSubmit}>
                <h5 className= "grey-text text-darken-3">Password Reset</h5>
                <div className = "input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className = "input-field">
                    <label htmlFor="security_question">Security Question: What is your mother's middle name?</label>
                    <input className="input-field" type="text" id="security_question" onChange={this.handleChange}/>
                </div>
                <div className = "input-field">  
                <button onClick={(e) => {e.preventDefault(); window.location.href='/createnewpw'}} className = "btn  blue darken-3 z-depth-0" href="/about">Next</button>
                </div>
            </form>
        </div>
        </Container>
        )
    }
}
// export default SignIn;
export default PwReset;
