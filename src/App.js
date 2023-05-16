import './App.css';
import About from "./pages/About"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Portfolio from "./pages/Portfolio"
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';

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
