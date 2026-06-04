import { AutoScrollCarousel } from "./landing/carousel";
// import XxHero from "./landing/xxhero";
import Hero from "./landing/herox";
// import AboutUs from "./landing/aboutus";
import XxAboutUs from "./landing/xxaboutus";
// import EcoFriendly from "./landing/eco";
// import EcoCommitment from "./landing/ecoco";
// import CoreServices from "./landing/xmix";
// import ServicesSection from "./landing/mix";
// import ContactSection from "./landing/contact";
import FinalCTAContact from "./landing/xkontac";
// import Velocidad from "./landing/velocidad";
// import WatercolorGPT from "./landing/test1";
import Faqs from "./landing/faq";
// import WatercolorGrok from "./landing/imagen-grok";
import ScrollZoomGallery from "./version1/scroll-zoom";
import Carousel from "./landing/carousel-compo";
import RevealText from "./landing/inversion-reveal";
import Hey from "./landing/hey";
import ServicesGrid from "./landing/service-grid"
import LottieCardFlow from "./landing/lootie-grid";
// import LottieShowcase from "./landing/lootie-comp";
import Navbar from "./landing/navbar";


export default function Page() {
  return (
    <>
      <Navbar />
  
      <Hero />
   {/* <WatercolorGPT
  title="Innovación orgánica que conecta tecnología y naturaleza"
  logoSrc="/logo.svg"
/> */}

      <XxAboutUs />
      {/* <Velocidad /> */}
      {/* <XxHero />  */}
      <ScrollZoomGallery />
      <Carousel />
      <RevealText />
      <Hey />
      <ServicesGrid />
      <LottieCardFlow />
      <Faqs />
       <AutoScrollCarousel />
      {/* <AboutUs /> */}
      {/* <CoreServices /> */}
      {/* <EcoFriendly /> */}
      {/* <EcoCommitment /> */}
      {/* <LottieShowcase /> */}
     {/* <ServicesSection /> */}
      {/* <ContactSection /> */}
      {/* <AutoScrollCarousel /> */}
      <FinalCTAContact />
    </>
  );
}
