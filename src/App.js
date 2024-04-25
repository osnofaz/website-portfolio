import React, { Suspense, useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Stream from './components/pages/Stream';
// import Scrollbar from 'react-smooth-scrollbar';
import { keepTheme } from './components/utils/themes';
import ScrollToTop from './components/ScrollToTop';


function App() {
  useEffect(() => {
    keepTheme();
})
  return (
      <>        
          <ScrollToTop />
          <Suspense fallback={null}>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/stream' element={<Stream />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </Router>
      </Suspense>

      
 </>
 );
}

export default App;
