import React from "react";
import { CountryDropdown } from "react-country-region-selector";
import Container from "@material-ui/core/Container";
import PostServices from "../../api-services/Post";
import { countries } from "../../api-services/countries";
import countriesArray from "./countries.js";

const postServices = new PostServices();

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      description: "",
      img: null,
      post: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    postServices.retrieve(parseInt(this.props.match.params.id))
      .then(res => {
        const data = res.data;
        this.setState({ 
          post: data,
          country: countriesArray[data.country_id.id],
          description: data.content,
          img: data.media,
        });
      })
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

    const post = {
      country_id: countries[this.state.country],
      content: this.state.description,
      media: this.state.img,
    };
    console.log(post);
    postServices
      .partial_update(this.state.post.id, post)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  render() {
    return (
      <Container component="main" maxWidth="sm">
        <form onSubmit={this.handleSubmit}>
          <div className="post">
            <h5>EDIT A POST</h5>
            <img className="media-post" src={this.state.img} alt=''/>
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
