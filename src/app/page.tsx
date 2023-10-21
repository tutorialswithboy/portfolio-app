import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeHero from "@/components/HomeHero";
import Knowledge from "@/components/Knowledge";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="p-10">
        <HomeHero />
        <div className="md:grid md:grid-cols-5 pb-10 gap-10">
          <div className="col-span-3">
            <Education />
          </div>
          <div className="col-span-2">
            <Knowledge />
          </div>
        </div>
      H</div>
    </div>
  );
}
