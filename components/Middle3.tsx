import React from "react";
import Image from "next/image";
import SIT from "../assets/sit.png";
import ELL from "../assets/Ellipse.png";
import Line from "../tools/Line";

function Middle3() {
  return (
    <main>
      <div className="mt-[50px] mx-[40px]">
        <div className="justify-evenly flex  flex-wrap-reverse items-center     ">
          <div className=" phone:text-center max-w-[535px]">
            <p className="text-4xl font-extrabold custom:w-[200px]">
              Rules and
              <b className="text-[#D434FE]"> Guidelines</b>
            </p>
            <p className="leading-10 ">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
          <div className="relative items-center justify-center flex  max-w-[768px] mb-[30px] ">
            <div className="hover:scale-[110%] ease-in-out duration-300">
              <Image
                width={600}
                height={600}
                src={SIT}
                alt="Picture of the author"
              />
            </div>
            <div className="absolute right-[110px] top-[90px] -z-10 phone:right-[80px] phone:top-[50px] phone:w-[100px] phone:h-[100px] ">
              <div className="animate-bounce">
                <Image
                  width={150}
                  height={150}
                  src={ELL}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
    </main>
  );
}

export default Middle3;
