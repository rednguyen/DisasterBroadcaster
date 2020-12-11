import "./ChangeAvatar.css";
import React from "react";
import { Redirect } from "react-router-dom";
import UserServices from "../../api-services/User";
const userServices = new UserServices();

class ChangeAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      original: "",
      saved: false
    };
  }
  componentDidMount() {
    const token_data = {
      token: localStorage.getItem("token"),
    };

    userServices.currentUser(token_data).then((res) => {
      this.setState({
        user: {
          username: res.data.username,
          email: res.data.email,
          country_id: res.data.country_id,
          avatar: res.data.avatar,
          userId: res.data.id,
        },
        original: res.data.avatar,
      });
    });
  }

  handleChange = (img) => {
    this.setState({
      user: {
        username: this.state.user.username,
        country_id: this.state.user.country_id,
        email: this.state.user.email,
        avatar: img,
        userId: this.state.user.userId,
      },
    });
    let newAvatar = document.createElement("img");
    newAvatar.src = img;
    newAvatar.className = "avatar";
    document
      .querySelector("div.profile")
      .removeChild(document.querySelector("img.avatar"));
    document.querySelector("div.profile").appendChild(newAvatar);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    userServices.partial_update(this.state.user.userId, this.state.user)
    .then(res => {
      if(res.status !== 200){
        throw new Error(res.status)
      }
      const user = {
        id: res.data.id,
        username: res.data.username,
        avatar: res.data.avatar
      }
      localStorage.setItem('user', JSON.stringify(user));
      console.log(res.status)
      this.setState({
        saved: true,
      })
    })
  };

  handleDelete = () => {
    let oldAvatar = document.createElement("img");
    oldAvatar.src = this.state.original;
    oldAvatar.className = "avatar";
    document
      .querySelector("div.profile")
      .removeChild(document.querySelector("img.avatar"));
    document.querySelector("div.profile").appendChild(oldAvatar);
  };

  render() {
    if (this.state.saved) {
      return <Redirect to={"/editprofile"} />;
    }

    let images = [
      {
        name: "moon",
        src: "https://www.flaticon.com/svg/static/icons/svg/3815/3815448.svg",
      },
      {
        name: "cloudy",
        src: "https://www.flaticon.com/svg/static/icons/svg/3815/3815389.svg",
      },
      {
        name: "sunny",
        src: "https://www.flaticon.com/svg/static/icons/svg/3815/3815445.svg",
      },
      {
        name: "wind",
        src: "https://www.flaticon.com/svg/static/icons/svg/3815/3815323.svg",
      },
      {
        name: "snowflake",
        src: "https://www.flaticon.com/svg/static/icons/svg/3815/3815402.svg",
      },
    ];
    return (
      <div className="Wrapper">
        <div className="main">
          <p className="chooseAnAvatar">Choose an avatar</p>
          <div className="profile">
            <img src={this.state.original} className="avatar" alt=''/>
          </div>
          <div className="avatarOptions">
            {images.map((image, i) => {
              return (
                <img
                  src={image.src}
                  className="avatarOption"
                  onClick={(e) => {
                    this.handleChange(e.target.currentSrc);
                  }}
                  alt=''
                />
              );
            })}
          </div>
          <div className="avatarButtons">
            <button className="saveAvatar" onClick={this.handleSubmit}>
              save
            </button>
            <button className="deleteAvatar" onClick={this.handleDelete}>
              clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeAvatar;
