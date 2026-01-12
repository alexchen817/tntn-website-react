import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import jukeboxLogo from '../assets/images/sponsors/jukebox.png'
import navCanada from '../assets/images/sponsors/navCanada.png'
import onshape from '../assets/images/sponsors/onshape.png'
import polymaker from '../assets/images/sponsors/polymaker.png'
import winsource from '../assets/images/sponsors/winsource.png'
import pontem from '../assets/images/sponsors/pontem.png'

const Sponsors = () => {
    const sponsors = [
        {
            logo: jukeboxLogo,
            name: "Jukebox Print",
            scale: "scale-100",
            url: "https://www.jukeboxprint.com/",
        },
        {
            logo: navCanada,
            name: "NAV CANADA",
            scale: "scale-90",
            url: null,
        },
        {
            logo: onshape,
            name: "Onshape",
            scale: "scale-100",
            url: null,
        },
        {
            logo: polymaker,
            name: "Polymaker",
            scale: "scale-100",
            url: null,
        },
        {
            logo: winsource,
            name: "WinSource",
            scale: "scale-100",
            url: null,
        },
        {
            logo: pontem,
            name: "Pontem",
            scale: "scale-110",
            url: null,
        },
    ];

    return (
        <div id="sponsors" className="py-20 flex flex-col antialiased items-center justify-center relative">
            <h1 className="flex flex-col md:flex-row items-center justify-center text-center text-7xl text-tntngreen font-valorant mb-10 tracking-tighter">
                <span>Our</span>
                <span className="mt-2 md:mt-0 md:ml-4">Sponsors</span>
            </h1>
            <div className="h-[30rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={sponsors}
                    direction="right"
                    speed="slow"
                />
                <InfiniteMovingCards
                    items={sponsors}
                    direction="left"
                    speed="slow"
                />
            </div>
        </div >
    )
}

export default Sponsors