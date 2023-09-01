import Image from 'next/image';
import Link from 'next/link';

const Community = () => {
  return (
    <section>
      <div className=' wrapper section-padding relative flex h-full w-full items-center justify-center '>
        {/* main box */}
        <div className='relative h-[350px]  w-[350px] bg-gray'>
          {/* left box */}
          <div className='absolute -left-[25%] -top-[15%] z-[2] h-[280px] w-[200px] overflow-hidden rounded-tl-[50px] '>
            <Image
              src='https://images.pexels.com/photos/14008893/pexels-photo-14008893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Young Woman with Pink Eye Makeup'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* mid box */}
          <div className='absolute left-[50%] top-[50%]  z-[3] h-[280px] w-[225px] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-2xl shadow-dark/50'>
            <Image
              src='https://images.pexels.com/photos/2605198/pexels-photo-2605198.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
              alt='Woman Wearing Black Top'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* right box */}
          <div className='absolute -bottom-[15%] -right-[25%]  z-[2] h-[280px] w-[200px] overflow-hidden rounded-br-[50px]'>
            <Image
              src='https://images.pexels.com/photos/2843035/pexels-photo-2843035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Photo of Woman in Black Long-sleeved Dress Posing With Her Eyes Closed In Front of Black Background'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* upper right text */}
          <h2 className='headline-1 absolute -top-[18%] left-[36%] z-[2] whitespace-nowrap font-semibold uppercase '>
            Join Alucard
          </h2>

          {/* bottom left text */}
          <h2 className='headline-1 absolute -bottom-[18%] right-[40%] z-[2] font-semibold uppercase '>
            Community
          </h2>
        </div>

        {/* join button */}
        {/* <Link
          href={'/'}
          className='absolute bottom-10 right-10 z-[1] flex h-32 w-32 items-center justify-center rounded-full bg-red text-lg uppercase text-light '
        >
          Join Now
        </Link> */}
        <Link
          href={'/#packages'}
          className='group absolute bottom-10 right-10 z-[1] flex h-32 w-32 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-dark/80 text-lg  uppercase text-light shadow-2xl shadow-dark/50 backdrop-blur-lg hover:shadow-red/50'
        >
          <p className='z-[3]'>Join Now</p>

          {/* Filler 1*/}
          <span className='eoq absolute -top-1/2 bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-red  group-hover:top-0'></span>
          {/* Filler 2 */}
          <span className='eoq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-red  group-hover:top-1/2'></span>
        </Link>
      </div>
    </section>
  );
};

export default Community;
