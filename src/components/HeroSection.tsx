import React from 'react';
import { motion } from 'framer-motion'
import CustomFigurinesImage from '../assets/3 TRANSPARENT.png';
import KianaFigurineImage from '../assets/3 TRANSPARENT_1.png';
import ThirdFigurineImage from '../assets/3 TRANSPARENT_2.png';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
       opacity: 1,
       transition: {
        staggerChildren: 0.2
       },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        },
    },
};

const HeroSection: React.FC = () => {
    return (
        <div className="bg-[#F6BE00] min-h-[calc(100vh-5rem)] flex flex-col justify-center p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text Content */}
                <motion.div 
                    className="text-black space-y-6 text-center lg:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h1 
                        className="font-fredoka text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
                        variants={itemVariants}
                    >
                        CUSTOMIZED FIGURINES <br/> & KEYCHAINS
                    </motion.h1>
                    <motion.p 
                        className="font-fredoka text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
                        variants={itemVariants}
                    >
                        Got an idea? I'll turn it into a unique collectible you can cherish. From portraits to custom characters, I'll make your vision real. Every piece is made with care, so it feels truly yours.
                    </motion.p>
                    <motion.p 
                        className="font-fredoka text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
                        variants={itemVariants}
                    >
                        Whether it's a gift for someone special or a keepsake just for you, our creations are designed to spark joy and capture memories that last.
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                        variants={itemVariants}
                    >
                        <button className="bg-black text-[#F6BE00] font-fredoka px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black transition-colors">
                            GET STARTED
                        </button>
                        <button className="border-2 border-black text-black font-fredoka px-8 py-3 rounded-full text-lg hover:bg-black hover:text-white transition-colors">
                            VIEW GALLERY
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="relative flex justify-center lg:justify-end items-center h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    {/* Image 1 (Back-left) */}
                    <img
                        src={CustomFigurinesImage}
                        alt="Customized Keychains"
                        className="absolute z-10 w-2/3 md:w-auto md:max-w-[90%] lg:max-w-[90%] h-auto 
                                   top-1/2 left-[25%] lg:left-[30%] 
                                   -translate-x-1/2 -translate-y-1/2 
                                   -rotate-10 drop-shadow-lg"
                    />

                    {/* Image 2 (Back-right) */}
                    <img
                        src={KianaFigurineImage}
                        alt="Single Kiana Figurine"
                        className="absolute z-10 w-2/3 md:w-auto md:max-w-[90%] lg:max-w-[90%] h-auto 
                                   top-1/2 left-[75%] lg:left-[80%] 
                                   -translate-x-1/2 -translate-y-1/2 
                                   rotate-10"
                    />

                    {/* Image 3 (Front-center) */}
                    <img
                        src={ThirdFigurineImage}
                        alt="Third Figurine"
                        className="absolute z-20 w-2/3 md:w-auto md:max-w-[90%] lg:max-w-[90%] h-auto 
                                   top-[55%] left-[50%] lg:left-[55%] 
                                   -translate-x-1/2 -translate-y-1/2 
                                   rotate-2"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;