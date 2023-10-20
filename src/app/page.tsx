import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Knowledge from "@/components/Knowledge";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pl-10">
      {/* <Education />
      <Knowledge />
      <Footer /> */}
      {/* <Header/> */}
      <Hero title="Hello" description="Hello"/>
    </div>
  );
}
