import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const SplashScreen = () => {
    const container = useRef();
    // animate the logo 
    useGSAP(() => {
        const timeline = gsap.timeline();
        // initially hide the logo
        gsap.set(".logo", { opacity: 0 });
        // 1) hide 2) appear 3) fade
        timeline.to(".logo", {
            opacity: 100,
            scale: 10,
            duration: 1.5,
            ease: "power4.inOut"
        })
            .to(".logo", {
                opacity: 0,
                duration: 1.5,
                ease: "power1.inOut"
            });

    }, [])

    return (
        <div className='h-screen flex bg-black justify-center place-items-center'>
            <img src="/tntnlogo.png" alt="TNTN Logo" className="logo w-10" />
        </div>
    )
}

export default SplashScreen