import HomePage from "./pages/HomePage/HomePage";
import Guide from "./pages/Guide/Guide";
import About from "./pages/About/AboutUs";
import Post from "./pages/Post/Post";

import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

function App() {
    return (
      <Router> 
        <div className="App">
        <switch>
          <Route path="/" component = {HomePage} exact />  
          <Route path="/guide" component = {Guide} exact />
          <Route path="/about" component = {About} exact />
          <Route path="/post" component = {Post} exact />     
        </switch> 
        </div>
      </Router>
    )
}

export default App;
