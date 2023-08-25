import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="  wrapper section-padding h-[calc(100vh-5rem)] ">
      <div className="w-full h-full  grid grid-rows-8  gap-5 ">
        {/* second row */}
        <div className="w-full h-[5rem]  grid grid-cols-[30%_auto] gap-20 ">
          <div className="w-full h-full rounded-[0px_30px_0px_30px] overflow-hidden">
            <Image
              src={
                "https://images.pexels.com/photos/5581778/pexels-photo-5581778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={640}
              height={360}
              className="w-full h-full object-cover"
              alt={"Person touching an Ornament in a Ceramic Figurine"}
            />
          </div>

          <div className="w-full h-full flex items-center ">
            <h2 className="text-6xl uppercase font-semibold ">
              Lorem ipsum ipsum
            </h2>
          </div>
        </div>
        <hr className="h-px" />
        {/* third row */}
        <div className="w-full h-[6rem] grid grid-cols-[25%_auto_50%] gap-20  ">
          <div className="w-full h-full flex items-center ">
            <h2 className="text-6xl uppercase font-semibold ">Lorems</h2>
          </div>
          <div className="w-full h-full rounded-[30px_0px_60px_30px] overflow-hidden">
            <Image
              src={
                "https://images.pexels.com/photos/5581778/pexels-photo-5581778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={320}
              height={180}
              className="w-full h-full object-cover"
              alt={"Person touching an Ornament in a Ceramic Figurine"}
            />
          </div>
          <div className="w-full h-full ">
            <div className="w-full h-full flex items-center ">
              <h2 className="text-6xl uppercase font-semibold ">
                Lorems lorems
              </h2>
            </div>
          </div>
        </div>
        <hr className="h-px" />
        {/* fourth row */}
        <div className="w-full h-[5rem] grid grid-cols-[40%_auto] gap-20 ">
          <div className="w-full h-full flex items-center  ">
            <h2 className="text-6xl uppercase font-semibold flex items-center ">
              Lorems lorems
            </h2>
          </div>
          <div className="w-full h-full rounded-[0px_30px_0px_30px] overflow-hidden">
            <Image
              src={
                "https://images.pexels.com/photos/5581778/pexels-photo-5581778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={1280}
              height={720}
              className="w-full h-full object-cover"
              alt={"Person touching an Ornament in a Ceramic Figurine"}
            />
          </div>
        </div>
        <hr className="h-px" />
        {/* fifth row */}
        <div className="w-full h-[5rem] gap-20  grid grid-cols-[35%_auto]">
          <div className="w-full h-full rounded-[30px_30px_30px_0px] overflow-hidden">
            <Image
              src={
                "https://images.pexels.com/photos/5581778/pexels-photo-5581778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={1280}
              height={720}
              className="w-full h-full object-cover"
              alt={"Person touching an Ornament in a Ceramic Figurine"}
            />
          </div>

          <div className="w-full h-full flex items-center ">
            <h2 className="text-6xl uppercase font-semibold ">Lorems Lorems</h2>
          </div>
        </div>
        <hr className="h-px" />
      </div>
    </section>
  );
};

export default Hero;
