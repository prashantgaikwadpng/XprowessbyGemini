// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Marquee from '../components/Marquee';
import Stats from '../components/home/Stats';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Process from '../components/home/Process';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Marquee />
      <Process />
      <Testimonials />
    </>
  );
};

export default Home;
