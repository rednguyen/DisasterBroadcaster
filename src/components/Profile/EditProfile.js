import "./EditProfile.css";
import React from "react";
import countries from "./countries.js";
import Select from "react-select";
import UserServices from "../../api-services/User";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

const userServices = new UserServices();

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
    userServices.partial_update(this.state.user.userId, this.state.user)
    .then(res => {
      if(res.status !== 200){
        throw new Error(res.status)
      }
      console.log(res.status)
      this.setState({
        saved: true,
      })
    })
  };

  logout() {
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

  render() {
    if (this.state.saved) {
      return window.location.reload();
    }
    const token =  localStorage.getItem('token');
    return (
      <div className="container">
        <form className="main">
          <div className="myprofile">Edit My Profile</div>
          <div className="profile">
            <img src={this.state.user.avatar} className="avatar" alt=''/>
          </div>
          <a className="changeprofile" href="/changeavatar">
            Change profile avatar
          </a>
          <br></br>
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
          </div>
        </form>
        <br></br>
        <Button variant="contained" color="primary" onClick={this.handleSubmit} endIcon={<SaveIcon />}>
          Save Changes
        </Button>
        <br></br>
        <Button variant="contained" color="primary" href={"/createnewpw/" + token} endIcon={<EditIcon />}>
          Change Password
        </Button>
      </div>
    );
  }
}

export default EditProfile;
