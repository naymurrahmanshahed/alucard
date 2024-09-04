import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { formatCurrency } from '@/utils/formatCurrency';
import { beautyPackageType } from '@/types/packageItem';
import React from 'react';
interface PackageItemProps {
  packageItem: beautyPackageType;
}

const PackageItem: React.FC<PackageItemProps> = ({ packageItem }) => {
  return (
    <div className='flex w-full flex-col gap-5'>
      <Link
        href={`/packages/${packageItem._id}`}
        className='group h-[15rem] w-full overflow-hidden rounded-xl border border-gray'
      >
        <Image
          src={packageItem.images[0]}
          alt={packageItem.title}
          height={640}
          width={640}
          className=' eoq h-full w-full object-cover brightness-90 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>
      <div className='eoq flex w-full flex-col gap-2.5 rounded-xl border border-gray bg-gray/25 p-5 hover:bg-gray/50'>
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
            href={`/beauty/${packageItem._id}`}
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
