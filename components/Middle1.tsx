import React from "react";
import Image from "next/image";
import PLF from "../assets/plf.png";
import MWSG from "../assets/mwsg.png";
import GLOW from "../assets/glow.png";
import Line from "../tools/Line";
import Flare from "../assets/svg/Flare";

function Middle() {
  return (
    <div className="overflow-hidden">
      <div className="absolute top-[20px] right-[700px]">
        <div>
          <Flare />
        </div>
      </div>

      <div className="flex justify-end text-right mt-[50px] mr-[20px] font-extrabold text-3xl italic">
        Igniting a Revolution in HR Innovation
      </div>
      <div className="flex flex-wrap justify-evenly relative">
        <div className="mx-[40px] mt-[70px]">
          <div className="text-6xl font-extrabold leading-normal ">
            <p>getlinked Tech</p>
            <p>
              Hackaton <b className="text-[#D434FE]">1.0</b>
            </p>
          </div>
          <p className="max-w-[400px]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
        </div>
        <div className="main-container flex-shrink-1 justify-center">
          <div className=" image-container relative   ">
            <div className="hover:scale-[110%] ease-in-out duration-300">
              <Image
                // width={1086}
                // height={836}
                src={MWSG}
                alt="Picture of the author"
              />
            </div>
            <div className="animate-pulse absolute  ">
              <Image
                // width={1086}
                // height={836}
                src={GLOW}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
}

export default Middle;
