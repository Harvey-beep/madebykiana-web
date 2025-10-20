import React from 'react';
import { motion } from 'framer-motion';

const KianaAvatar = "https:/i.ibb.co/L5T9W5V/kiana.png";

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

const ContactSection: React.FC = () => {
    return (
        <section className="py-24 container mx-auto px-8 md:px-12 lg:px-16 bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Left Column: Avatar */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <img
                        src={KianaAvatar}
                        alt="Kiana's Avatar"
                        className="w-56 h-56 md:w-64 md:h-64 object-contain"
                    />
                </motion.div>

                {/* Right Column: Form */}
                <motion.div
                    className="lg:col-span-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="font-fredoka text-4xl sm:text-5xl font-black text-white mb-6"
                        variants={itemVariants}
                    >
                        CONTACT ME:
                    </motion.h2>

                    <form className="space-y-6" action={"https://formspree.io/f/xkgqejro"} method="POST">
                        <motion.div variants={itemVariants}>
                            <div className="flex justify-end">
                                <label
                                    htmlFor="message"
                                    className="block font-fredoka text-lg text-white mb-2"
                                >
                                    Email:
                                </label>
                            </div>
                        <textarea
                            id="message"
                            name="message"
                            rows={8}
                            className="w-full p-4 bg-gray-100 text-black rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[#F6BE00] font-fredoka"
                            placeholder="Write your message here..."
                        ></textarea>
                    </motion.div>

                        <motion.div className="flex justify-end" variants={itemVariants}>
                            <button
                                type="submit"
                                className="bg-[#F6BE00] text-black font-fredoka font-bold text-lg px-12 py-3 rounded-full hover:bg-yellow-500 transition-colors"
                            >
                                SUBMIT
                            </button>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;