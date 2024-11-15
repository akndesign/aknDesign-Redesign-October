import React, { useEffect } from "react";
import './Menu.scss';
import { useThemeStore } from "@/store/useThemeStore";
import Button from "../Button/Button";
import Link from "next/link";
import { MouseEvent } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

export const Menu: React.FC = () => {
    const { isMenuOpen, setIsMenuOpen } = useThemeStore();
    const menuRef = React.createRef<HTMLDivElement>();
    gsap.registerPlugin(ScrollToPlugin);

    const handleClickOutside = (event: MouseEvent) => {
        console.log('click outside');
        const target = event.target as Node;

        if (
            menuRef.current &&
            !menuRef.current.contains(target) &&
            !(target instanceof Element && (target.classList.contains('navbar') || target.classList.contains('burger')))
        ) {
            setIsMenuOpen(false);
        }
    }


    const handleOnClick = (e: MouseEvent<HTMLElement>) => {
        console.log(e.currentTarget.dataset.target);
        const target = e.currentTarget.dataset.target;
        // const target = document.querySelector(`[data-section="${e.currentTarget.dataset.target}"]`)

        if (target) {
            const a = document.querySelector(`[data-section="${target}"]`);
            if (!a) return;

            console.log(a)
            //close the menu
            setIsMenuOpen(false);

            const tl = gsap.timeline({
                defaults: {
                    duration: 0.3,
                    ease: 'power2.inOut'
                },
            });
            tl
                .to('.burger-line:nth-child(1)', { rotation: 0, duration: 0.3, ease: 'power2.inOut', }, 0)
                .to('.burger-line:nth-child(2)', { rotation: 0, duration: 0.3, ease: 'power2.inOut' }, 0)
                .to('.burger-line:nth-child(3)', { rotation: 0, duration: 0.3, ease: 'power2.inOut', }, 0)
                .to('.burger-line:nth-child(2)', { scaleX: 1, duration: 0.3, ease: 'power2.inOut' })
                .add('add')
                .to('.burger-line:nth-child(1)', { yPercent: 0, duration: 1, rotation: 0, ease: 'elastic.out(1,0.5)' }, 'add')
                .to('.burger-line:nth-child(3)', { yPercent: 0, duration: 1, rotation: 0, ease: 'elastic.out(1,0.5)' }, 'add')

            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: a,
                    offsetY: 100,
                    autoKill: false
                }
            });



        }
    }

    

    return (
        <div className={`${isMenuOpen ? 'open' : ''} menu`} ref={menuRef}>
            <p className="h1">MENU</p>
            <nav>
                <ul>
                    <li className="h1"><Link href="#"><Button variant="nostyle" split={true} target="banner" onClick={handleOnClick}>Intro</Button></Link></li>
                    <li className="h1"><Link href="#"><Button variant="nostyle" split={true} target="contact" onClick={handleOnClick}>About</Button></Link></li>
                    <li className="h1"><Link href="#"><Button variant="nostyle" split={true} target="works" onClick={handleOnClick}>Recent Work</Button></Link></li>
                </ul>
            </nav>
        </div>
    );
}