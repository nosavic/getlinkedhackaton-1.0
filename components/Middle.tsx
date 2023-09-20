import React from "react";
import Image from "next/image";
import PLF from "../assets/plf.png";
import MWSG from "../assets/mwsg.png";
import GLOW from "../assets/glow.png";
import Line from "../tools/line";

function Middle() {
  return (
    <div className="">
      <div className="absolute top-[-100px] left-[-300px] flare mh">
        <Image
          width={1086}
          height={836}
          src={PLF}
          alt="Picture of the author"
        />
      </div>

      <div className="flex justify-end mt-[50px] mr-[20px] font-extrabold text-3xl italic">
        Igniting a Revolution in HR Innovation
      </div>
      <div className="flex flex-wrap justify-between relative">
        <div className="mx-[40px] mt-[340px]">
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
        <div className="">
          <Image
            // width={1086}
            // height={836}
            src={MWSG}
            alt="Picture of the author"
          />
        </div>
        <div className="absolute right-0 hover:animate-pulse">
          <Image
            // width={1086}
            // height={836}
            src={GLOW}
            alt="Picture of the author"
          />
        </div>
      </div>
      <Line />
    </div>
  );
}

export default Middle;
