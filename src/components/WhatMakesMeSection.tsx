import React from "react";
import { motion } from "framer-motion";
import type { Variants } from 'framer-motion';

const traits = [
    {
        title: 'CREATIVITY',
        quote: '"I love turning imagination into something real."',
    },
    {
        title: 'PASSION',
        quote: '"Every piece is made with care and love."',
    },
    {
        title: 'CONNECTION',
        quote: '"Every piece is made with care and love."',
    },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const WhatMakesMeSection: React.FC = () => {
    return (
        <section className="bg-gray-100 py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <motion.h2
                    className="font-fredoka text-4xl font-black text-black mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    WHAT MAKES ME, ME?
                </motion.h2>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {traits.map((trait, index) => (
                        <motion.div
                        key={index}
                        className="bg-gray-200 rounded-lg shadow-md p-8"
                        variants={itemVariants}
                        >
                        <h3 className="font-fredoka font-black text-2xl text-black mb-4">
                            {trait.title}
                        </h3>
                        <p className="font-fredoka text-base text-gray-700 italic">
                            {trait.quote}
                        </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="w-1/3 h-px bg-gray-400 mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: 'center' }}
                ></motion.div>
            </div>
        </section>
    );
};

export default WhatMakesMeSection;