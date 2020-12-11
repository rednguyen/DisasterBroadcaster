import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import countries from "../Profile/countries.js";
import Select from "react-select";
import Button from '@material-ui/core/Button';
import UserServices from "../../api-services/User";
import SearchIcon from '@material-ui/icons/Search';

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      country_id: null,
      id: null,
    };
  }

  componentDidMount() {
    const token_data = {
      token: localStorage.getItem("token"),
    };
    let userServices = new UserServices();

    userServices.currentUser(token_data).then((res) => {
      this.setState({
        user: {
          country_id: res.data.country_id,
        },
        country_id: countries[res.data.country_id],
        id: res.data.country_id
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/country/${this.state.id}`;
  };

  handleCountryChange = (country) => {
    var index = countries.indexOf(country);
    this.setState({
      country_id: countries[index],
      id: index,
    });
  };

  render() {
    return (
      <Container component="main" maxWidth="sm">
        <form onSubmit={this.handleSubmit}>
          <div className="post">
            <h5 className="grey-text text-darken-3">
              SEARCH DISASTER BY WORLD
            </h5>
            <div className="label">
              <Select
                name="country"
                options={countries}
                value={this.state.country_id}
                onChange={(value) => this.handleCountryChange(value)}
                defaultValue={{ label: "----------", value: "--" }}
              />
            </div>
            <Button variant="contained" color="primary" onClick={this.handleSubmit} endIcon={<SearchIcon />}>
              SUBMIT
            </Button>
          </div>
        </form>
      </Container>
    );
  }
}

export default Country;
