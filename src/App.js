
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Hero from './Components/Banner/Hero';
import Shipment from './Components/Shipment/Shipment';
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Counter from './Components/Counter/Counter';
import Companies from './Components/Companies/Companies';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Shipment />
      <About />
      <Service />
      <Counter />
      <Companies />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
