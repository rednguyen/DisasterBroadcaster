import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';



function App() {
    return (
      <div className="App">
        <div className="TopPage"><NavBar /></div>
        <div className = "Wrapper">
          <div className = "BottomPage"><Footer /></div>
        </div>
      </div>
    )
}

export default App;
