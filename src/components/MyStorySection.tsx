import React from "react";
import { motion } from "framer-motion";
import type { Variants } from 'framer-motion';

import KianaGradPhoto from '../assets/grad pic.png';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, 
            delayChildren: 0.2, 
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

const MyStorySection: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                
                {/* Left Column: Image */}
                <motion.div
                    className="border-4 border-black rounded-3xl p-2.5"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <img
                        src={KianaGradPhoto}
                        alt="Kiana holding flowers"
                        className="w-full h-auto rounded-xl object-cover"
                    />
                </motion.div>

                {/* Right Column: Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    
                    {/* Title and Underline */}
                    <motion.div className="inline-block mb-8" variants={itemVariants}>
                        <h2 className="font-fredoka text-4xl font-black text-black tracking-wide">
                            MY STORY
                        </h2>
                        <div className="w-full h-1 bg-black mt-2"></div>
                    </motion.div>

                    {/* Paragraphs */}
                    <motion.p className="font-fredoka text-base text-gray-700 leading-relaxed mb-6" variants={itemVariants}>
                        Hi, I'm Kiana! I've always loved turning simple ideas into something you can
                        actually hold and treasure. What started as a fun hobby soon grew into a
                        passion for creating personalized keychains, figurines, and keepsakes that
                        people can connect with. Each piece I make is designed to capture personality,
                        memories, and stories in a way that feels truly one-of-a-kind.
                    </motion.p>

                    <motion.p className="font-fredoka text-base text-gray-700 leading-relaxed mb-6" variants={itemVariants}>
                        For me, it's not just about making cute collectibles—it's about bringing
                        someone's imagination to life. Whether it's a custom portrait, a favorite
                        character, or a gift for someone special, I pour care and creativity into every
                        detail. I believe the best keepsakes are the ones that make people smile, spark
                        joy, and feel personal. That's why every design is thoughtfully crafted to be
                        both high-quality and full of heart.
                    </motion.p>
                    
                    <motion.p className="font-fredoka text-base text-gray-700 leading-relaxed" variants={itemVariants}>
                        My mission is simple: to create pieces that people will cherish for years to
                        come. I want every keychain or figurine to feel like more than just an item—it
                        should feel like a memory, a story, or a little piece of happiness you can carry
                        with you. Knowing that my work can make someone's day brighter is what
                        inspires me to keep creating and sharing these unique collectibles with the
                        world.
                    </motion.p>
                </motion.div>
            </div>
        </section>
  );
};

export default MyStorySection;