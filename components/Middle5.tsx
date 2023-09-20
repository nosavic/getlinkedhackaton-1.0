import React from "react";
import Image from "next/image";
import ELL from "../assets/Ellipse.png";
import QMA from "../assets/qmark.png";
import CAS from "../assets/casual.png";

function Middle5() {
  return (
    <main className="mt-[150px] mx-[40px]">
      <div className="justify-evenly flex  flex-wrap-reverse items-center     ">
        <div className=" phone:text-center max-w-[535px]">
          <p className="text-4xl font-extrabold custom:w-[300px]">
            Frequently Asked
            <b className="text-[#D434FE]"> Question</b>
          </p>
          <div className="leading-[26px] h-[700px] mt-[40px]  ">
            <p className="pb-[30px]">
              <b className="text-[#D434FE]">Innovation and Creativity: </b>
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
          </div>
        </div>
        <div className="relative items-center justify-center flex  max-w-[768px] mb-[30px] phone:mt-[100px] ">
          <div className="hover:scale-[110%] ease-in-out duration-300 ">
            <Image
              width={600}
              height={600}
              src={CAS}
              alt="Picture of the author"
            />
          </div>
          <div className="absolute -z-10 phone:top-[-30px] flex top-[-80px] phone:gap-0 gap-[100px]">
            <div className="   phone:mt-[20px] mt-[60px]  phone:w-[100px] phone:h-[100px] mark ">
              <div className="">
                <Image
                  width={40}
                  height={150}
                  src={QMA}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="  phone:mt-[-50px]   phone:w-[100px] phone:h-[100px] mark ">
              <div className="">
                <Image
                  width={60}
                  height={150}
                  src={QMA}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className=" phone:mt-[-10px] mt-[50px] phone:w-[100px] phone:h-[100px] mark ">
              <div className="">
                <Image
                  width={40}
                  height={150}
                  src={QMA}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Middle5;
