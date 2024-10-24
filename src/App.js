import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Mid from './components/MId';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Pro1 from './components/Pro1';
import Pro2 from './components/Pro2';
import Pro3 from './components/Pro3';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Mid/>
      <About/>
      <Skills/>
      {/* <Projects/> */}
      <Pro1/>
      <Pro2/>
      <Pro3/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
