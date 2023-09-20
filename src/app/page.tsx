import Image from "next/image";
import Navbar from "../../components/Navbar";
import Middle from "../../components/Middle";

export default function Home() {
  return (
    <main className="flex w-[100%]  flex-col">
      <Navbar />
      <Middle />
    </main>
  );
}
