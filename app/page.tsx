
import { AutoScrollCarousel } from "./landing/carousel";
import Homess from "./landing/test";
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

export default function Page() {
  return (
    <>
    <Homess />
    <Hero />
    <AutoScrollCarousel />
    <XxHero />
    <AboutUs />
    <XxAboutUs />
    <EcoFriendly />
    <EcoCommitment />
    <ServicesSection />
    <CoreServices />
    <ContactSection />
    <FinalCTAContact />
    </>
  )

}
