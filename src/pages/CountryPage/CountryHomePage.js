import Body from '../../components/Body/Body';
import { Component } from 'react';
import NewsServices from "../../api-services/News";
import PostServices from "../../api-services/Post";
import CountryServices from "../../api-services/Country";

const countryServices = new CountryServices;
const newsServices = new NewsServices();
const postServices = new PostServices();

class CountryHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newss: [],
      country: {}
    };
  }

  componentDidMount() {
    countryServices.retrieve(parseInt(this.props.match.params.id))
      .then(res => {
        this.setState({country: res.data})
      })
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
        <div className="country-info"><h4>Displaying news and posts for country: {this.state.country.name}</h4>
        <h4>Emergency number for {this.state.country.name} is: {this.state.country.emergency_number}</h4></div>
        <Body posts={this.state.posts} newss={this.state.newss}/>
      </div>
    )
  }
}

export default CountryHomePage;