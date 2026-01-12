import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import tntnLogo from "../assets/images/tntnlogo.png"
const SplashScreen = ({ onComplete }) => {
    const container = useRef();
    // animate the logo 
    useGSAP(() => {
        const timeline = gsap.timeline( {
            onComplete: onComplete
        });
        // initially hide the logo
        gsap.set(".logo", { opacity: 0 });
        // 1) hide 2) appear 3) fade
        timeline.to(".logo", {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power4.inOut"
        })
            .to(".logo", {
                opacity: 0,
                // scale: 1.5,
                duration: 1.5,
                ease: "power2.out"
            });

    }, [])

    return (
        <div className='fixed inset-0 flex bg-black justify-center place-items-center'>
            <img className='logo w-64 will-change-transform' src={tntnLogo} alt="TNTN Logo" />
        </div>
    )
}

export default SplashScreen