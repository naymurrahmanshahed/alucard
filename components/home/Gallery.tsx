import { cn } from '@/lib/utils';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import { data } from '@/data/gallery';
import { galleryType } from '@/types/gallery';

const Gallery = () => {
  return (
    <section className='min-h-screen bg-dark text-light'>
      <div className='wrapper section-padding h-full  w-full'>
        <SectionTitle
          subtitle='Gallery'
          title='A visual glimpse of our beauties'
          color='bg-violet'
        />

        {/* grid parent */}
        <div className='gallery-grid-parent h-screen w-full gap-10 overflow-hidden'>
          {/* grid items */}
          {data.map((item: galleryType) => (
            <div
              key={item.id}
              className={cn(
                item.class,
                ' eoq group h-full w-full overflow-hidden border-[10px] border-green/10 shadow-2xl hover:border-green/20 '
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                priority
                className='eoq h-full w-full object-cover brightness-75 grayscale group-hover:brightness-100 group-hover:grayscale-0
                '
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
