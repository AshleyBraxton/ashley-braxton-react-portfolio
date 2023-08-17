// import { useState } from 'react';
import './App.css';
import Header from './assets/components/header';
import About from './assets/components/aboutMe';
import Footer from './assets/components/footer';
import Portfolio from './assets/components/portfolio';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Header />
    <div className='main-content'>
    {/* <About /> */}
    <Portfolio />
    </div>
    <div>
    <Footer />
    </div>
   </> 
  )
}

export default App
