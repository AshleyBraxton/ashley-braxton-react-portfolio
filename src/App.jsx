import React, { useState } from 'react';
import './App.css';
import Header from './assets/components/header';
import About from './assets/components/aboutMe';
import Footer from './assets/components/footer';
import Portfolio from './assets/components/portfolio';
import Contact from './assets/components/contact';
import Resume from './assets/components/resume';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    
    <div>
      <Header />
      <main> 
    <div id='about-page'>
    <About/>
    </div> 
    <div style={{height: 100}}></div>
    <div id='portfolio-page'>
    <Portfolio/>
    </div>
    <div style={{height: 100}}></div>
    <div id='contact-page'>
    <Contact/>
    </div>
    <div style={{height: 100}}></div>
    <div id='resume-page'>
    <Resume/>
    </div>
      </main>
      <Footer />
    </div>
  
);
}

export default App;
