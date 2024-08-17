import React, { Suspense, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Stream from './components/pages/Stream';
import ScrollToTop from './components/ScrollToTop';
import { keepTheme } from './components/utils/themes';


function App() {
  useEffect(() => {
    keepTheme();
})
  return (
    <Router>
      <Suspense fallback={null}> 
      <Navbar />      
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/stream' element={<Stream />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <ScrollToTop />
      </Suspense > 
    </Router>
 );
}

export default App;
