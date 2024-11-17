import React from 'react';
import clsx from 'clsx';
import Magnetic from '@/components/Magnetic/Magnetic';
import Link from 'next/link';
import SplitType from 'split-type';
import './Button.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'default' | 'nostyle';
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void; // Allow MouseEvent here
    href?: string;
    children: React.ReactNode;
    icon?: string;
    magnetic?: boolean;
    className?: string;
    submit?: boolean;
    target?: string;
    split?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, href, children, icon, magnetic, className, submit, split, target }) => {
    const submitButton = submit ? 'submit' : 'button';
    const ref = React.useRef<HTMLButtonElement | HTMLAnchorElement>(null);

    useGSAP(() => {
        const element = ref.current;

        if (!split || !element) return;

        const splitTxt = new SplitType(element, {
            types: 'chars',
        });

        const handleMouseEnter = () => {
            // gsap.to(splitTxt.chars, {
            //     duration: 0.5,
            //     y: () => gsap.utils.random(-5, 5),
            //     x: () => gsap.utils.random(-3, 3),
            //     rotation: () => gsap.utils.random(-10, 10),
            //     ease: 'elastic.out(1, 0.3)',
            // });
            console.log('asi')

            gsap.to(splitTxt.chars, {
                duration: 0.3,
                yPercent: (index) => index % 2 === 0 ? -8 : 8,
                rotation: (index) => index % 2 === 0 ? 4 : -4,
                ease: 'power1.out',
                
            });

        };

        const handleMouseLeave = () => {
            gsap.to(splitTxt.chars, {
                duration: 0.3,
                yPercent: 0,
                x: 0,
                rotation: 0,
                ease: 'power1.out',
            });
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            splitTxt.revert();
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [split]);

    const classes = clsx(
        className,
        {
            'btn-primary': variant === 'primary',
            'btn-secondary': variant === 'secondary',
            'btn-default': variant === 'default',
            'btn-nostyle': variant === 'nostyle',
        }
    );

    if (href && magnetic) {
        return (
            <Magnetic>
                <Link
                    href={href}
                    className={classes}
                    target='_blank'
                    rel='noopener'
                    ref={ref as React.RefObject<HTMLAnchorElement>}
                    data-target={target}
                >
                    {children}
                </Link>
            </Magnetic>
        );
    }

    if (href) {
        return (
            <Link href={href} className={classes} target='_blank' rel='noopener' ref={ref as React.RefObject<HTMLAnchorElement>} data-target={target}
            >
                {children}
            </Link>
        );
    }

    if (magnetic) {
        return (
            <Magnetic>
                <button
                    onClick={onClick}
                    className={classes}
                    type={submitButton}
                    ref={ref as React.RefObject<HTMLButtonElement>}
                    data-target={target}
                >
                    {children}
                </button>
            </Magnetic>
        );
    }

    return (
        <button
            onClick={onClick}
            className={classes}
            type={submitButton}
            ref={ref as React.RefObject<HTMLButtonElement>}
            data-target={target}
        >
            {children}
        </button>
    );
};

export default Button;
