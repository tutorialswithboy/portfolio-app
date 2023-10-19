import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Knowledge from "@/components/Knowledge";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pl-10">
      <Education />
      <Knowledge />
      <Footer />
      <Header/>
    </div>
  );
}
