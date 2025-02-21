import Image from "next/image";
import NavBar from "@/features/NavBar";
import Hero from "@/features/Services/Hero";
import Process from "@/features/Services/Process";
import Footer from "@/components/Footer";
import MyServices from "@/features/Services/myServices";

export default function Services() {
  return (
    <>
      <NavBar />
      <Hero />
      <Process />
      <MyServices />
      <Footer />
    </>
    // <div className={styles.page}>
      
    // </div>
  );
}
