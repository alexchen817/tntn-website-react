import { ScrollTrigger, SplitText, ScrollToPlugin } from "gsap/all"
import gsap from "gsap";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import PerformanceStats from "./components/PerformanceStats";
import Sponsors from "./components/Sponsors";
import Team from "./components/Team";
// global registering for plugins. 
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

const App = () => {
    const [showSplash, setShowSplash] = useState(true);

    return (
        <div className="min-h-screen">
            {/* show the splash, otherwise if complete show the main sections */}
            {showSplash ? (
                <SplashScreen onComplete={() => setShowSplash(false)} />
            ) : (
                <main className="relative min-h-screen">
                    <div className="relative z-10">
                        <Navbar />
                        <Hero />
                        {/* <About /> */}
                        {/* <PerformanceStats /> */}
                        <Team />
                        <Sponsors />
                    </div>
                </main>
            )}
        </div>
    )
}

export default App