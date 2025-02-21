import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/features/NavBar";
import Hero from "@/features/Home/Hero";
import Intro from "@/features/Home/Intro";
import WhyWorkWithMe from "@/features/Home/WhyWorkWithMe";
import Testimonial from "@/features/Home/Testimonials";
import Services from "@/features/Home/Services";
import Experience from "@/features/Home/Experience";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Samples from "@/features/Home/samples";
import Blog from "@/features/Home/blog";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Intro />
      <WhyWorkWithMe />
      <Testimonial />
      <Services />
      <Experience />
      <Samples />
      <Blog />
      <ContactForm />
      <Footer />
    </>
    // <div className={styles.page}>
      
    // </div>
  );
}
