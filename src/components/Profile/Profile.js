import "./Profile.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Container/FooterContainer";
import React from "react";
import countries from "./countries.js";
import Select from "react-select";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      country_id: null,
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

  render() {
    console.log(this.state.country);
    return (
      <div className="Wrapper">
        <div className="TopPage">
          <NavBar />
        </div>
        <form className="main">
          <div className="mainprofile">
            <img src={this.state.user.avatar} className="avatar" />
          </div>
          <div className="formcontent">
            <div className="label">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={this.state.user.username}
                disabled
              ></input>
            </div>
            <div className="label">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={this.state.user.email}
                disabled
              ></input>
            </div>
            <div className="label">
              <label htmlFor="country">Country</label>
              <Select
                name="country"
                options={countries}
                value={this.state.country_id}
                isDisabled={true}
              />
            </div>

            <a className="editprofile" href="/editprofile">
              Edit Profile
            </a>
          </div>
        </form>
        <div className="BottomPage">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Profile;
