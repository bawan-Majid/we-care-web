import React from 'react';
import './styles/main.css';
import Navbar from './navbar.js';
import Connect from './connect.js';
import Information from './information.js';
import AboutUs from './aboutUs.js';
import Footer from './footer.js';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Connect></Connect>
      <Information></Information>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
