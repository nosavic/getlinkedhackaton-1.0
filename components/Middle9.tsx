import React from "react";
import Image from "next/image";
import ELL from "../assets/Ellipse.png";
import LOC from "../assets/LOC.png";
import VEC from "../assets/VEC.png";
import Line2 from "../tools/Line2";
import Questions from "../tools/Questions";
import Button from "../tools/Button";

function Middle5() {
  return (
    <main className="mt-[100px] mx-[40px] mb-[60px]">
      <div className="justify-evenly flex-wrap  flex phone:flex-col tablet:flex-col items-center     ">
        <div className=" phone:text-center max-w-[535px]">
          <p className=" leading-normal text-4xl font-extrabold custom:w-[300px]">
            Privacy Policy and
            <b className="text-[#D434FE]"> Terms</b>
          </p>
          <p className="mt-[10px]"> Privacy Policy and Terms</p>
          <div className="leading-[26px]  mt-[40px] mb-[20px]  ">
            <p className="">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className=" pt-[40px] pb-[100px] px-[30px]  rounded-[10px] border border-fuchsia-500">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="  mt-[30px]">
              <p className="text-[#D434FE] text-2xl font-extrabold pb-[10px]">
                Licensing Policy
              </p>
              <p>Here are terms of our Standard License:</p>
            </div>
            <div className="flex flex-col gap-[10px] mt-[20px] ">
              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
              <p>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
            <div className="mt-[20px]">
              <Button name={"Read More"} />
            </div>
          </div>
        </div>
        <div className="relative items-center justify-center flex  max-w-[768px] mb-[30px] phone:mt-[100px] ">
          <div className="hover:scale-[105%] ease-in-out duration-300 ">
            <Image src={LOC} alt="Picture of the author" />
          </div>
          <div className="absolute -z-10 phone:top-[-50px] tablet:top-[60px] flex top-[-80px] phone:gap-0 gap-[100px]">
            <div className=" ">
              <Image src={VEC} alt="Picture of the author" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Middle5;
