import { useCallback, useState } from "react";
import weddingData from "./data/weddingData";
import AccountSection from "./components/AccountSection";
import CherryBlossomLayer from "./components/CherryBlossomLayer";
import ContactSection from "./components/ContactSection";
import CoupleSection from "./components/CoupleSection";
import DateSection from "./components/DateSection";
import FloatingRightImage from "./components/FloatingRightImage";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import InvitationSection from "./components/InvitationSection";
import IntroSection from "./components/IntroSection";
import LocationSection from "./components/LocationSection";
import MapSection from "./components/MapSection";
import MusicButton from "./components/MusicButton";
import ParallaxBackdrop from "./components/ParallaxBackdrop";
import ShareSection from "./components/ShareSection";

function App() {
  const [isEntered, setIsEntered] = useState(false);
  const showInvitation = useCallback(() => {
    setIsEntered(true);
  }, []);

  if (!isEntered) {
    return (
      <IntroSection
        couple={weddingData.couple}
        wedding={weddingData.wedding}
        mainImage={weddingData.images.main}
        onIntroComplete={showInvitation}
      />
    );
  }

  return (
    <main className="app parallax-app" aria-label="모바일 청첩장">
      <ParallaxBackdrop />
      <CherryBlossomLayer />
      <FloatingRightImage />
      <MusicButton musicUrl="/music/wedding-music.mp3" />
      <HeroSection
        couple={weddingData.couple}
        wedding={weddingData.wedding}
        mainImage={weddingData.images.main}
      />
      <InvitationSection invitation={weddingData.invitation} />
      <CoupleSection
        couple={weddingData.couple}
        parents={weddingData.parents}
      />
      <DateSection wedding={weddingData.wedding} />
      <LocationSection wedding={weddingData.wedding} />
      <MapSection map={weddingData.map} wedding={weddingData.wedding} />
      <GallerySection images={weddingData.images.gallery} />
      <ContactSection contacts={weddingData.contacts} />
      <AccountSection accounts={weddingData.accounts} />
      <ShareSection share={weddingData.share} />
      <FooterSection footer={weddingData.footer} couple={weddingData.couple} />
    </main>
  );
}

export default App;
