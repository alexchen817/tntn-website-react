import React from 'react'
import { CardContainer, CardBody, CardItem } from './ui/3d-card';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import iain from '../assets/images/profiles/iain.jpg';
import elia from '../assets/images/profiles/elia.jpg';
import julian from '../assets/images/profiles/julian.jpg';
import alex from '../assets/images/profiles/alex.jpg';
import tian from '../assets/images/profiles/tian.jpg';
import reade from '../assets/images/profiles/reade.jpg';
import yoyo from '../assets/images/profiles/yoyo.jpg';
import todd from '../assets/images/profiles/todd.jpg';
import kourosh from '../assets/images/profiles/kourosh.jpg';
import cooper from '../assets/images/profiles/cooper.jpg';
import owen from '../assets/images/profiles/owen.jpg';
import liam from '../assets/images/profiles/liam.jpg';
import trevor from '../assets/images/profiles/trevor.jpg';

const Team = () => {
    const members = [
        { name: "Iain Griesdale", year: "Year 3 | UBC", role: "Media, Notebook, Software", img: iain },
        { name: "Elia Sheikh-Bahaie", year: "Year 3 | UBC", role: "Mechanical, Manufacturing", img: elia },
        { name: "Julian Pietraroia", year: "Year 3 | UBC", role: "Mechanical, Driver", img: julian },
        { name: "Trevor Ruttan", year: "Year 3 | SFU", role: "Mechanical, Driver", img: trevor },
        { name: "Cooper Brosgall", year: "Year 2 | UBC", role: "Software, Electronics", img: cooper },
        { name: "Tian Chen", year: "Year 3 | UBC", role: "Mechanical", img: tian },
        { name: "Yoyo Wang", year: "Year 3 | UBC", role: "Notebook, Manufacturing", img: yoyo },
        { name: "Reade", year: "Year 4 | SFU", role: "Notebook", img: reade },
        { name: "Kourosh Kalali", year: "Year 3 | UBC", role: "Mechanical, Manufacturing", img: kourosh },
        { name: "Liam Teale", year: "Year 1 | CapU", role: "Software, Electronics", img: liam },
        { name: "Alex Chen", year: "Year 3 | SFU", role: "Software", img: alex },
        { name: "Owen Gill", year: "Year 4 | UBC", role: "Notebook, Strategy", img: owen },
        { name: "Todd Ablett", year: "Coach, Mentor", role: "Mechanical, Manufacturing", img: todd },
    ]

    return (
        <div className='bg-black py-20 min-h-screen'>
            <h1 className="flex flex-col md:flex-row items-center justify-center text-center text-7xl text-tntngreen font-valorant mb-16 tracking-tighter">
                <span>Meet The Team</span>
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                {members.map((member, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <CardContainer className="w-full py-6">
                            <CardBody className="relative group/card w-full h-auto flex flex-col items-center">

                                {/* Image with glow effect */}
                                <CardItem translateZ="100" className="w-32 h-32 mb-4">
                                    <div className="w-40 h-40 aspect-square rounded-full overflow-hidden">
                                        <img
                                            src={member.img}
                                            className="h-full w-full object-cover object-center"
                                            alt={member.name}
                                        />
                                    </div>
                                </CardItem>

                                {/* Content */}
                                <div className="flex flex-col items-center space-y-1">
                                    <CardItem translateZ="80" className="text-2xl font-bold text-white text-center leading-tight">
                                        {member.name}
                                    </CardItem>

                                    <CardItem as="p" translateZ="90" className="text-tntngreen text-xs font-valorant uppercase tracking-widest">
                                        {member.year}
                                    </CardItem>

                                    <CardItem as="p" translateZ="40" className="text-neutral-400 text-sm text-center leading-relaxed">
                                        {member.role}
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;