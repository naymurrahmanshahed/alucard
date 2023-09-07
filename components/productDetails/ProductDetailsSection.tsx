import { productItem } from '@/types/productItem';

interface ProductDetailsProps {
  product: productItem;
}

const ProductDetailsSection: React.FC<ProductDetailsProps> = ({ product }) => {
  return <section className='wrapper section-padding'>{product.title}</section>;
};

export default ProductDetailsSection;
