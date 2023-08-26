'use client';

import { data } from '@/data/packages';
import PackageItem from '../home/PackageItem';
import SectionTitle from '../shared/SectionTitle';
import HorizontalTab from '../ui/HorizontalTab';
import { useState } from 'react';
import { packageItem } from '@/types/packageItem';

const AllPackages = () => {
  const [shouldOpenTab, setShouldOpenTab] = useState<number>(0);
  const tab = [...new Set(data?.map((masterCat) => masterCat.masterCategory))];
  return (
    <section className='section-padding wrapper min-h-screen'>
      <SectionTitle title='Explore our beauty packages' subtitle='Packages' />

      <HorizontalTab
        tabs={tab}
        shouldOpenTab={shouldOpenTab}
        setShouldOpenTab={setShouldOpenTab}
      >
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter(
              (item: packageItem) => item.masterCategory === tab[shouldOpenTab]
            )
            .sort((a: packageItem, b: packageItem) => a.price - b.price)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter(
              (item: packageItem) => item.masterCategory === tab[shouldOpenTab]
            )
            .sort((a: packageItem, b: packageItem) => a.price - b.price)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter(
              (item: packageItem) => item.masterCategory === tab[shouldOpenTab]
            )
            .sort((a: packageItem, b: packageItem) => a.price - b.price)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  );
};

export default AllPackages;
