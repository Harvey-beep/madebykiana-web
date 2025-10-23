import React from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
    slug: string;
    imageUrl: string;
    title: string;
    description: string;
    onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, description, onClick }) => {
    return (
        <motion.div
            className="border-4 border-black rounded-3xl p-2.5 h-full cursor-pointer"
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
        >
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center h-full">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="font-fredoka font-bold text-xl mb-2 text-black">
                    {title}
                </h3>
                <p className="font-fredoka text-gray-600 text-sm mb-6">
                    {description}
                </p>
                
                <button
                    className="bg-black text-white font-fredoka font-bold py-3 px-8 rounded-full mt-auto pointer-events-none"
                >
                    VIEW PRODUCT
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;