import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Stack from './pages/Stack';
import Skills from './pages/Skills';
import Timeline from './pages/Timeline';
import Projects from './pages/Projects';
import Hackathons from './pages/Hackathons';
import MiniGame from './pages/MiniGame';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tech-stack" element={<Stack />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/journey" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/puzzle" element={<MiniGame />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
