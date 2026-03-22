// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Marquee from '../components/Marquee';

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
    </>
  );
};

export default Home;
