import React, { useEffect, useRef } from 'react';
import './Marquee.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface MarqueeInterface {
    children: React.ReactNode;
}

export const Marquee: React.FC<MarqueeInterface> = ({ children }) => {
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: 'none'
            },
        });

        const q = gsap.utils.selector(mainRef.current);

        const min = 50;
        const max = 100;

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // marquee inner
        const inner = q('.marquee-inner');

        tl.fromTo(inner,
            { xPercent: 0 },
            { xPercent: -randomNumber, duration: 10, ease: 'none' }
        );

        ScrollTrigger.create({
            trigger: mainRef.current,
            start: 'top bottom',
            end: 'bottom top',
            animation: tl,
            scrub: true,
            markers: false,
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="marquee" ref={mainRef}>
            <div className="marquee-inner">
                <p>{children}</p>
            </div>
        </div>
    );
};
