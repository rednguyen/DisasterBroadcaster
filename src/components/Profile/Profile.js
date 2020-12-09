import "./Profile.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Container/FooterContainer";
import React from "react";
import countries from "./countries.js";
import Select from "react-select";
import UserServices from "../../api-services/User";
import NavBarTwo from "../../components/NavBar/NavBarTwo";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      country_id: null,
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
          username: res.data.username,
          email: res.data.email,
          country_id: res.data.country_id,
          avatar: res.data.avatar,
          userId: res.data.id,
        },
        country_id: countries[res.data.country_id],
      });
      console.log(this.state);
    });
  }

  render() {
    console.log(this.state.country);
    return (
      <form className="main">
        <div className="myprofile">My Profile</div>
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
    );
  }
}

export default Profile;
