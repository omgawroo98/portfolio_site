import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
  return (
    <Router basename="/omgawroo98/omgawroo98.github.io">
      <Navbar /> {/* ← Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;