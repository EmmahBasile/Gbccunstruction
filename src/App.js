
import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Services from './Services';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './Projects';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
       <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/product" element={<Products/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          
       </Routes>
       <Footer/>
    </Router>
      
    </div>
  );
}

export default App;
