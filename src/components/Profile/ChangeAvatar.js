import "./ChangeAvatar.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Container/FooterContainer";
import React from "react";

class ChangeAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      original: "",
    };
  }
  componentDidMount() {
    fetch(
      "https://disaster-broadcaster.herokuapp.com/api/disaster_broadcaster/user/4/"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("original", data);
        this.setState({
          user: {
            username: data.username,
            email: data.email,
            country_id: data.country_id,
            avatar: "",
          },
          original: data.avatar,
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

  handleSubmit = () => {
    console.log(this.state.user);
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
      .then((data) => console.log(data));
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
        <div className="TopPage">
          <NavBar />
        </div>

        <div className="main">
          <p className="chooseAnAvatar">Choose an avatar</p>
          <div className="profile">
            <img src={this.state.original} className="avatar" />
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
                />
              );
            })}
          </div>
          <div className="avatarButtons">
            <button className="saveAvatar" onClick={this.handleSubmit}>
              <a href="/editprofile" className="save">
                save
              </a>
            </button>
            <button className="deleteAvatar" onClick={this.handleDelete}>
              clear
            </button>
          </div>
        </div>

        <div className="BottomPage">
          <Footer />
        </div>
      </div>
    );
  }
}

export default ChangeAvatar;
