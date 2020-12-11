import React from "react";
import Container from "@material-ui/core/Container";
import PostServices from "../../api-services/Post";
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";
import countries from "../../components/Profile/countries";
import Select from "react-select";

const postServices = new PostServices();

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country_id: null,
      country_name: null,
      description: "",
      img: null,
      post: {},
      saved: false,
      img_uploaded: null
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
          country_id: data.country_id.id,
          country_name: countries[data.country_id.id],
          description: data.content,
          img: data.media
        });
      })
  }

  onChange(e) {
    this.setState({ img: e.target.files[0], img_uploaded: URL.createObjectURL(e.target.files[0]) });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleCountryChange = (country_id) => {
    var index = countries.indexOf(country_id);
    this.setState({
      country_name: countries[index],
      country_id: country_id,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(this.state);

    let formData = new FormData();
    if(this.state.img_uploaded !== null){
      formData.append("media", this.state.img, this.state.img.name)
    }
    formData.append("content", this.state.description);
    formData.append("country_id", this.state.country_id);

    postServices
      .partial_update(this.state.post.id, formData)
      .then((res) => {
        console.log(res);
        this.setState({
          saved: true,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };


  render() {
    if (this.state.saved) {
      alert("Post update successful!");
      return <Redirect to={"/viewmypost"} />;
    }
    return (
      <Container component="main" maxWidth="sm">
        <form onSubmit={this.handleSubmit}>
          <div className="post">
            <h5>EDIT A POST</h5>
            <div>
            <Select
                name="country"
                options={countries}
                value={this.state.country_name}
                onChange={(value) => this.handleCountryChange(value)}
                defaultValue={{ label: "----------", value: "--" }}
              />
            </div>

            <br></br>

            {this.state.img_uploaded !== null ? <img className="media-post" src={this.state.img_uploaded} alt=''/> : <img className="media-post" src={this.state.img} alt=''/>}

            <input
              type="file"
              name="myImage"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.onChange}
            />

            <h6>CONTENT</h6>
            <div>
              <TextField
                id="content"
                multiline
                onChange={this.handleChange}
                rows={6}
                fullWidth="true"
                defaultValue={this.state.description}
                variant="outlined"/>
              
            </div>

            <h6>COUNTRY</h6>

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
