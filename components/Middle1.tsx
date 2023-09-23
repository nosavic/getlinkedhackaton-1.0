import React from "react";
import Image from "next/image";
import zero from "../assets/zero.png";
import MWSG from "../assets/mwsg.png";
import GLOW from "../assets/glow.png";
import spark from "../assets/spark.png";
import chain from "../assets/chain.png";
import Line from "../tools/Line";
import Flare from "../tools/Flare";
import { clash, mont } from "@/app/layout";
import Button from "../tools/Button";

function Middle() {
  return (
    <div className="overflow-hidden">
      <div className="">
        <div className=" absolute ml-[-500px] mt-[-300px] -z-10">
          <Flare />
        </div>
      </div>

      <div
        className={`flex justify-end text-right mt-[50px] mr-[20px] font-extrabold text-3xl italic phone:text-2xl ${mont.className} `}
      >
        Igniting a Revolution in HR Innovation
      </div>
      <div className="flex flex-wrap justify-evenly relative">
        <div className="mx-[40px] mt-[70px] flex flex-col gap-[30px]">
          <div
            className={` ${clash.className} text-6xl phone:text-4xl font-extrabold leading-normal `}
          >
            <p>getlinked Tech</p>
            <div className="flex  items-center ">
              Hackaton <b className="text-[#D434FE] "> 1.0</b>
              <div className="flex phone:hidden">
                <div className="">
                  <Image
                    // width={10}
                    // height={10}
                    src={chain}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <Image
                    // width={10}
                    // height={10}
                    src={spark}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="max-w-[400px]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button name={"Register"} />
          <div className="mb-[60px]">
            <Image
              // width={1086}
              // height={836}
              src={zero}
              alt="Picture of the author"
            />
          </div>
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
