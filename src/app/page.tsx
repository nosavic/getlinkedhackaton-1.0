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

export default function Home() {


  return (
    <main className="flex w-[100%]   flex-col">
      <div className="sticky top-0">
        <Sidebar />
        <Navbar />
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
    </main>
  );
}
