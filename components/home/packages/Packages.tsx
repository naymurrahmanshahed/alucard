'use client';
import { data } from '@/data/packages';
import HorizontalTab from '../../ui/HorizontalTab';
import SectionTitle from '../../shared/SectionTitle';
import PackageItem from './PackageItem';
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../../ui/Button';
import { packageItem } from '@/types/packageItem';

interface PackagesProps {
  fromPackagePage?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ fromPackagePage }) => {
  const [shouldOpenTab, setShouldOpenTab] = useState<number>(0);
  const tab = [...new Set(data?.map((masterCat) => masterCat.masterCategory))];

  return (
    <section className='wrapper section-padding ' id='packages'>
      <SectionTitle
        title='Explore our beauty packages'
        subtitle='Packages'
        color='bg-red'
      />

      <HorizontalTab
        tabs={tab}
        shouldOpenTab={shouldOpenTab}
        setShouldOpenTab={setShouldOpenTab}
      >
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              .filter(
                (item: packageItem) =>
                  item.masterCategory === tab[shouldOpenTab]
              )
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
          {fromPackagePage &&
            data
              .filter(
                (item: packageItem) =>
                  item.masterCategory === tab[shouldOpenTab]
              )
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              .filter(
                (item: packageItem) =>
                  item.masterCategory === tab[shouldOpenTab]
              )
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
          {fromPackagePage &&
            data
              .filter(
                (item: packageItem) =>
                  item.masterCategory === tab[shouldOpenTab]
              )
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              .filter(
                (item: packageItem) =>
                  item.masterCategory === tab[shouldOpenTab]
              )
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
          {fromPackagePage &&
            data
              .filter(
                (item: packageItem) =>
                  item.masterCategory === tab[shouldOpenTab]
              )
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
      </HorizontalTab>
      {!fromPackagePage && (
        <div className='mt-20 flex justify-center'>
          <Link
            href={'/packages'}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            View all packages
          </Link>
        </div>
      )}
    </section>
  );
};

export default Packages;
