import Body from '../../components/Body/Body';
import { Component } from 'react';
import NewsServices from "../../api-services/News";

const newsServices = new NewsServices();

class AllNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newss: []
    };
  }

  componentDidMount() {
    newsServices.list()
      .then(res => {
        const newss = res.data;
        this.setState({ newss });
      })
  }

  render() {

    return (
      <div className="body">
        <Body posts={[]} newss={this.state.newss}/>
      </div>
    )
  }
}

export default AllNews;