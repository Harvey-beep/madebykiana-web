import React from "react"
import AboutHero from "../components/AboutHero"
import MyStorySection from "../components/MyStorySection";
import WhatMakesMeSection from "../components/WhatMakesMeSection";
import SocialBanner from "../components/SocialBanner";

const AboutMe: React.FC = () => {
    return (
        <>
            <AboutHero />
            <MyStorySection />
            <WhatMakesMeSection />
            <SocialBanner />
        </>
    );
}

export default AboutMe;