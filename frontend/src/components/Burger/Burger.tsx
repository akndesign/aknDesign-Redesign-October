import { useThemeStore } from '@/store/useThemeStore';
import './Burger.scss';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Burger = () => {
    const { setIsMenuOpen, isMenuOpen } = useThemeStore();
    const ref = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: ref, dependencies: [isMenuOpen] });

    const handleOnClick = contextSafe(() => {
        if (!isMenuOpen) {
            const tl = gsap.timeline({
                defaults: {
                    duration: 0.3,
                    ease: 'power2.inOut'
                },
            });
            tl
                .to('.burger-line:nth-child(1)', { rotation: 180, duration: 0.3, ease: 'power2.inOut', }, 0)
                .to('.burger-line:nth-child(2)', { rotation: 180, duration: 0.3, ease: 'power2.inOut' }, 0)
                .to('.burger-line:nth-child(3)', { rotation: 180, duration: 0.3, ease: 'power2.inOut', }, 0)
                .to('.burger-line:nth-child(2)', { scaleX: 0, duration: 0.3, ease: 'power2.inOut' })
                .add('add')
                .to('.burger-line:nth-child(1)', { yPercent: 185, duration: 1, rotation: -45, ease: 'elastic.out(1,0.9)' }, 'add')
                .to('.burger-line:nth-child(3)', { yPercent: -185, duration: 1, rotation: 45 , ease: 'elastic.out(1,0.9)' }, 'add')
                .timeScale(1.5).play();
        } else {
            console.log(isMenuOpen, 'clicked back')
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
                .timeScale(1.5).play();
        }

        setIsMenuOpen(!isMenuOpen);


    }) as React.MouseEventHandler;

    // const refTimeline = useRef<gsap.core.Timeline>();

    // useGSAP(
    //     (context, contextSafe) => {
    //         if (!ref.current) return;

    //         console.log(isMenuOpen);


    //         const tl = gsap.timeline({
    //             defaults: {
    //                 duration: 0.3,
    //                 ease: 'power2.inOut'
    //             },
    //             paused: true
    //         });

    //         gsap.set('.burger-line', { transformOrigin: 'center' });
    //         tl
    //             .to('.burger-line:nth-child(1)', { rotation: 180, duration: 0.3, ease: 'power2.inOut', }, 0)
    //             .to('.burger-line:nth-child(2)', { rotation: 180, duration: 0.3, ease: 'power2.inOut' }, 0)
    //             .to('.burger-line:nth-child(3)', { rotation: 180, duration: 0.3, ease: 'power2.inOut', }, 0)
    //             .to('.burger-line:nth-child(2)', { scaleX: 0, duration: 0.3, ease: 'power2.inOut' })
    //             .add('add')
    //             .to('.burger-line:nth-child(1)', { y: 22.5, duration: 1, rotation: -45, ease: 'elastic.out(1,0.9)' }, 'add')
    //             .to('.burger-line:nth-child(3)', { y: -22.5, duration: 1, rotation: 45, ease: 'elastic.out(1,0.9)' }, 'add')



    //         if (!isMenuOpen) {
    //             tl.reverse();
    //         } else {
    //             tl.play();
    //         }

    //         return () => {
    //             tl.kill();
    //         }
    //     },
    //     { scope: ref, dependencies: [isMenuOpen] }
    // );


    // const handleOnClick = contextSafe(() => {
    //     setIsMenuOpen(!isMenuOpen);
    // }) as React.MouseEventHandler;

    return (
        <div className="burger" id='burger-btn' ref={ref} onClick={handleOnClick}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
        </div>
    )
}