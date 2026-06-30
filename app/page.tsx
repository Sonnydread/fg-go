import { AutoScrollCarousel } from "./landing/carousel";
import Hero from "./landing/herox";
import XxAboutUs from "./landing/xxaboutus";
import EcoCommitment from "./landing/ecoco";
import Footer from "./landing/footer";
import Faqs from "./landing/faq";
import ScrollZoomGallery from "./version1/scroll-zoom";
import Carousel from "./landing/carousel-compo";
import RevealText from "./landing/inversion-reveal";
import Hey from "./landing/hey";
import LottieCardFlow from "./landing/lootie-grid";
import Navbar from "./landing/navbar";
import Hogar from "./landing/hogar";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollZoomGallery />
      <XxAboutUs />
      <Carousel />
      <RevealText />
      <Hey />
         <Hogar />
      <LottieCardFlow />
      <Faqs />
      <AutoScrollCarousel />
      <EcoCommitment />
      <Footer />
    </>
  );
}
