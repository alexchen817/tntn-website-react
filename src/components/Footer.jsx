import React from 'react'
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="w-full bg-[#111] text-white py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">

                <div className="text-center md:justify-start">
                    <span className="text-sm opacity-70">
                        Copyright © TenTon Robotics 2026
                    </span>
                </div>

                <div className="flex justify-center">
                    <ul className="flex gap-4">
                        <li><a href="https://www.instagram.com/tntn.vex/" className="hover:text-tntngreen"><FaInstagram size={30} /></a></li>
                        <li><a href="https://www.youtube.com/@TNTN-vexu" className="hover:text-tntngreen"><FaYoutube size={30} /></a></li>
                        <li><a href="https://www.linkedin.com/company/tntn-robotics/" className="hover:text-tntngreen"><FaLinkedin size={30} /></a></li>
                    </ul>
                </div>

                {/* empty div so react can be happy */}
                <div className="hidden md:block"></div>

            </div>
        </footer>
    );
};

export default Footer