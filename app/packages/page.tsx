import Packages from '@/components/home/Packages';
import FooterMini from '@/components/shared/FooterMini';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const PackagesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Packages fromPackagePage />
      </main>
      <FooterMini />
    </>
  );
};

export default PackagesPage;
