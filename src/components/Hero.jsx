import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import champions from "../assets/images/champions.jpg"
const Hero = () => {
    useGSAP(() => {

        // make the title visible asap
        const titleSplit = new SplitText('.title', { type: 'lines, chars, words' });
        // hide the initial position of the words
        gsap.set(titleSplit.words, {
            paddingTop: "0.5em",
            paddingBottom: "0.1em",
            marginTop: "-0.2em",
            overflow: 'hidden'
        });
        // then animate 
        gsap.from(titleSplit.chars, {
            autoAlpha: 0,
            yPercent: 110,
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
        <div className="relative bg-dark-bg w-screen h-screen z-10 overflow-hidden">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
                src={champions}
                alt="VEX U 2025 Champion Photo"
                className='bg-image w-full h-full object-cover object-bottom'
            />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
                <h1 className="title font-valorant text-white 
                    text-[15vw] md:text-[6vw] 
                    leading-[0.85] md:leading-none
                    flex flex-col md:flex-row items-center justify-center 
                    drop-shadow-[12px_9px_3px_rgba(0,0,0,1)] will-change-filter">
                    <span className="text-tntngreen">TNTN</span>
                    <span className="mt-2 md:mt-0 md:ml-4">Robotics</span>
                </h1>
            </div>
        </div>
    );
}

export default Hero