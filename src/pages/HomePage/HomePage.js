import Body from "../../components/Body/Body";
import "./HomePage.css";
import { Component } from "react";
import Slider from "../../components/Slider";
import Donate from "../../components/Donate/Donate";
import NewsServices from "../../api-services/News";
import PostServices from "../../api-services/Post";
import "../../components/NavBar/NavBar.css";
import { connect } from 'react-redux';

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
          <Body posts={this.state.posts} newss={this.state.newss}/>
        </div>
        <div id="DonateSection">
          {" "}
          <Donate />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     posts: state.posts,
//     newss: state.newss
//   }
// }

// export default connect(mapStateToProps, null)(HomePage);


export default HomePage;
