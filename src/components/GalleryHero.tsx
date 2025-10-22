import React from "react";
import { motion } from "framer-motion";

const GalleryHero: React.FC = () => {
    return (
        <div className="bg-[#F6BE00] min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >

                <div className="inline-block">
                    <h1 className="font-fredoka text-6xl md:text-8xl font-black text-black tracking-wide">
                        GALLERY
                    </h1>
                    
                <div className="w-full h-1 bg-black mt-4 mb-8"></div>
                </div>

                <p className="font-fredoka text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
                "Welcome to my gallery, a space where imagination takes shape and ideas become keepsakes. Each piece you'll find here—whether it's a personalized keychain, a custom figurine, or a unique collectible—was crafted with thought, care, and attention to detail. This collection is more than just finished outputs: it's a showcase of stories, personalities, and memories brought to life through creativity. Take your time exploring, and discover how every creation carries its own little spark of joy."
                </p>
            </motion.div>
        </div>
    );
};

export default GalleryHero;