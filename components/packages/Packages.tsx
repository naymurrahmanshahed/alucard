'use client';

import HorizontalTab from '../ui/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';
import PackageItem from './PackageItem';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/Button';

import useFetch from '@/hooks/use-fetch';
import Loading from '../shared/loading';
import Error from '../shared/error';
import { beautyPackageType } from '@/types/packageItem';

interface PackagesProps {
  fromPackagePage?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ fromPackagePage }) => {
  const {
    data: beautyPackages,
    error,
    isLoading,
  } = useFetch('/api/beauty_packages');

  return (
    <section className='wrapper section-padding ' id='packages'>
      <SectionTitle
        title='Explore our beauty packages'
        subtitle='Packages'
        color='bg-red'
      />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error.message} />}

      {/* PACKAGES */}
      {beautyPackages && beautyPackages.length > 0 && (
        <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
          {/* Wellness */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {!fromPackagePage &&
              beautyPackages
                .filter(
                  (item: beautyPackageType) => item.category === 'Wellness'
                )
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .slice(0, 4)
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}

            {fromPackagePage &&
              beautyPackages
                .filter(
                  (item: beautyPackageType) => item.category === 'Wellness'
                )
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}
          </div>

          {/* Beauty */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {!fromPackagePage &&
              beautyPackages
                .filter((item: beautyPackageType) => item.category === 'Beauty')
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .slice(0, 4)
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}

            {fromPackagePage &&
              beautyPackages
                .filter((item: beautyPackageType) => item.category === 'Beauty')
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}
          </div>

          {/* Events */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {!fromPackagePage &&
              beautyPackages
                .filter((item: beautyPackageType) => item.category === 'Events')
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .slice(0, 4)
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}

            {fromPackagePage &&
              beautyPackages
                .filter((item: beautyPackageType) => item.category === 'Events')
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .map((item: beautyPackageType) => (
                  <PackageItem key={item._id} packageItem={item} />
                ))}
          </div>
        </HorizontalTab>
      )}

      {!fromPackagePage && beautyPackages && beautyPackages?.length > 0 && (
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
