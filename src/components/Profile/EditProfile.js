import "./EditProfile.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Container/FooterContainer";
import React from "react";
import countries from "./countries.js";
import Select from "react-select";
import Link from "@material-ui/core/Link";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      saved: false,
      country_id: {},
    };
  }
  componentDidMount() {
    fetch(
      "https://disaster-broadcaster.herokuapp.com/api/disaster_broadcaster/user/4/"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          user: {
            username: data.username,
            email: data.email,
            country_id: data.country_id,
            avatar: data.avatar,
          },
          country_id: countries[data.country_id],
        });
        console.log(this.state);
      });
  }

  handleNameChange = (name) => {
    this.setState({
      user: {
        username: name,
        email: this.state.user.email,
        country_id: this.state.user.country_id,
        avatar: this.state.user.avatar,
      },
    });
  };

  handleEmailChange = (email) => {
    this.setState({
      user: {
        username: this.state.user.username,
        email: email,
        country_id: this.state.user.country_id,
        avatar: this.state.user.avatar,
      },
    });
  };

  handleCountryChange = (country) => {
    var index = countries.indexOf(country);
    this.setState({
      user: {
        username: this.state.user.username,
        email: this.state.user.email,
        country_id: index,
        avatar: this.state.user.avatar,
      },
      country_id: countries[index],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://disaster-broadcaster.herokuapp.com/api/disaster_broadcaster/user/4/",
      {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(this.state.user),
      }
    )
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) =>
        this.setState({
          saved: true,
        })
      );
  };

  handleDeleteAccount = (e) => {
    e.preventDefault();
    fetch(
      "https://disaster-broadcaster.herokuapp.com/api/disaster_broadcaster/user/4/",
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(this.state.user),
      }
    )
      .then((response) => response)
      .then((data) => {
        if (data) {
          this.fetchData();
        }
      });
  };

  render() {
    if (this.state.saved) {
      window.location.href = "/profile";
    }
    return (
      <div className="Wrapper">
        <div className="TopPage">
          <NavBar />
        </div>
        <form className="main">
          <div className="profile">
            <img src={this.state.user.avatar} className="avatar" />
          </div>
          <a className="changeprofile" href="/changeavatar">
            Change profile avatar
          </a>
          <div className="formcontent">
            <div className="label">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={this.state.user.username}
                onChange={(e) => this.handleNameChange(e.target.value)}
              ></input>
            </div>
            <div className="label">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={this.state.user.email}
                onChange={(e) => this.handleEmailChange(e.target.value)}
              ></input>
            </div>
            <div className="label">
              <label htmlFor="country">Country</label>
              <Select
                name="country"
                options={countries}
                value={this.state.country_id}
                onChange={(value) => this.handleCountryChange(value)}
                defaultValue={{ label: "United States", value: "US" }}
              />
            </div>
            <input
              type="submit"
              value="Save Changes"
              onClick={this.handleSubmit}
            />
          </div>
        </form>
        <Link href="/pwreset" variant="body2">
          <button className="resetpassword">Reset Password</button>
        </Link>
        <input
          type="submit"
          value="Delete Account"
          onClick={this.handleDeleteAccount}
        />

        <div className="BottomPage">
          <Footer />
        </div>
      </div>
    );
  }
}

export default EditProfile;
