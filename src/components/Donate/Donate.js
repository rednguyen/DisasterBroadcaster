import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import 'materialize-css'
import Grid from '@material-ui/core/Grid';
import "./Donate.css";
import OrganizationServices from "../../api-services/Organization";

const organizationServices = new OrganizationServices();

class Donate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        orgs: []
      };
    }

    componentDidMount(){
      organizationServices.list().then((res) => {
        this.setState({
          orgs: res.data
        });
      });
    }
    
    render() {
      let orgs_render = '';
      if(this.state.orgs.length > 0){
        orgs_render = <div>
                        {this.state.orgs.map(org => 
                          <ul>
                            <div className='component-donate org'>
                              <a href={org.url} className = "a">
                                <img src = {org.logo} width="300px" height="300px" alt=''/>
                                <h4>{org.name}</h4>
                                {org.email !== null ? <p>Email: {org.email}</p> : ''}
                                {org.address !== null ? <p>Address: {org.address}</p> : ''}
                              </a>
                            </div>
                          </ul>
                        )}
                      </div>
      }

      return (
          <div className='banner'>
            <Grid container spacing={3}>
              <Grid item xs></Grid>
                {orgs_render}
              <Grid item xs></Grid>
            </Grid>
          </div>
      )    
    }
    
}

export default Donate