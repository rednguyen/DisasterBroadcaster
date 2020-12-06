import NavBar from '../../components/NavBar/NavBar';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Container/FooterContainer';
import { Component } from 'react';
import Slider from '../../components/Slider';
import NewsServices from "../../api-services/News";
import PostServices from "../../api-services/Post";

const newsServices = new NewsServices();

class AllNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
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
        <div className = "Body">{Body([], this.state.news)}</div>
        <div class = "BottomPage"><Footer /></div>
      </div>
    )
  }
}

export default AllNews;