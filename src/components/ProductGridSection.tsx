import React, { useState} from "react";
import ProductCard from "./ProductCard";

const mockProducts = [
    {
        slug: "full-body-clay-art",
        imageUrl: "https://placehold.co/600x400/F6BE00/black?text=Image+1",
        title: "FULL-BODY CLAY ART",
        description: "A personalized full-body clay art with no accessories",
    },
    {
        slug: 'full-body-w-pet',
        imageUrl: 'https://placehold.co/600x400/F6BE00/black?text=Image+2',
        title: 'FULL-BODY W/ PET',
        description: 'A personalized full-body figurine with a personalized pet figurine',
    },
    {
        slug: 'full-body-w-accessory',
        imageUrl: 'https://placehold.co/600x400/F6BE00/black?text=Image+3',
        title: 'FULL-BODY W/ ACCESSORY',
        description: 'A personalized full-body figurine with a personalized accessory',
    },
    {
        slug: 'head-keychain-clay-art',
        imageUrl: 'https://placehold.co/600x400/F6BE00/black?text=Image+4',
        title: 'HEAD KEYCHAIN CLAY ART',
        description: 'A personalized head keychain clay art with no accessories',
    },
    {
        slug: 'keychain-w-initials',
        imageUrl: 'https://placehold.co/600x400/F6BE00/black?text=Image+5',
        title: 'KEYCHAIN W/ INITIALS',
        description: 'A personalized head keychain clay art with a personalized initial',
    },
    {
        slug: 'keychain-w-accessory',
        imageUrl: 'https://placehold.co/600x400/F6BE00/black?text=Image+6',
        title: 'KEYCHAIN W/ ACCESSORY',
        description: 'A personalized head keychain clay art with a personalized accessory',
    },
];

interface FilterButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
};

interface PageButtonProps {
    page: string | number;
    isActive?: boolean;
    onClick?: () => void;
};

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`font-fredoka font-bold py-2 px-6 rounded-full text-sm transition-colors ${
        isActive
            ? 'bg-black text-white'
            : 'bg-gray-200 text-black hover:bg-gray-300'
        }`}
    >
        {label}
    </button>
);

const PageButton: React.FC<PageButtonProps> = ({ page, isActive, onClick }) => (
    <button
        onClick={onClick}
        disabled={!onClick}
        className={`font-fredoka font-bold w-9 h-9 rounded ${
        isActive
            ? 'bg-black text-white'
            : 'bg-gray-200 text-black hover:bg-gray-300 disabled:opacity-50'
        }`}
    >
        {page}
    </button>
);

const ProductGridSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState("ALL PRODUCTS");
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <section className="py-16 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                
                {/* --- Filter Bar --- */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex space-x-2">
                        <FilterButton
                            label="ALL PRODUCTS"
                            isActive={activeFilter === 'ALL PRODUCTS'}
                            onClick={() => setActiveFilter('ALL PRODUCTS')}
                        />
                        <FilterButton
                            label="KEYCHAINS"
                            isActive={activeFilter === 'KEYCHAINS'}
                            onClick={() => setActiveFilter('KEYCHAINS')}
                        />
                        <FilterButton
                            label="FIGURINES"
                            isActive={activeFilter === 'FIGURINES'}
                            onClick={() => setActiveFilter('FIGURINES')}
                        />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="sort" className="font-fredoka text-sm mr-2 text-black">
                            SORT BY:
                        </label>
                        <select
                            id="sort"
                            className="font-fredoka text-sm border border-gray-300 rounded-md p-2"
                        >
                            <option value="featured">Featured</option>
                            <option value="newest">Newest</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* --- Product Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockProducts.map((product) => (
                        <ProductCard
                        key={product.slug}
                        slug={product.slug}
                        imageUrl={product.imageUrl}
                        title={product.title}
                        description={product.description}
                        />
                    ))}
                </div>

                {/* --- Pagination --- */}
                <div className="flex justify-center items-center space-x-2 mt-12">
                    <PageButton page="<" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} />
                    <PageButton page={1} isActive={currentPage === 1} onClick={() => setCurrentPage(1)} />
                    <PageButton page={2} isActive={currentPage === 2} onClick={() => setCurrentPage(2)} />
                    <PageButton page={3} isActive={currentPage === 3} onClick={() => setCurrentPage(3)} />
                    <PageButton page="..." />
                    <PageButton page={9} isActive={currentPage === 9} onClick={() => setCurrentPage(9)} />
                    <PageButton page=">" onClick={() => setCurrentPage(p => Math.min(9, p + 1))} />
                </div>
            </div>
        </section>
    );
};

export default ProductGridSection;


