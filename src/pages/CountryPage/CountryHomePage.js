import Body from '../../components/Body/Body';
import { Component } from 'react';
import Slider from '../../components/Slider';
import NewsServices from "../../api-services/News";
import PostServices from "../../api-services/Post";

const newsServices = new NewsServices();
const postServices = new PostServices();

class CountryHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newss: []
    };
  }

  componentDidMount() {
    postServices.getCountryPosts(parseInt(this.props.match.params.id))
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })

    newsServices.getCountryNews(parseInt(this.props.match.params.id))
      .then(res => {
        const newss = res.data;
        this.setState({ newss });
      })
  }

  render() {

    return (
      <div>
        <Slider/>
        <Body posts={this.state.posts} newss={this.state.newss}/>
      </div>
    )
  }
}

export default CountryHomePage;