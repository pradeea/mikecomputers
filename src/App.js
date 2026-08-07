import './App.css';
import './styles/mc.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import Services from './pages/Services';
import About from './pages/About';

import { BrowserRouter , Routes, Route } from 'react-router';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
           <Route path="/Certifications" element={<Certifications/>} />
            <Route path="/Services" element={<Services/>} />
             <Route path="/About" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
