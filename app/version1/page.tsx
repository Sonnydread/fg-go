
import SectionDivider from "./section-divider";

import RevealText from "../landing/inversion-reveal";

import LottieCardGrid from "../landing/lootie-grid";
import LottieShowcase from "./lootie-comp";

import Carousel from "../landing/carousel-compo";
import ProButton from "./glow-button";
import Animated from "./anim";

export default function Page() {
  return (
    <>
    
   
    
      <RevealText />
      <LottieCardGrid />
      <Carousel />
      <ProButton />
      <Animated />
      <SectionDivider>
        <LottieShowcase />
      </SectionDivider>
    </>
  );
}
