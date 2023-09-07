import { data } from '@/data/products';
import React from 'react';
import { productItem } from '@/types/productItem';
import Navbar from '@/components/shared/navbar/Navbar';
import FooterMini from '@/components/shared/footer/FooterMini';
import ProductDetailsSection from '@/components/productDetails/ProductDetailsSection';
const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const product = data.find((item: productItem) => item.id === +params.id);
  if (!product) {
    return null;
  }
  return (
    <>
      <Navbar />
      <main>
        <ProductDetailsSection product={product} />
      </main>
      <FooterMini />
    </>
  );
};

export default ProductDetailsPage;
