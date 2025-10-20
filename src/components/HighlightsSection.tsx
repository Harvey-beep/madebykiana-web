import React from 'react';
import { motion } from 'framer-motion';
import GroupFigurineImage from '../assets/Hirono-Sample-removebg-preview.png';
import KeychainGroupImage from '../assets/20240717_142644_114823____1_____1200x1200-removebg-preview.png';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const CheckIcon: React.FC = () => (
    <svg
        className="w-5 h-5 text-white flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
        />
    </svg>
);


const HighlightsSection: React.FC = () => {
    return (
        <section className="my-16 px-6 md:px-12 lg:px-16">
            <div className="bg-black text-white rounded-2xl p-8 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Badge */}
                        <motion.span
                            className="bg-gray-700 text-gray-300 text-xs font-bold uppercase tracking-wider rounded px-3 py-1"
                            variants={itemVariants}
                        >
                            Featured Collection
                        </motion.span>

                        {/* Heading */}
                        <motion.h2
                            className="font-fredoka text-4xl sm:text-5xl font-bold mt-4"
                            variants={itemVariants}
                        >
                            HIGHLIGHTS
                        </motion.h2>

                        {/* Paragraph */}
                        <motion.p
                            className="font-fredoka text-lg mt-4 max-w-lg"
                            variants={itemVariants}
                        >
                            Every collectible I make is more than just a piece—it's a
                            mix of creativity, personality, and a whole lot of fun. Here
                            are the highlights that make my work truly stand out:
                        </motion.p>

                        {/* Checklist */}
                        <motion.ul className="space-y-3 mt-6" variants={itemVariants}>
                            <li className="flex items-center gap-3">
                                <CheckIcon />
                                <span className="font-fredoka text-base">
                                    Unique, one-of-a-kind collectibles made just for you
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckIcon />
                                <span className="font-fredoka text-base">
                                    Perfect as a gift or a keepsake you'll treasure
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckIcon />
                                <span className="font-fredoka text-base">
                                    Crafted with care and attention to detail
                                </span>
                            </li>
                        </motion.ul>
                    </motion.div>

                    {/* Right Column: Image Grid */}
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={GroupFigurineImage}
                            alt="Group of figurines"
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <img
                            src={KeychainGroupImage}
                            alt="Group of keychains"
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;

