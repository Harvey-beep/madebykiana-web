import React from 'react';
import GalleryHero from '../components/GalleryHero';
import GalleryGridSection from '../components/GalleryGridSection';
import SocialBanner from '../components/SocialBanner';

import Img1 from '../assets/20251014_135514(1).png';
import Img2 from '../assets/20251014_135804.png';
import Img3 from '../assets/FULL-BODY.png';
import Img4 from '../assets/IMG_0001.png';
import Img5 from '../assets/IMG_0031.png';
import Img6 from '../assets/IMG_0093 (2).png';
import Img7 from '../assets/IMG_0183 (2).png';
import Img8 from '../assets/IMG_0388.png';


const myGalleryImages = [
  { id: 1, src: Img1, alt: 'Description for Image 1', rowSpan: 'row-span-2' },
  { id: 2, src: Img2, alt: 'Description for Image 2' },
  { id: 3, src: Img3, alt: 'Description for Image 3' },
  { id: 4, src: Img4, alt: 'Description for Image 4' },
  { id: 5, src: Img5, alt: 'Description for Image 5' },
  { id: 6, src: Img6, alt: 'Description for Image 6' },
  { id: 7, src: Img7, alt: 'Description for Image 7' },
  { id: 8, src: Img8, alt: 'Description for Image 8' },
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