import React from "react";
import { motion } from "framer-motion";

const AboutHero: React.FC = () => {
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
                    HI, I'M KIANA!
                </h1>

                <div className="w-full h-1 bg-black mt-4"></div>
                </div>
            </motion.div>
        </div>
    );
}

export default AboutHero;