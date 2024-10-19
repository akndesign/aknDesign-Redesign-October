import React, { useRef } from "react";
import Button from "@/components/Button/Button";
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import lottieData from '../../../public/lottie/illustrationofme_animated.json';

import './Banner.scss';

export const Banner: React.FC = () => {
    const refLottie = useRef<LottieRefCurrentProps>(null);

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
                <h4>I examine joy, play <br />and discovery in my work</h4>
                <Button variant="primary" icon="arrow-right" split={true}>
                    Recent Work
                </Button>
            </div>
        </section>
    );

}