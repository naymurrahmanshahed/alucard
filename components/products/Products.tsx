import SectionTitle from '../shared/SectionTitle';
import { data } from '@/data/products';
import ProductItem from './ProductItem';
import { productItem } from '@/types/productItem';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';

interface ProductsProps {
  fromProductPage?: boolean;
}

const Products: React.FC<ProductsProps> = ({ fromProductPage }) => {
  return (
    <section className='wrapper section-padding' id='products'>
      <SectionTitle
        subtitle='Products'
        title='Browse our beauty products'
        color='bg-orange'
      />

      {/* products */}

      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {/*multiple product goes here  */}
        {!fromProductPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .slice(0, 8)
            .map((item: productItem) => (
              <ProductItem key={item.id} item={item} />
            ))}
        {fromProductPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .map((item: productItem) => (
              <ProductItem key={item.id} item={item} />
            ))}
      </div>
      {!fromProductPage && (
        <div className='mt-20 flex justify-center'>
          <Link
            href={'/products'}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            View all products
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;
