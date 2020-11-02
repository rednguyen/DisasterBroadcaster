import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';
import Tsunami from "./Figure.jpg"


function App() {
    return (
      <div className="App">
        <div className="TopPage"><NavBar /></div>
        <div className = "body">
          <img  src={Tsunami} height="1000" width="1000"/>
        </div>
        <div className = "Wrapper">
          <div className = "BottomPage"><Footer /></div>
        </div>
      </div>
    )
}

export default App;
