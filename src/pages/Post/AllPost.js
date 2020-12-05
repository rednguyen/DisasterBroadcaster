import NavBar from '../../components/NavBar/NavBar';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Container/FooterContainer';
import { Component } from 'react';
import Slider from '../../components/Slider';
import NewsServices from "../../api-services/News";
import PostServices from "../../api-services/Post";

const postServices = new PostServices();

class AllPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    postServices.list()
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {

    return (
      <div className="Wrapper">
        <div className="TopPage"><NavBar /></div>
        <Slider/>
        <div className = "Body">{Body(this.state.posts, [])}</div>
        <div class = "BottomPage"><Footer /></div>
      </div>
    )
  }
}

export default AllPost;