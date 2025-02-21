import Image from "next/image";
import NavBar from "@/features/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/features/Blog/Hero";
import Blog from "@/features/Blog/Blog";
import Intro from "@/features/Blog/Intro";
import Contents from "@/features/Blog/Contents";
import BlogView from "@/features/Blog/ViewBlog";

export default function Testimonial() {
  return (
    <>
      <NavBar />
      <BlogView />
      <Footer />
    </>
  );
}
