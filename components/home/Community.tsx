const Community = () => {
  return (
    <section>
      <div className=' wrapper section-padding flex h-full w-full items-center justify-center '>
        {/* main box */}
        <div className='bg-gray relative  h-[350px] w-[350px]'>
          {/* left box */}
          <div className='absolute -left-[25%] -top-[15%] z-[2] h-[280px] w-[200px] overflow-hidden rounded-tl-[50px] '></div>
          {/* mid box */}
          <div className='absolute left-[50%] top-[50%]  z-[3] h-[280px] w-[250px] -translate-x-1/2 -translate-y-1/2 overflow-hidden '></div>
          {/* right box */}
          <div className='absolute -bottom-[15%] -right-[25%]  z-[2] h-[280px] w-[200px] overflow-hidden rounded-br-[50px]'></div>
        </div>
      </div>
    </section>
  );
};

export default Community;
