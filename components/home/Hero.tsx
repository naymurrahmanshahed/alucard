import Image from 'next/image';
import React from 'react';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const plafairDisplay = Playfair_Display({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section className=' wrapper section-padding relative h-[calc(100vh-5rem)]'>
      <div className='grid-rows-8 grid  h-full w-full  gap-6'>
        {/* first row */}
        <div className='grid h-[5rem]  w-full grid-cols-[30%_auto] gap-20 '>
          <div className='h-full w-full overflow-hidden rounded-[0px_30px_0px_30px]'>
            <Image
              src='https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Crop woman in medical gloves removing cosmetic mask from face of female client in spa salon'
              width={640}
              height={360}
              className='h-full w-full object-cover'
              priority
            />
          </div>

          <div className='flex h-full w-full items-center '>
            <h2 className='headline-1 font-semibold uppercase '>
              Discover Your
            </h2>
          </div>
        </div>
        <hr className='border-grey' />
        {/* second row */}
        <div className='grid h-[5rem] w-full grid-cols-[25%_auto_50%] gap-20  '>
          <div className='flex h-full w-full items-center '>
            <h2
              className={cn(
                plafairDisplay.className,
                'headline-1 font-semibold lowercase '
              )}
            >
              Inner
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[30px_0px_60px_30px]'>
            <Image
              src='https://images.pexels.com/photos/14256889/pexels-photo-14256889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Girl in White Knit Cap Holding Yellow and White Snake'
              width={320}
              height={180}
              className='h-full w-full object-cover'
              priority
            />
          </div>
          <div className='h-full w-full '>
            <div className='flex h-full w-full items-center '>
              <h2 className='headline-1 font-semibold uppercase '>
                Goddess<span className='text-green'>.</span>
              </h2>
            </div>
          </div>
        </div>
        <hr className='border-grey' />
        {/* third row */}
        <div className='grid h-[5rem] w-full grid-cols-[40%_auto] gap-20 '>
          <div className='flex h-full w-full items-center  '>
            <h2 className='headline-1 flex items-center font-semibold uppercase '>
              Essence
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[0px_30px_0px_30px]'>
            <Image
              src='https://images.pexels.com/photos/4156299/pexels-photo-4156299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman in Bathtub With Water'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
              priority
            />
          </div>
        </div>
        <hr className='border-grey' />
        {/* fourth row */}
        <div className='grid h-[5rem] w-full  grid-cols-[35%_auto] gap-20'>
          <div className='h-full w-full overflow-hidden rounded-[30px_30px_30px_0px]'>
            <Image
              src='https://images.pexels.com/photos/17048909/pexels-photo-17048909/free-photo-of-photo-of-an-attractive-young-woman-with-tattoos-lying-on-a-blanket-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Photo of an Attractive Young Woman with Tattoos Lying on a Blanket in Nature'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
              priority
            />
          </div>

          <div className='flex h-full w-full items-center '>
            <h2 className='headline-1 font-semibold uppercase '>
              {' '}
              <span
                className={cn(
                  plafairDisplay.className,
                  'font-normal lowercase'
                )}
              >
                With
              </span>{' '}
              A
              <span
                className={cn(
                  plafairDisplay.className,
                  'font-normal lowercase text-red'
                )}
              >
                l
              </span>
              ucar
              <span
                className={cn(
                  plafairDisplay.className,
                  'font-normal lowercase text-red'
                )}
              >
                d
              </span>
              <span className='text-orange'>.</span>
            </h2>
          </div>
        </div>
        <hr className='border-grey' />
        {/* Packages button */}
        <Link
          href={'/#packages'}
          className='group absolute bottom-[10%] left-1/2 z-[1] flex h-32 w-32 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-dark/80 text-lg  uppercase text-light shadow-2xl shadow-dark/50 backdrop-blur-lg hover:shadow-red/50'
        >
          <p className='z-[3]'>Packages</p>

          {/* Filler 1*/}
          <span className='eoq absolute -top-1/2 bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-red  group-hover:top-0'></span>
          {/* Filler 2 */}
          <span className='eoq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-red  group-hover:top-1/2'></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
