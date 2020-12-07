import Body from '../../components/Body/Body';
import { Component } from 'react';
import NewsServices from "../../api-services/News";

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
      <div className = "Body">{Body([], this.state.news)}</div>
    )
  }
}

export default AllNews;