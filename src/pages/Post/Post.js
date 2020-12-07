import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { CountryDropdown } from "react-country-region-selector";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";

class BasicTextFields extends Component {
  state = {
    photo: "",
    content: "",
    country: "",
  };

  selectCountry(val) {
    this.setState({ country: val });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(this.state);
    console.log(this.state);
  };

  render() {
    const { country } = this.state;
    return (
      <div>
        <Container component="main" maxWidth="sm">
          <div className="post">
            <h5>CREATE A NEW POST</h5>
            <TextField id="photo" type="file" />

            <h6>CONTENT</h6>

            <div className="multiline">
              <TextBoxComponent
                multiline={true}
                placeholder="Enter your address"
                value="Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center"
              />
            </div>

            <Grid item xs={12} sm={12}>
              <textarea rows="50" cols="50" />
            </Grid>

            <h6>COUNTRY</h6>

            <Grid item xs={12} sm={12}>
              <CountryDropdown
                className="browser-default"
                value={country}
                onChange={(val) => this.selectCountry(val)}
              />
            </Grid>

            <div className="input-field">
              <button className="btn  blue darken-3 z-depth-0">Post</button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default BasicTextFields;
