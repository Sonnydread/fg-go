
import VideoHero from "./video-hero";
import ScrollZoomGallery from "./scroll-zoom";
import RevealText from "./inversion-reveal";
import MediaSection from "./media-section";
import LottieCardGrid from "./lootie-grid";

export default function Page() {
    return(
        <>
        <VideoHero />
        <LottieCardGrid />
        <MediaSection />
        <RevealText />
        <ScrollZoomGallery />
        </>
    )
}