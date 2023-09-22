import Image from "next/image";
import Navbar from "../../components/Navbar";
import Middle1 from "../../components/Middle1";
import Middle2 from "../../components/Middle2";
import Middle3 from "../../components/Middle3";
import Middle4 from "../../components/Middle4";
import Middle5 from "../../components/Middle5";
import Middle6 from "../../components/Middle6";
import Middle7 from "../../components/Middle7";

export default function Home() {
  return (
    <div>
      <main className="flex w-[100%]  flex-col">
        <Navbar />
        <Middle1 />
        <Middle2 />
        <Middle3 />
        <Middle4 />
        <Middle5 />
        <Middle6 />
        <Middle7 />
      </main>
    </div>
  );
}
