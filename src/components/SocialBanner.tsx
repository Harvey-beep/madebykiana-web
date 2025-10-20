import React from "react";
import { Link } from 'react-router-dom';

const KianaAvatar = "https:/i.ibb.co/L5T9W5V/kiana.png";

const IconWrapper: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors w-8 h-8 flex items-center justify-center">
        {children}
    </a>
);

const TiktokIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 3.965C9.042 3.965 8.709 3.954 7.35 4.01c-2.7.12-3.999 1.11-4.122 3.821-.057 1.26-.068 1.603-.068 4.169 0 2.565.011 2.908.068 4.168.123 2.712 1.118 3.71 3.821 3.821 1.359.057 1.691.069 4.169.069 2.477 0 2.81-.012 4.169-.069 2.701-.11 3.7-1.108 3.821-3.821.057-1.26.068-1.603.068-4.168 0-2.565-.011-2.908-.068-4.169-.123-2.711-1.118-3.71-3.821-3.821-1.359-.057-1.691-.069-4.169-.069ZM12 6.865A5.135 5.135 0 1 0 17.135 12 5.135 5.135 0 0 0 12 6.865Zm0 8.27A3.135 3.135 0 1 1 15.135 12 3.135 3.135 0 0 1 12 15.135Zm4.965-8.27a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2Z" />
    </svg>
);

const FacebookIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

const MailIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
);

const WebsiteIcon = () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c-1.933 0-3.5 4.477-3.5 10s1.567 10 3.5 10 3.5-4.477 3.5-10S13.933 2 12 2z" />
    </svg>
);

const SocialBanner: React.FC = () => {
    return (
        <section className="bg-black text-white py-6">
            <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
                
                {/* Left side: Avatar and Name */}
                <div className="flex items-center space-x-3">
                    <img src={KianaAvatar} alt="Kiana's Avatar" className="w-12 h-12 rounded-full" />
                    <span className="font-fredoka text-xl font-bold"> MADE BY KIANA </span>
                </div>

                {/* Right side: Social Icons */}
                <div className="flex items-center space-x-6 md:space-x-10">
                    <IconWrapper href="https://tiktok.com">
                        <TiktokIcon />
                    </IconWrapper>
                    <IconWrapper href="https://instagram.com">
                        <InstagramIcon />
                    </IconWrapper>
                    <IconWrapper href="https://facebook.com">
                        <FacebookIcon />
                    </IconWrapper>
                    <IconWrapper href="mailto:example@gmail.com">
                        <MailIcon />
                    </IconWrapper>
                    <IconWrapper href="https://example.com">
                        <WebsiteIcon />
                    </IconWrapper>
                </div>

            </div>
        </section>
    );
};

export default SocialBanner;