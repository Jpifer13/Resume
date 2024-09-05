import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
