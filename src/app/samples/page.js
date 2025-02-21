import Image from "next/image";
import NavBar from "@/features/NavBar";
import Hero from "@/features/Samples/Hero";
import Footer from "@/components/Footer";
import MySamples from "@/features/Samples/mySamples";
import ContactForm from "@/components/ContactForm";

export default function Samples() {
  return (
    <>
      <NavBar />
      <Hero />
      <MySamples />
      <ContactForm />
      <Footer />
    </>
  );
}
