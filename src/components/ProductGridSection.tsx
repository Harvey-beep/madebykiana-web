import React, { useState} from "react";
import { motion, type Variants } from 'framer-motion';
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import FullBodyClayArt from '../assets/FULL-BODY.png'
import FullBodyPet from '../assets/WITH PET.png'
import FullBodyAccessory from '../assets/WITH ACCESSORY.png'
import KeychainClayArt from '../assets/KEYCHAIN.png'
import KeychainInitials from '../assets/WITH INITIALS.png'
import KeychainAccessory from '../assets/WITH ACCESSORIES.png'

type Product = {
    slug: string;
    imageUrl: string;
    title: string;
    description: string;
    longDescription?: string;
    price?: number;
}

const products = [
    {
        slug: "full-body-clay-art",
        imageUrl: FullBodyClayArt,
        title: "FULL-BODY CLAY ART",
        description: "A personalized full-body clay art with no accessories",
        price: 600
    },
    {
        slug: 'full-body-w-pet',
        imageUrl: FullBodyPet,
        title: 'FULL-BODY W/ PET',
        description: 'A personalized full-body figurine with a personalized pet figurine',
        price: 600
    },
    {
        slug: 'full-body-w-accessory',
        imageUrl: FullBodyAccessory,
        title: 'FULL-BODY W/ ACCESSORY',
        description: 'A personalized full-body figurine with a personalized accessory',
        price: 600
    },
    {
        slug: 'head-keychain-clay-art',
        imageUrl: KeychainClayArt,
        title: 'HEAD KEYCHAIN CLAY ART',
        description: 'A personalized head keychain clay art with no accessories',
        price: 600
    },
    {
        slug: 'keychain-w-initials',
        imageUrl: KeychainInitials,
        title: 'KEYCHAIN W/ INITIALS',
        description: 'A personalized head keychain clay art with a personalized initial',
        price: 600
    },
    {
        slug: 'keychain-w-accessory',
        imageUrl: KeychainAccessory,
        title: 'KEYCHAIN W/ ACCESSORY',
        description: 'A personalized head keychain clay art with a personalized accessory',
        price: 600
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

const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
};

const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setIsSelectedProduct] = useState<Product | null>(null);

    const openModal = (product: Product) => {
        setIsSelectedProduct(product);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setIsSelectedProduct(null)
    }

    return (
        <motion.section
            className="py-16 px-4 md:px-8 bg-white"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
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
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={gridVariants}
                >
                    {products.map((product) => (
                        <motion.div key={product.slug} variants={cardVariants}>
                            <ProductCard
                                key={product.slug}
                                slug={product.slug}
                                imageUrl={product.imageUrl}
                                title={product.title}
                                description={product.description}
                                onClick={() => openModal(product)}
                            />
                        </motion.div>
                    ))}
                </motion.div>

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

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    {selectedProduct && (
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={selectedProduct.imageUrl}
                                alt={selectedProduct.title}
                                className="w-full h-80 object-contain rounded-lg mb-4"
                            />
                            <h2 className="font-fredoka font-bold text-2xl mb-2 text-black">
                                {selectedProduct.title}
                            </h2>
                            <p className="font-fredoka text-gray-700 text-base mb-4">
                                {selectedProduct.longDescription || selectedProduct.description}
                            </p>
                            {selectedProduct.price && (
                                <p className="font-fredoka font-bold text-xl text-black mb-6">
                                    ₱{selectedProduct.price.toFixed(2)} {/* Example price */}
                                </p>
                            )}
                            <button
                                className="bg-black text-white font-fredoka font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors"
                            >
                                Request Custom Order
                            </button>
                        </div>
                    )}
                </Modal>
            </div>
        </motion.section>
    );
};

export default ProductGridSection;


