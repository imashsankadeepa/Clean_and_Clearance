import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/Home';
import Services from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/Aboutus';
import OfficeCleaning from './pages/OfficeCleaning';
import HomeCleaning from './pages/HomeCleaning';
import SchoolCleaning from './pages/SchoolCleaning';
import './App.css'; // Global styles

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/office-cleaning" element={<OfficeCleaning />} />
        <Route path="/services/home-cleaning" element={<HomeCleaning />} />
        <Route path="/services/school-cleaning" element={<SchoolCleaning />} />
      </Routes>
    </Router>
  );
}

export default App;