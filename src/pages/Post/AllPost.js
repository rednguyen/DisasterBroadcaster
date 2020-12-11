import Body from '../../components/Body/Body';
import { Component } from 'react';
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
      <div className="body">
        <Body newss={[]}  posts={this.state.posts}/>
      </div>
    )
  }
}

export default AllPost;