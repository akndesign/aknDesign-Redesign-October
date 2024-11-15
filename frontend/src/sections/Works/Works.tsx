// import { Marquee } from "@/components/Marquee/Marquee";
import Marquee from "react-fast-marquee";

import React from "react"
import './Works.scss';
import { getDataWithQuery } from "@/libs/sanity/getData";
import { Portfolio, PortfolioHalf } from "@/components/Portfolio/";
import '../../components/Marquee/Marquee.scss';

interface WorksProps {
    data: any;
}
const Works: React.FC<WorksProps> = ({ data }) => {
    return (
        <>

            <section className="works" data-section="works" id="works">
                <Marquee className="marquee" speed={100}>
                    <div className="marquee-inner">
                        {
                            Array.from({ length: 20 }).map((_, i) => (
                                <span className='title' key={`recent-work-${i}`}>RECENT WORK • </span>
                            ))
                        }</div>
                </Marquee>
                <div className="works-wrapper">

                    {
                        data && data.map((item: any, i: number) => (
                            // if item.layout is full, render Portfolio component
                            // else render PortfolioHalf component
                            item.layout === 'full' ? <Portfolio key={i} data={item} /> : <PortfolioHalf key={i} data={item} />
                        ))
                    }
                </div>
            </section>
        </>


    );
}


export default Works;