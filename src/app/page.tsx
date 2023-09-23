"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Middle1 from "../../components/Middle1";
import Middle2 from "../../components/Middle2";
import Middle3 from "../../components/Middle3";
import Middle4 from "../../components/Middle4";
import Middle5 from "../../components/Middle5";
import Middle6 from "../../components/Middle6";
import Middle7 from "../../components/Middle7";
import Middle8 from "../../components/Middle8";
import Middle9 from "../../components/Middle9";
import Middle10 from "../../components/Middle10";
import Sidebar from "../../tools/Sidebar";
import { useState } from "react";

export default function Home() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="flex relative  flex-col">
      <div className="sticky top-[0px]">
        <div
          style={{ top: !openNav ? -500 : 0, right: 0, position: "absolute" }}
          className={` tablet:block phone:block hidden absolute right-0 `}
        >
          <Sidebar />
        </div>
        <div className=" top-[0px]">
          <Navbar setOpenNav={setOpenNav} />
        </div>
      </div>
      <div className="-z-10">
        <Middle1 />
        <Middle2 />
        <Middle3 />
        <Middle4 />
        <Middle5 />
        <Middle6 />
        <Middle7 />
        <Middle8 />
        <Middle9 />
        <Middle10 />
      </div>
    </div>
  );
}
