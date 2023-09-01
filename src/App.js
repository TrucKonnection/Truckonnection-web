import React, { useState, useEffect, useRef } from 'react';
import logo from './assets/logo.jpg';
import './App.css';
import './css/styles.css'; // Import the CSS file
import Header from '../src/components/header';
import Main from '../src/components/main';
import Contact from '../src/components/contact';
import Footer from '../src/components/footer';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const servicesSectionRef = useRef(null);
  const [isServicesVisible, setServicesVisible] = useState(false);

  const handleScroll = () => {
    if (servicesSectionRef.current) {
      const servicesPosition = servicesSectionRef.current.getBoundingClientRect();
      setServicesVisible(servicesPosition.top <= window.innerHeight * 0.1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Show the header for 3 seconds
    const timeoutId = setTimeout(() => {
      setShowHeader(false);
    }, 3000);

    // Clean up the timeout when the component unmounts or the showHeader state changes
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App">
      {/* Show the header only if showHeader is true */}
      {showHeader ? (
        <header className={`App-header ${showHeader ? '' : 'hidden'}`}>
          <img src={logo} className="App-logo pulse" alt="logo" />
        </header>
      ) : (
        <div className="App">
          {/* Include your components */}
          <Header isServicesVisible={isServicesVisible} />
          <Main servicesSectionRef={servicesSectionRef} />
          <Contact />
          <Footer />
        </div>
      )
      }
    </div>
  );
}

export default App;
