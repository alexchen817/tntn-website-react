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
            url: null,
        },
        {
            logo: navCanada,
            name: "NAV CANADA",
            url: null,
        },
        {
            logo: onshape,
            name: "Onshape",
            url: "https://www.onshape.com",
        },
        {
            logo: polymaker,
            name: "Polymaker",
            url: null,
        },
        {
            logo: winsource,
            name: "WinSource",
            url: null,
        },
        {
            logo: pontem,
            name: "Pontem",
            url: null,
        },
    ];

    return (
        <div id="sponsors" className="py-20 flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <h2 className="font-valorant text-2xl text-white mb-10 uppercase tracking-tighter">
                Our Sponsors
            </h2>
            <div className=" h-[40rem] rounded-md flex flex-col antialiased] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={sponsors}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div >
    )
}

export default Sponsors