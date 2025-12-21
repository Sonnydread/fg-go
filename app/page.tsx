import { AutoScrollCarousel } from "./landing/carousel";

import XxHero from "./landing/xxhero";
import Hero from "./landing/herox";
import AboutUs from "./landing/aboutus";
import XxAboutUs from "./landing/xxaboutus";
import EcoFriendly from "./landing/eco";
import EcoCommitment from "./landing/ecoco";
import CoreServices from "./landing/xmix";
import ServicesSection from "./landing/mix";
import ContactSection from "./landing/contact";
import FinalCTAContact from "./landing/xkontac";
import Velocidad from "./landing/velocidad";


export default function Page() {
  return (
    <>
      <Hero />
      <Velocidad />
      <XxHero />
      <AboutUs />
      <XxAboutUs />
      <CoreServices />
   
      <EcoFriendly />
      <EcoCommitment />
      <ServicesSection />
      <ContactSection />
      <FinalCTAContact />
      <AutoScrollCarousel />
    </>
  );
}
