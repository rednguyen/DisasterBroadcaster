import NavBar from '../../components/NavBar/NavBar';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Container/FooterContainer';
import './HomePage.css';
import { Component } from 'react';
import Slider from '../../components/Slider';
import Donate from '../../components/Donate/Donate';
import NewsServices from "../../api-services/News";
import PostServices from "../../api-services/Post";

const newsServices = new NewsServices();
const postServices = new PostServices();

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      news: []
    };
  }

  componentDidMount() {
    postServices.list()
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })

    newsServices.list()
      .then(res => {
        const news = res.data;
        this.setState({ news });
      })
  }

  render() {

    return (
      <div className="Wrapper">
        <div className="TopPage"><NavBar /></div>
        <Slider/>
        <div className = "Body">{Body(this.state.posts, this.state.news)}</div>
        <div id="DonateSection"> <Donate/></div>
        <div class = "BottomPage"><Footer /></div>
      </div>
    )
  }
}

export default HomePage;