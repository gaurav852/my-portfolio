import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="Main">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/exp" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
