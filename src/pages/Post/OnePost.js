import NavBar from '../../components/NavBar/NavBar';
import Post from '../../components/BodyPost/BodyPost';
import Footer from '../../components/Footer/Container/FooterContainer';
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
    const { post, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div className="Wrapper">
          <div className="TopPage"><NavBar /></div>
      <div className = "BodyPost"><Post {...this.state}/></div>
        </div>
      )
    } else {
      return <div>Loading...</div>;
    }
    
  }
}

export default OnePost;