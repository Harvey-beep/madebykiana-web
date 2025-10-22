import React from "react";
import GalleryHero from "../components/GalleryHero";
import GalleryGridSection from "../components/GalleryGridSection";
import SocialBanner from "../components/SocialBanner";

const Gallery: React.FC = () => {
    return (
        <>
            <GalleryHero />
            <GalleryGridSection />
            <SocialBanner />
        </>
  );
};

export default Gallery;