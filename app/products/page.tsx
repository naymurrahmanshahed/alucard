import Products from '@/components/products/Products';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Products fromProductPage />
      </main>
      <FooterMini />
    </>
  );
};

export default ProductPage;
