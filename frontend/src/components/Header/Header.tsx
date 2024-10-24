'use client'
import React, { useEffect } from 'react';
import { Logo } from '@/components/Logo/Logo';
import Button from '@/components/Button/Button';
import './Header.scss';
import { Burger } from '../Burger/Burger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Header = () => {
    const [time, setTime] = React.useState<string>('');
    const [iconClass, setIconClass] = React.useState<string>('icon-sun');
    const [isNight, setIsNight] = React.useState<boolean>(false);
    const refSolar = React.useRef<HTMLSpanElement>(null);
    const refTime = React.useRef<HTMLDivElement>(null);

    const updateTime = () => {
        const options: Intl.DateTimeFormatOptions = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'America/Los_Angeles',
        };

        const seattleTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
        setTime(seattleTime);

        const hours = new Date().getUTCHours() - 7; // Convert UTC to Seattle time (UTC-7)
        if (hours >= 6 && hours < 18) {
            setIconClass('icon-sun');
            setIsNight(false);
        } else {
            setIconClass('icon-moon');
            setIsNight(true); // Set to night to trigger the glow
        }
    };

    useEffect(() => {
        updateTime();
        const interval = setInterval(() => {
            updateTime();
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
        gsap.set(refSolar.current, { y: 100, opacity: 0 });
        gsap.set(refTime.current, { opacity: 0 });

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: 'power2.inOut',
            },
        });

        tl.fromTo(refSolar.current, { y: 100, duration: 3, opacity: 0, ease: 'elastic.out(1,0.5)' }, { y: 0, opacity: 1 }, 0)
          .fromTo(refTime.current, { opacity: 0 }, { opacity: 1 }, 0);
    }, {
        scope: refSolar,
    });

    return (
        <header className="header">
            <div className='header-wrapper'>
                <Logo />
                <nav>
                    <ul className="">
                        <li className={`time ${isNight ? 'glow' : ''}`}>
                            <span ref={refTime}>{time}</span>
                            <span ref={refSolar} className='solar'>
                                <i className={`icon-akn ${iconClass} animate-bounce`}></i>
                            </span>
                        </li>
                        <li><span>Seattle, WA, USA</span></li>
                        <li><Button variant='default' split={true}>Ready to Hire</Button></li>
                        <li><Burger /></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
