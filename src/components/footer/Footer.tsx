import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full h-[44px] bg-[#222E34] flex justify-center align-middle ">
            <div
                className="flex items-center align-middle justify-center opacity-1"
            >
                <p className="font-inter text-[14px] font-normal leading-[20px] text-cemter text-white">
                    &copy; Copyright {new Date().getFullYear()}. Bhive Private Limited
                </p>
            </div>
        </footer>
    );
};

export default Footer;
