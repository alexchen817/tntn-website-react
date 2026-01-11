import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import champions from "../assets/images/champions.jpg"
const Hero = () => {
    useGSAP(() => {
        const titleSplit = new SplitText('.title', { type: 'chars, words' });
        // hide the initial position of the words
        gsap.set(titleSplit.words, { overflow: 'hidden' });

        gsap.from(titleSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
            delay: 0.5
        })

        gsap.from(".bg-image", {
            opacity: 0,
            filter: "blur(10px)",
            duration: 2.5,
            ease: "power2.out"
        })
    })
    return (
        <div className="relative w-screen h-screen z-10">
            <img src={champions}
                alt="VEX U 2025 Champion Photo"
                className='bg-image w-full h-full object-cover opacity-81' />
            <div className="absolute inset-0 flex flex-col transform translate-y-10 drop-shadow-lg will-change-filter items-center justify-center">
                <h1 className="title font-valorant text-white text-7xl">
                    <span className="text-tntngreen ">TNTN </span>
                    <span>Robotics</span>
                </h1>
            </div>
        </div>
    )
}

export default Hero