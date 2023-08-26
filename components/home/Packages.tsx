'use client';
import { data } from '@/data/packages';
import HorizontalTab from '../ui/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';
import PackageItem from './PackageItem';
import { useState } from 'react';

const Packages = () => {
  const [shouldOpenTab, setShouldOpenTab] = useState<number>(0);
  const tab = [...new Set(data?.map((masterCat) => masterCat.masterCategory))];

  return (
    <section className='wrapper section-padding ' id='packages'>
      <SectionTitle title='Explore our beauty packages' subtitle='Packages' />

      <HorizontalTab
        tabs={tab}
        shouldOpenTab={shouldOpenTab}
        setShouldOpenTab={setShouldOpenTab}
      >
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === tab[shouldOpenTab])
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === tab[shouldOpenTab])
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === tab[shouldOpenTab])
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
