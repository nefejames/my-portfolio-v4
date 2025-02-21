import Image from "next/image";
import NavBar from "@/features/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/features/Testimonials/Hero";
import ContactForm from "@/components/ContactForm";
import Sections from "@/features/Testimonials/Sections";

export default function Testimonial() {
  return (
    <>
      <NavBar />
      <Hero />
      <Sections />
      <ContactForm />
      <Footer />
    </>
    // <div className={styles.page}>
      
    // </div>
  );
}
