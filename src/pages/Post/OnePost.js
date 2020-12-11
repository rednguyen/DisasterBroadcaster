import Post from '../../components/BodyPost/BodyPost';
import { Component } from 'react';
import PostServices from "../../api-services/Post";

const postServices = new PostServices();

class OnePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post:{},
      isLoaded: false
    };
  }

  componentDidMount() {
    postServices.retrieve(parseInt(this.props.match.params.id))
      .then(res => {
        const post = res.data;
        this.setState({ 
          post: post,
          isLoaded: true
        });
      })
  }

  render() {
    const isLoaded = this.state.isLoaded;
    if (isLoaded) {
      return (
        <div className = "BodyPost"><Post {...this.state}/></div>
      )
    } else {
      return <div>Loading...</div>;
    }
    
  }
}

export default OnePost;