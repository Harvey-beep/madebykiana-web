import React from 'react';
import GalleryHero from '../components/GalleryHero';
import GalleryGridSection from '../components/GalleryGridSection';
import SocialBanner from '../components/SocialBanner';

import Img1 from '../assets/Hirono-Sample-2.jpg';
import Img2 from '../assets/Hirono-Sample.jpg';
import Img3 from '../assets/FULL-BODY.png';

const myGalleryImages = [
  { id: 1, src: Img1, alt: 'Description for Image 1', rowSpan: 'row-span-2' },
  { id: 2, src: Img2, alt: 'Description for Image 2' },
  { id: 3, src: Img3, alt: 'Description for Image 3' },
];

const GalleryPage: React.FC = () => {
  return (
    <>
      <GalleryHero />
      <GalleryGridSection images={myGalleryImages} />
      <SocialBanner />
    </>
  );
};

export default GalleryPage;