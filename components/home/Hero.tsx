import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const plafairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className=" wrapper section-padding h-[calc(100vh-5rem)] ">
      <div className="w-full h-full  grid grid-rows-8  gap-5 ">
        {/* second row */}
        <div className="w-full h-[5rem]  grid grid-cols-[30%_auto] gap-20 ">
          <div className="w-full h-full rounded-[0px_30px_0px_30px] overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Crop woman in medical gloves removing cosmetic mask from face of female client in spa salon"
              width={640}
              height={360}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-full h-full flex items-center ">
            <h2 className="text-8xl uppercase font-semibold ">Discover Your</h2>
          </div>
        </div>
        <hr className="border-grey" />
        {/* third row */}
        <div className="w-full h-[5rem] grid grid-cols-[25%_auto_50%] gap-20  ">
          <div className="w-full h-full flex items-center ">
            <h2
              className={cn(
                plafairDisplay.className,
                "font-semibold lowercase text-8xl "
              )}
            >
              Inner
            </h2>
          </div>
          <div className="w-full h-full rounded-[30px_0px_60px_30px] overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/14256889/pexels-photo-14256889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Girl in White Knit Cap Holding Yellow and White Snake"
              width={320}
              height={180}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full h-full ">
            <div className="w-full h-full flex items-center ">
              <h2 className="text-8xl uppercase font-semibold ">
                Goddess<span className="text-green">.</span>
              </h2>
            </div>
          </div>
        </div>
        <hr className="border-grey" />
        {/* fourth row */}
        <div className="w-full h-[5rem] grid grid-cols-[40%_auto] gap-20 ">
          <div className="w-full h-full flex items-center  ">
            <h2 className="text-8xl uppercase font-semibold flex items-center ">
              Essence
            </h2>
          </div>
          <div className="w-full h-full rounded-[0px_30px_0px_30px] overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/4156299/pexels-photo-4156299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman in Bathtub With Water"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <hr className="border-grey" />
        {/* fifth row */}
        <div className="w-full h-[5rem] gap-20  grid grid-cols-[35%_auto]">
          <div className="w-full h-full rounded-[30px_30px_30px_0px] overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/17048909/pexels-photo-17048909/free-photo-of-photo-of-an-attractive-young-woman-with-tattoos-lying-on-a-blanket-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Photo of an Attractive Young Woman with Tattoos Lying on a Blanket in Nature"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-full h-full flex items-center ">
            <h2 className="text-8xl uppercase font-semibold ">
              {" "}
              <span
                className={cn(
                  plafairDisplay.className,
                  "font-normal lowercase"
                )}
              >
                With
              </span>{" "}
              A
              <span
                className={cn(
                  plafairDisplay.className,
                  "font-normal lowercase text-red"
                )}
              >
                l
              </span>
              ucar
              <span
                className={cn(
                  plafairDisplay.className,
                  "font-normal lowercase text-red"
                )}
              >
                d
              </span>
              <span className="text-orange">.</span>
            </h2>
          </div>
        </div>
        <hr className="border-grey" />
      </div>
    </section>
  );
};

export default Hero;
