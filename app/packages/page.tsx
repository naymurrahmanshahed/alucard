import Packages from '@/components/home/packages/Packages';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';
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
