import VideoHero from "./video-hero";
import SectionDivider from "./section-divider";
import ScrollZoomGallery from "./scroll-zoom";
// import RevealText from "../landing/inversion-reveal";
import MediaSection from "./media-section";
// import LottieCardGrid from "../landing/lootie-grid";
// import LottieShowcase from "../landing/lootie-comp";

import Carousel from "../landing/carousel-compo";
import ProButton from "./glow-button";
import Animated from "./anim";

export default function Page() {
  return (
    <>
      <VideoHero />
      <MediaSection />
      <ScrollZoomGallery />
      {/* <RevealText /> */}
      {/* <LottieCardGrid /> */}
      <Carousel />
      <ProButton />
      <Animated />
      <SectionDivider>
        {/* <LottieShowcase /> */}
      
      </SectionDivider>
    </>
  );
}
