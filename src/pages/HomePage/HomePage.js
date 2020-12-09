import Body from "../../components/Body/Body";
import "./HomePage.css";
import { Component } from "react";
import Slider from "../../components/Slider";
import Donate from "../../components/Donate/Donate";
import NewsServices from "../../api-services/News";
import PostServices from "../../api-services/Post";
import "../../components/NavBar/NavBar.css";

const newsServices = new NewsServices();
const postServices = new PostServices();

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      news: [],
    };
  }

  componentDidMount() {
    newsServices.list().then((res) => {
      const news = res.data;
      this.setState({ news });
    });
    postServices.list().then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="Body">
        {Body(this.state.posts, this.state.news)}
        <div id="DonateSection">
          {" "}
          <Donate />
        </div>
      </div>
    );
  }
}

export default HomePage;
