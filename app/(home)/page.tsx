import Community from '@/components/home/Community';
import Hero from '@/components/home/Hero';
import Packages from '@/components/home/Packages';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

import React from 'react';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Community />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
