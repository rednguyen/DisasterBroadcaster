import Link from "@material-ui/core/Link";
import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Container/FooterContainer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import countries from "../Profile/countries.js";
import Select from "react-select";
import { Button } from "../Button/Button";
import NavBarTwo from "../../components/NavBar/NavBarTwo";
import UserServices from "../../api-services/User";

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
      console.log(res.data);
      this.setState({
        user: {
          country_id: res.data.country_id,
        },
        country_id: countries[res.data.country_id],
      });
      console.log(this.state);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/country/${this.state.id}`;
  };

  handleCountryChange = (country) => {
    var index = countries.indexOf(country);
    console.log(index);
    this.setState({
      country_id: countries[index],
      id: index,
    });
  };

  render() {
    const { country } = this.state;

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

            <Link variant="body2">
              <Button
                className="btn  blue darken-3 z-depth-0"
                type="button"
                onClick={this.handleSubmit}
              >
                SUBMIT
              </Button>
            </Link>
          </div>
        </form>
      </Container>
    );
  }
}

export default Country;
