import logo from './logo.svg';
import './App.css';
import BasicTextFields from "./components/inputfield"
import CenteredGrid from "./components/layout"
import ButtonAppBar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import News from "./components/news"
import Contact from "./components/contact"

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Home/>
      <About/>
      <News/>
      <Contact/>
    </div>
  );
}

export default App;
