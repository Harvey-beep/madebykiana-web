import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
    slug: string;
    imageUrl: string;
    title: string;
    description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ slug, imageUrl, title, description }) => {
    return (
        <div className="border-4 border-black rounded-3xl p-2.5">
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
                
                <Link
                    to={`/products/${slug}`}
                    className="bg-black text-white font-fredoka font-bold py-3 px-8 rounded-full mt-auto hover:bg-gray-800 transition-colors"
                >
                    VIEW PRODUCT
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;