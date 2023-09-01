import Image from 'next/image';

const CommunityGathered = () => {
  return (
    <section className='section-padding-2 min-h-screen bg-dark'>
      <div className=' wrapper flex h-full w-full items-center justify-center '>
        <div className='relative  grid h-[800px] w-[800px] grid-cols-10 '>
          {/* block */}
          {Array.from({ length: 100 })
            .fill('')
            .map((_, index) => (
              // outer block
              <div
                key={index}
                className=' group z-[3] h-full w-full opacity-50'
              >
                <div className='eoq invisible h-full w-full bg-red group-hover:visible group-hover:opacity-100'></div>
              </div>
            ))}

          {/* overlay */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] h-full w-full bg-red/10'></div>

          {/* image */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[1] h-full w-full overflow-hidden'>
            <Image
              src='https://images.pexels.com/photos/5581787/pexels-photo-5581787.jpeg '
              alt='Graceful Woman with her Arms Raised Underwater'
              width={1280}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* upper left text */}
          <div className='absolute left-0 top-[10%] z-[3] w-[50%] text-5xl font-semibold uppercase text-light'>
            {`Join now to grab the`}{' '}
            <span className='text-orange'>{'Alucard Beauty Pass'}</span>{' '}
            {`for all services at once!`}
          </div>

          {/* bottom right text */}
          <div className='absolute bottom-[10%] right-0 z-[3] w-[50%] text-right text-5xl font-semibold uppercase text-light'>
            {`3-month subscription,`} <span className='text-orange'>$300</span>.{' '}
            {`Limited time – join us today!`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGathered;
