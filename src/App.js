import './App.css';
import About from "./components/About"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="wrap">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
