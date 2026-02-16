import React, { useRef } from "react";
import Button from "@/components/Button/Button";
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import lottieData from '../../../public/lottie/illustrationofme_animated.json';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Banner.scss';

export const Banner: React.FC = () => {
    const refLottie = useRef<LottieRefCurrentProps>(null);

    const handleOnClick = () => {
        gsap.registerPlugin(ScrollToPlugin);
        const target = document.querySelector('[data-section="works"]')
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
    }

    return (
        <section className="banner" data-section="banner">
            <Lottie
                animationData={lottieData}
                autoplay={true}
                lottieRef={refLottie}
                loop={true}
                className="lottie"
                controls={true}
            />
            <div className="banner-wrapper">
                <h2>I&apos;m Alexander Neumann,<br /> a designer and coder</h2>
                <h4>I examine joy, play <br />and discovery in client-led work</h4>
                <Button variant="primary" icon="arrow-right" split={true} onClick={handleOnClick}>
                    Recent Work
                </Button>
            </div>
        </section>
    );

}