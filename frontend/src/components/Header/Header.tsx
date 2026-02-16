'use client'
import React, { useEffect, useState, useRef } from 'react';
import { Logo } from '@/components/Logo/Logo';
import Button from '@/components/Button/Button';
import './Header.scss';
import { Burger } from '../Burger/Burger';

import gsap from 'gsap';

export const Header = () => {
    const [time, setTime] = React.useState<string>('');
    const [iconClass, setIconClass] = React.useState<string>('icon-sun');
    const [isNight, setIsNight] = React.useState<boolean>(false);
    const refSolar = React.useRef<HTMLSpanElement>(null);
    const refTime = React.useRef<HTMLDivElement>(null);

    // const updateTime = () => {
    //     const options: Intl.DateTimeFormatOptions = {
    //         hour: 'numeric',
    //         minute: 'numeric',
    //         hour12: true,
    //         timeZone: 'America/Los_Angeles',
    //     };

    //     const seattleTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
    //     setTime(seattleTime);

    //     const hours = new Date().getUTCHours() - 7; // Convert UTC to Seattle time (UTC-7)
    //     if (hours >= 6 && hours < 18) {
    //         setIconClass('icon-sun');
    //         setIsNight(false);
    //     } else {
    //         setIconClass('icon-moon');
    //         setIsNight(true); // Set to night to trigger the glow
    //     }
    // };
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
        if (hours >= 0 && hours < 6) {
            setIconClass('icon-moon');
            setIsNight(true); // Enable glow
        } else if (hours >= 6 && hours < 18) {
            setIconClass('icon-sun');
            setIsNight(false); // Disable glow
        } else {
            setIconClass('icon-moon');
            setIsNight(false); // Normal moon icon, no glow
        }
    };

    useEffect(() => {
        updateTime();
        const interval = setInterval(() => {
            updateTime();
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!refSolar.current || !refTime.current) return;

        gsap.set(refSolar.current, { y: 100, opacity: 0 });
        gsap.set(refTime.current, { opacity: 0 });

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: 'power2.inOut',
            },
        });

        tl.fromTo(
            refSolar.current,
            { y: 100, opacity: 0, duration: 3, ease: 'elastic.out(1,0.5)' },
            { y: 0, opacity: 1 },
            0
        ).fromTo(
            refTime.current,
            { opacity: 0 },
            { opacity: 1 },
            0
        );
    }, []);

    // Function to copy the email address to clipboard
    const [buttonText, setButtonText] = useState<string>('Ready to Hire');
    const [buttonAnimation, setButtonAnimation] = useState<string>('');  // Handle button animation state

    const copyToClipboard = (e: React.MouseEvent) => {
        e.preventDefault();
        // lottie.play('stars'); // Play the lottie animation when the button is clicked

        // Copy the email to clipboard
        navigator.clipboard.writeText('alexander@akndesign.com')
            .then(() => {
                console.log('User selected copy to clipboard');
                setButtonText('Email Copied!');
                setButtonAnimation('active'); // Trigger animation state when copied

                // Reset button text and animation after 1 second
                setTimeout(() => {
                    setButtonAnimation('');
                }, 1000);

                // Reset the button to initial state after 3.35 seconds
                setTimeout(() => {
                    setButtonText('Ready to Hire');
                    setButtonAnimation('hide');
                }, 3350);
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <header className="header">
            <div className='header-wrapper'>
                <Logo />
                <nav>
                    <ul className="">
                        <li className={`time ${isNight ? 'glow' : ''}`}>
                            <span ref={refTime}>{time}</span>
                            <span ref={refSolar} className='solar'>
                                <i className={`icon-akn ${iconClass}`}></i>
                            </span>
                        </li>
                        <li><h6>Authorized to work in Canada & US</h6></li>
                        <li>

                            <Button variant='default' split={true} onClick={copyToClipboard} className={`copy-email-button ${buttonAnimation}`} ><span className={`ready-to-hire`}>Contact Alexander</span><span className={`email-copied`}>Email Copied</span></Button>
                            
                        </li>
                        <li><Burger /></li>
                    </ul>
                </nav>
            </div>
        </header >
    );
};
