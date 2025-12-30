import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import gsap from "gsap";
import tntn from '../assets/images/tntn.png'
const Navbar = () => {

    const navRef = useRef();

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
    }, []);

    return (
        <nav ref={navRef} className="fixed z-50 top-0 left-0 w-full bg-black px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    <img src={tntn} alt="TNTN text logo" className='w-50' />
                </div>
                <div className="flex gap-8 text-sm font-medium text-zinc-400">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#team" className="hover:text-white transition-colors">Team</a>
                    <a href="#media" className="hover:text-white transition-colors">Media</a>
                    <a href="#events" className="hover:text-white transition-colors">Events</a>
                    <a href="#events" className="hover:text-white transition-colors">Sponsors</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar