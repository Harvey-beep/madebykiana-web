import React from "react";

const ProductHero: React.FC = () => {
    return (
        <div className="bg-[#F6BE00] min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
            <div className="inline-block">
                <h1 className="font-fredoka text-6xl md:text-8xl font-black text-black tracking-wide">
                    MY PRODUCTS
                </h1>
                
                <div className="w-full h-1 bg-black mt-4"></div>
            </div>
        </div>
    );
};

export default ProductHero;