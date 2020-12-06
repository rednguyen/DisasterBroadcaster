import './News.css';
import { SocialIcon } from 'react-social-icons';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Container/FooterContainer';

function NewsScreen() {

    return (
        <div className="Wrapper">
            <div className="TopPage"><NavBar/></div>
            
            <div className="main">
                <div className="header">
                    <h1 className="headline">Hurricane in Jakarta</h1>
                    <div className="social">
                        <div><SocialIcon network="twitter" style={{ height: 25, width: 25 }}/></div>
                        <div><SocialIcon network="pinterest" style={{ height: 25, width: 25 }}/></div>
                        <div><SocialIcon network="facebook" style={{ height: 25, width: 25 }}/></div>
                    </div>
                </div>
            
                <p className="published">Published November 19,2020</p>
                <img src="https://images.unsplash.com/photo-1557522517-fb9215fa35ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" className="postImage"></img>
                <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            
            <div className="BottomPage"><Footer/></div>
        </div>
    );
}

export default NewsScreen;