import HomePage from "./pages/HomePage/HomePage";
import Guide from "./pages/Guide/GuideBody";
import About from "./pages/About/AboutUs";

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
        </switch> 
        </div>
      </Router>
    )
}

export default App;
