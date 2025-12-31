import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import team from "../assets/images/team.jpg"
const About = () => {
    const scrollRef = useRef();
    const ghostRef = useRef();

    useGSAP(() => {
        const scrollContainer = scrollRef.current;
        const wrapper = ghostRef.current;

        // only run horizontal scroll on PC 
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const scrollWidth = scrollContainer.offsetWidth - window.innerWidth;

            gsap.to(scrollContainer, {
                x: () => -scrollWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: wrapper,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => `+=${scrollWidth}`,
                    invalidateOnRefresh: true,
                }
            });
        });
    }, { scope: ghostRef });

    return (
        <div id="about" ref={ghostRef} className="overflow-hidden bg-black">
            <div ref={scrollRef} className="flex flex-col md:flex-row h-auto md:h-screen w-full md:w-fit flex-nowrap">

                <section className="w-screen h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-20 flex-shrink-0">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={team}
                            className="rounded-lg shadow-2xl border border-white/10 w-full"
                            alt="Team Photo"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="font-valorant text-tntngreen text-5xl md:text-7xl mb-4">About Us</h2>
                        <p className="text-zinc-400 text-lg">Welcome to the official website of TNTN, a brand new VEXU robotics
                            team out of Vancouver, British Columbia, Canada. Our team is comprised of people from all
                            over the lower mainland area, with members from UBC, SFU, and BCIT. After the VRC Spin Up
                            season in 2023, graduating members of the local VEX community came together with a common
                            interest to compete in the university level VEXU competition. By partnering with Ten Ton Robotics Academy,
                            we were able to make this dream a reality, and build up a brand new team from scratch in time for the 2023-2024
                            season, VRC Over Under. Even with only 10 members, our team has been able to overcome the feat of forming
                            a competitive VEXU team thanks to our shared drive and passion for robotics.</p>
                    </div>
                </section>

                <section className="w-screen h-screen flex items-center justify-center p-6 md:p-20 flex-shrink-0 bg-zinc-900/50">
                    <div className="max-w-4xl text-center">
                        <h2 className="text-white text-5xl md:text-8xl font-valorant mb-6">Our Mission</h2>
                        <p className="text-zinc-400 text-xl leading-relaxed">
                            Our mission is to help foster an environment for robotics education in the greater Vancouver area,
                            and support the learning of students of all ages. We strive for this by volunteering at local tournaments
                            and acting as a mentor to younger competitors in the workshop to ensure that robotics is a place to grow 
                            talented young minds for the next generation. We also hope to one day build a scene for competitive VEXU 
                            robotics, by building support for VEXU teams in local schools and organizations. Our goal is that one day
                            British Columbia can be a competitive region for VEXU as it is now for VRC, giving students a pathway to
                            continue their journey in robotics through into University.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;