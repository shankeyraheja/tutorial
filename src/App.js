import logo from './logo.svg';
import './App.css';
import BasicTextFields from "./components/inputfield"
import CenteredGrid from "./components/layout"
import ButtonAppBar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import News from "./components/news"
import Contact from "./components/contact"
import Fetch from "./components/fetch"

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Home/>
      <About/>
      <News/>
      <Contact/>
      <Fetch/>
    </div>
  );
}

export default App;
