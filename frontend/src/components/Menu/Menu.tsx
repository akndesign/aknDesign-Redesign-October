import React, { useEffect } from "react";
import './Menu.scss';
import { useThemeStore } from "@/store/useThemeStore";
import Button from "../Button/Button";
import Link from "next/link";

export const Menu: React.FC = () => {
    const { isMenuOpen, setIsMenuOpen } = useThemeStore();
    const menuRef = React.createRef<HTMLDivElement>();

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

    return (
        <div className={`${isMenuOpen ? 'open' : ''} menu`} ref={menuRef}>
            <p className="h1">MENU</p>
            <span className="close-btn" onClick={() => setIsMenuOpen(false)}>
                <span className="close-btn__item"></span>
                <span className="close-btn__item"></span>
            </span>

            <nav>
                <ul>
                    <li className="h1"><Link href="#"><Button variant="nostyle" split={true}>Intro</Button></Link></li>
                    <li className="h1"><Link href="#"><Button variant="nostyle" split={true}>About</Button></Link></li>
                    <li className="h1"><Link href="#"><Button variant="nostyle" split={true}>Recent Work</Button></Link></li>
                </ul>
            </nav>
        </div>
    );
}