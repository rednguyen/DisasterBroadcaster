import "./EditProfile.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Container/FooterContainer";
import React from "react";
import countries from "./countries.js";
import Select from "react-select";
import Link from "@material-ui/core/Link";
import UserServices from "../../api-services/User";
import NavBarTwo from "../../components/NavBar/NavBarTwo";
import { Button } from "../Button/Button";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      saved: false,
      country_id: {},
      redirect: false,
    };
    this.logout = this.logout.bind(this);
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
  handleNameChange = (name) => {
    this.setState({
      user: {
        username: name,
        email: this.state.user.email,
        country_id: this.state.user.country_id,
        avatar: this.state.user.avatar,
        userId: this.state.user.userId,
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
        userId: this.state.user.userId,
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
        userId: this.state.user.userId,
      },
      country_id: countries[index],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://disaster-broadcaster.herokuapp.com/api/disaster_broadcaster/user/${this.state.user.userId}/`,
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

  deleteUser = (e) => {
    e.preventDefault();

    var deleted = "DELETED" + this.state.user.username;
    this.setState({
      user: {
        username: deleted,
        email: this.state.user.email,
        country_id: this.state.user.country_id,
        avatar: this.state.user.avatar,
        userId: this.state.user.userId,
      },
    });
    setTimeout(() => {
      this.handleDeleteAccount();
    }, 1000);
  };

  logout() {
    // userServices.logout()
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({
      redirect: true,
    });
    window.location.href = "/";
  }

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      console.log("Call");
    } else {
      this.setState({ redirect: true });
    }
  }

  handleDeleteAccount = () => {
    fetch(
      `https://disaster-broadcaster.herokuapp.com/api/disaster_broadcaster/user/${this.state.user.userId}/`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        response.text();
      })
      .then((response) => {
        console.log(response);
      })
      .then(this.logout);
  };

  render() {
    if (this.state.saved) {
      window.location.href = "/profile";
    }

    return (
      <div className="container">
        <form className="main">
          <div className="myprofile">Edit My Profile</div>
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
              name="submit"
              onClick={this.handleSubmit}
            />
          </div>
        </form>
        <Link href="/createnewpw" variant="body2">
          <button className="reset">Change Password</button>
        </Link>
        {/* <input
            name="delete"
            type="submit"
            value="Delete Account"
            onClick={this.handleDeleteAccount}
          /> */}
        <Button onClick={this.handleDeleteAccount}>
          Delete Account<span>&nbsp;&nbsp;</span>
          <i class="fas fa-user"></i>
        </Button>
      </div>
    );
  }
}

export default EditProfile;
