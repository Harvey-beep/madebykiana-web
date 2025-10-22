import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import KianaAvatar from '../assets/LOGO.png'

interface NavLinkProps {
    href: string;
    label: string;
    isActive?: boolean
    isMobile?: boolean
    onClick?: () => void
}

const HamburgerIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button 
        onClick={onClick} 
        className="md:hidden z-50"
        aria-label="Open menu"
    >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    </button>
)

const CloseIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button 
        onClick={onClick} 
        className="md:hidden z-50 text-white"
        aria-label="Close menu"
    >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
);

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <nav className="bg-[#F6BE00] text-black p-4 font-bold flex justify-between items-center h-20 relative z-30">
            {/* Left section: Avatar and Name */}
            <div className="flex items-center space-x-3">
                <img src={KianaAvatar} alt="Kiana's Avatar" className="w-10 h-10 rounded-full"/>
                <span className="font-fredoka text-lg"> Made by Kiana </span>
            </div>

            {/* Right section: Navigation Links */}
            <div className="hidden md:flex space-x-10 text-lg font-fredoka text-black pr-10">
                <NavLink href = "/" label = "HOME" isActive={location.pathname === "/"}/>
                <NavLink href = "/products" label = "PRODUCTS" isActive={location.pathname === "/products"}/>
                <NavLink href = "/gallery" label = "GALLERY" isActive={location.pathname === "/gallery"} />
                <NavLink href = "/about-me" label = "ABOUT ME" isActive={location.pathname === "/about-me"} />
            </div>

            <div className="md:hidden z-30">
                {isOpen ? <CloseIcon onClick={toggleMenu} /> : <HamburgerIcon onClick={toggleMenu} />}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="absolute top-0 left-0 w-full h-screen bg-black z-20 flex flex-col items-center justify-center space-y-10 text-white"
                    >
                        <NavLink href="/" label="HOME" isMobile isActive={location.pathname === "/"} onClick={toggleMenu}/>
                        <NavLink href="/products" label="PRODUCTS" isMobile isActive={location.pathname === "/products"} onClick={toggleMenu} />
                        <NavLink href="/gallery" label="GALLERY" isMobile isActive={location.pathname === "/gallery"} onClick={toggleMenu} />
                        <NavLink href="/about-me" label="ABOUT ME" isMobile isActive={location.pathname === "/about-me"} onClick={toggleMenu} />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive, isMobile }) => {
    return (
        <a
            href = {href}
            className={`relative pb-1 ${isMobile ? 'text-3xl' : 'text-lg'} ${
                isActive ? 'font-bold' : (isMobile ? 'hover:text-gray-300' : 'hover:text-gray-700')
            }`}
        >
            {label}
            {isActive && (
                <span className={`absolute left-0 bottom-0 w-full h-0.5 ${isMobile ? 'bg-white' : 'bg-black'}`}></span>
            )}
        </a>
    );
};

export default Navbar;