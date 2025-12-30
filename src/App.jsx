import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
// global registering for plugins. 
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    const [showSplash, setShowSplash] = useState(true);
    return (
        <div className="bg-black min-hscreen">
            {/* show the splash, otherwise if complete show the main sections */}
            {showSplash ? (
                <SplashScreen onComplete={() => setShowSplash(false)} />
            ) : (
                <main>
                <Navbar />
                <Hero />
                <About />
                </main>
            )}
        </div>
    )
}

export default App