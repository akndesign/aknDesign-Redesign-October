import React, { useEffect } from 'react';
import './Pacman.scss';

import { Observer } from 'gsap/Observer';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

export const Pacman: React.FC = () => {
    const [dot, setDot] = React.useState(0);
    const [section, setSection] = React.useState<NodeListOf<Element>>();
    const refPacmanWrapper = React.useRef<HTMLDivElement>(null);
    const refPacman = React.useRef<HTMLDivElement>(null);
    const refLane = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const allDataSection = document.querySelectorAll('[data-section]');
        console.log(allDataSection)
        setSection(allDataSection)
        setDot(allDataSection.length);
    }, []);

    useEffect(() => {
        if (!refPacmanWrapper.current) return;
        const current = refPacmanWrapper.current;

        const handleMouseEnter = (e: Event) => {
            console.log(e)
            const target = e.target as HTMLElement;
            if (target.classList.contains('dot')) {
                current.classList.add('active');
                if (target.classList.contains('visited')) {
                    gsap.to(target.querySelector('.dot-circle'), {
                        scale: 1,
                        duration: 1,
                        ease: 'elastic.out(1, 0.3)'

                    })
                }
            }
        };

        const handleMouseLeave = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('dot')) {
                current.classList.remove('active');
                if (target.classList.contains('visited')) {
                    gsap.to(target.querySelector('.dot-circle'), {
                        scale: 0.25,
                        duration: 1,
                        ease: 'elastic.out(1, 0.3)'
                    })
                }
            }
        };

        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot) => {
            dot.addEventListener('mouseenter', handleMouseEnter);
            dot.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            dots.forEach((section) => {
                section.removeEventListener('mouseenter', handleMouseEnter);
                section.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [dot]);


    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
        const section = document.querySelectorAll('[data-section]');


        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust as needed
        };

        const getPreviousSiblings = (elem: any, filter: any) => {
            var sibs = [];
            while (elem = elem.previousSibling) {
                if (elem.nodeType === 3) continue; // text node
                if (!filter || filter(elem)) sibs.push(elem);
            }
            return sibs;
        }

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('data-section');
                    const dot = document.querySelector(`[data-target="${id}"]`);

                    const recDot = dot?.getBoundingClientRect();

                    if (!recDot) return;

                    const pacman = refPacman.current;

                    if (!pacman) return;

                    const recPacman = pacman.getBoundingClientRect();

                    const pacmanTimeline = gsap.timeline({
                        defaults: {
                            duration: 1,
                            ease: 'none',
                            overwrite: 'auto'
                        },
                        onStart: () => {
                            if (!refPacmanWrapper.current) return;
                            refPacmanWrapper.current.classList.add('active');
                        },
                        onComplete: () => {
                            setTimeout(() => {
                                if (!refPacmanWrapper.current) return;
                                refPacmanWrapper.current.classList.remove('active');
                            }, 1000);
                        }
                    });


                    // const diff = recDot.top - recPacman.top - recPacman.height * 2 + offset;
                    const lastPositionPacman = recPacman.top;
                    const diff = recDot.top - lastPositionPacman;


                    // rotate if the dot is on up 
                    const rotation = recDot.top > lastPositionPacman ? 0 : 180;
                    gsap.set(pacman, {
                        rotation: rotation
                    })


                    let offset = 10;

                    if (rotation === 0) {
                        offset = 10;
                    } else {
                        offset = 15;
                    }


                    pacmanTimeline
                        .to(pacman, {
                            y: `+=${diff - offset}`,
                        }
                        )


                    if (!dot) return;
                    const prev = dot.previousElementSibling;
                    console.log(prev)


                    const alldots = document.querySelectorAll('.dot');

                    let countDot = 0;
                    alldots.forEach((item) => {
                        const recItem = item.getBoundingClientRect();
                        if (recItem.top < recDot.top) {
                            countDot++;
                        }
                    })



                    const prevDots = document.querySelectorAll('.dot:nth-child(-n+' + countDot + ')');
                    prevDots.forEach((item) => {
                        item.classList.remove('is-active')
                        item.classList.add('visited')
                        gsap.to(item.querySelector('.dot-circle'), {
                            scale: 0.25,
                            duration: 0.5,
                            overwrite: 'auto'
                        })
                    })

                    console.log(countDot)

                    setTimeout(() => {
                        for (let i = countDot + 1; i <= alldots.length; i++) {
                            const nextDot = document.querySelector(`.dot:nth-child(${i})`);
                            console.log(`dot:nth-child(${i}`)
                            if (nextDot) {
                                nextDot.classList.remove('visited')
                                console.log(nextDot,'nextDot')
                                gsap.to(nextDot.querySelector('.dot-circle'), {
                                    scale: 1,
                                    duration: 0.5,
                                    delay: 1
                                })
                            } else {
                                break;
                            }
                        }
                    }, 0)
                }
            });
        }, observerOptions);

        const dots = document.querySelectorAll('.dot')

        dots.forEach((item) => {
            const href = item.getAttribute('data-target');
            console.log(href)
            if (href) {
                const target = document.querySelector(`[data-section="${href}"]`);
                if (target) {
                    observer.observe(target);
                } else {
                    console.warn(`Target element for href "${href}" not found`);
                }
            } else {
                console.warn('Nav item does not have href attribute');
            }
        });


        dots.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const href = item.getAttribute('data-target');
                const target = document.querySelector(`[data-section="${href}"]`);

                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: target,
                            offsetY: 100,
                            autoKill: false
                        }
                    });
                }
            });
        });


        return () => {
            observer.disconnect();
        };

    }, [section]);



    return (
        <div className="pacman-wrapper" ref={refPacmanWrapper}>
            <div className="pacman" ref={refPacman}>
                <div className="pacman-mouth"></div>
            </div>
            <div className="lane" ref={refLane}>
                {
                    section && Array.from(section).map((item, i) => (
                        <span key={i} className='dot' data-target={`${item.getAttribute('data-section')}`}>
                            <span className="dot-circle" ></span>
                        </span>
                    ))
                }
            </div>
        </div>
    );
};
