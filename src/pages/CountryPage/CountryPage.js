import { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Container/FooterContainer";
import Country from "../../components/Country/Country";
import "./CountryPage.css";
import NavBarTwo from "../../components/NavBar/NavBarTwo";

class CountryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      console.log("Call");
    } else {
      this.setState({ redirect: true });
    }
  }
  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({
      redirect: true,
    });
  }

  render() {
    if (this.state.redirect) {
      return (
        <div className="Wrapper">
          <div className="TopPage">
            <NavBar />
          </div>
          <div className="countybg">
            <Country />
          </div>
          <div class="BottomPage">
            <Footer />
          </div>
        </div>
      );
    } else {
      return (
        <div className="Wrapper">
          <div className="TopPage">
            <NavBarTwo />
          </div>
          <div className="countybg">
            <Country />
          </div>
          <div class="BottomPage">
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default CountryPage;
