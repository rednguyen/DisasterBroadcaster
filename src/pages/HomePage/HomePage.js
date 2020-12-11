import Body from "../../components/Body/Body";
import "./HomePage.css";
import { Component } from "react";
import Slider from "../../components/Slider";
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
      newss: [],
    };
  }

  componentDidMount() {
    newsServices.list().then((res) => {
      const newss = res.data;
      this.setState({ newss });
    });
    postServices.list().then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="Body">
        <div>
          <Slider/>
          <Body posts={this.state.posts} newss={this.state.newss}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
