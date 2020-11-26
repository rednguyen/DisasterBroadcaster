import HomePage from "./pages/HomePage/HomePage";
import Guide from "./pages/Guide/Guide";
import About from "./pages/About/AboutUs";
import Earthquake from "./pages/Guide/Disasters/Earthquake";
import Wildfire from "./pages/Guide/Disasters/Wildfire";
import Volcano from "./pages/Guide/Disasters/Volcano";
import Flood from "./pages/Guide/Disasters/Flood";
import Tornado from "./pages/Guide/Disasters/Tornado";
import Hurricane from "./pages/Guide/Disasters/Hurricane";

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
          <Route path="/earthquake" component = {Earthquake} exact />
          <Route path="/wildfire" component = {Wildfire} exact />
          <Route path="/volcano" component = {Volcano} exact />
          <Route path="/flood" component = {Flood} exact />
          <Route path="/tornado" component = {Tornado} exact />
          <Route path="/hurricane" component = {Hurricane} exact />
        </switch> 
        </div>
      </Router>
    )
}

export default App;
