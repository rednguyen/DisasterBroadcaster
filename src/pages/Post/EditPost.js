import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { CountryDropdown } from "react-country-region-selector";
import Container from "@material-ui/core/Container";
import PostServices from "../../api-services/Post";
import { countries } from "../../api-services/countries";
import countriesArray from "./countries.js";
import UserServices from "../../api-services/User";
import axios from "axios";

const postServices = new PostServices();

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      description: "",
      img: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://disaster-broadcaster.herokuapp.com/api/disaster_broadcaster/post/39/"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          country: countriesArray[data.country_id.id],
          description: data.content,
          img: data.media,
        });
        console.log(this.state);
      });
  }

  onChange(e) {
    this.setState({ img: e.target.files[0] });
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  handleCountryChange = (country) => {
    this.setState({
      country: country,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(this.state);
    let formData = new FormData();
    formData.append("media", this.state.img, this.state.img.name);
    formData.append("content", this.state.description);
    formData.append("country_id", countries[this.state.country]);
    const post = {
      country_id: countries[this.state.country],
      content: this.state.description,
      media: this.state.img,
    };

    postServices
      .partial_update(39, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   partial_update = async (id, patchBody) => {
  //     try {
  //       return await axios.patch(`${this.url()}/${id}/`, patchBody);
  //     } catch (error) {
  //       return this.handleError(error, {});
  //     }
  //   };

  render() {
    const { country } = this.state;
    return (
      <Container component="main" maxWidth="sm">
        <form onSubmit={this.handleSubmit}>
          <div className="post">
            <h5>EDIT A POST</h5>
            <img className="thumbnail" src={this.state.img} />
            <input
              type="file"
              name="myImage"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.onChange}
            />

            <h6>CONTENT</h6>
            <div className="TextandCountry">
              <textarea
                rows="50"
                cols="50"
                type="text"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            <h6>COUNTRY</h6>
            <div>
              <CountryDropdown
                className="browser-default"
                id="country"
                value={this.state.country}
                onChange={(val) => this.selectCountry(val)}
              />
            </div>

            <div className="input-field">
              <button className="btn  blue darken-3 z-depth-0">
                Update Post
              </button>
            </div>
          </div>
        </form>
      </Container>
    );
  }
}

export default EditPost;
