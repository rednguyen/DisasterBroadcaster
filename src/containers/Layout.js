import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { default as StyledFooter } from '../components/Footer/Container/FooterContainer';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    // const childrenWithProps = React.Children.map(this.props.children, child => {
    //   React.cloneElement(child, { ...this.props });
    //   return child;
    // });

    return (
      <div className="Wrapper">
      <Layout className="layout">
        <Header>
          <div className="TopPage"><NavBar {...this.props}/></div>
        </Header>
        <Content {...this.props}>
        
        {/* <div>{childrenWithProps}</div> */}
        {/* <div>{React.cloneElement(this.props.children, {...this.props})}</div> */}
          <div>
              
              {this.props.children}
          </div>
        </Content>
        <Footer>
          <div class = "BottomPage"><StyledFooter /></div>
        </Footer>
      </Layout>
      </div>
    )
  }
}

export default withRouter(CustomLayout);