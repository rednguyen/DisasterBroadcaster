import NavBar from '../../components/NavBar/NavBar';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Container/FooterContainer';
import { Component } from 'react';
import Slider from '../../components/Slider';
import Donate from '../../components/Donate/Donate';
import NewsServices from "../../api-services/News";
import PostServices from "../../api-services/Post";

const newsServices = new NewsServices();
const postServices = new PostServices();

class CountryHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      news: []
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
        const news = res.data;
        this.setState({ news });
      })
  }

  render() {

    return (
      <div>
        <Slider/>
        <div className = "Body">{Body(this.state.posts, this.state.news)}</div>
      </div>
    )
  }
}

export default CountryHomePage;