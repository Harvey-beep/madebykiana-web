import React from "react";
import { motion, type Variants } from 'framer-motion';

const heroVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const ProductHero: React.FC = () => {
    return (
        <div className="bg-[#F6BE00] min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
            <motion.div
                className="inline-block text-center"
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
            >
                <h1 className="font-fredoka text-6xl md:text-8xl font-black text-black tracking-wide">
                    MY PRODUCTS
                </h1>
                
                <div className="w-full h-1 bg-black mt-4"></div>
            </motion.div>
        </div>
    );
};

export default ProductHero;