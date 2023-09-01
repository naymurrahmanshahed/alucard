import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { formatCurrency } from '@/utils/formatCurrency';
import { packageItem } from '@/types/packageItem';
interface PackageItemProps {
  packageItem: packageItem;
}

const PackageItem: React.FC<PackageItemProps> = ({ packageItem }) => {
  return (
    <div className='flex w-full flex-col gap-5'>
      <Link
        href={`/packages/${packageItem.id}`}
        className='border-gray group h-[15rem] w-full overflow-hidden rounded-xl border'
      >
        <Image
          src={packageItem.image}
          alt={packageItem.title}
          height={640}
          width={640}
          className=' eoq
         h-full
         w-full object-cover brightness-90 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>
      <div className='eoq border-gray bg-gray/25 hover:bg-gray/50 flex w-full flex-col gap-2.5 rounded-xl border p-5'>
        <span className='text-xs font-bold uppercase tracking-[0.375em] text-pink'>
          {packageItem.category}
        </span>
        <h4 className='text-xl'>{packageItem.title}</h4>
        <hr />
        <p className='text-dark/75'>
          {packageItem.description.substring(0, 50)}...
        </p>
        <div className='flex items-center justify-between gap-2.5'>
          <p>{formatCurrency(packageItem.price, 'en-GB', 'BDT')}</p>
          <Link
            className={buttonVariants({ variant: 'rose' })}
            href={`/packages/${packageItem.id}`}
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
