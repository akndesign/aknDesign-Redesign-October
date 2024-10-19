
import React from 'react';
import Image from 'next/image';
import './Portfolio.scss';

interface PortfolioProps {
    data: any;
}
export const Portfolio: React.FC<PortfolioProps> = ({ data }) => {

    return (
        <>
            <div className="portfolio bg-neon-green">
                <div className="portfolio-content">
                    <p className='h1'>Misfits</p>
                    <p className='h2'>A new stacking game</p>
                    <p className='h3'>Misfits is a new stacking game, primarily for adults. The game’s objective is to be first to stack ten blocks, without the tower falling. No two stacks are the same. It’s nail-biting. Surprising. Delightful.</p>
                    <div className="quote">
                        <blockquote className='h4'>‘Misfits takes simple geometry and translates it into an absorbing game that is both beautiful to look at and fun to play.’</blockquote>
                        <p className='h4'>- Anthony Burrill, renowned UK-based graphic artist, profiled by Apple</p>
                    </div>
                </div>
                <div className="portfolio-image">
                    <Image src="/images/misfits.jpeg" alt="Misfits" width={957} height={592} />
                </div>
            </div >
            <div className="portfolio bg-azure">
                <div className="portfolio-content">
                    <p className='h1'>Citymapper</p>
                    <p className='h2'>Vancouver Mascot</p>
                    <p className='h3'>Misfits is a new stacking game, primarily for adults. The game’s objective is to be first to stack ten blocks, without the tower falling. No two stacks are the same. It’s nail-biting. Surprising. Delightful.</p>
                    <div className="quote">
                        <blockquote className='h4'>Misfits takes simple geometry and translates it into an absorbing game that is both beautiful to look at and fun to play.</blockquote>
                        <p className='h4'>- Anthony Burrill, renowned UK-based graphic artist, profiled by Apple</p>
                    </div>
                </div>
                <div className="portfolio-image">
                    <Image src="/images/citymapper.png" alt="Misfits" width={957} height={592} />
                </div>
            </div >
        </>

    );
}