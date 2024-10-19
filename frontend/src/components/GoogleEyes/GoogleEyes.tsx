
import React, { useRef, useEffect, useState, useCallback } from "react";
import './GoogleEyes.scss';
import gsap from "gsap";

export const GoogleEyes: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const q = gsap.utils.selector(ref);
        const eyeElements = q('.eye');

        const updateEyePosition = (e: MouseEvent) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            // console.log(mouseX, mouseY);
            const rotationRadians = Math.atan2(mouseX, mouseY * -1);
            const rotationDegrees = rotationRadians * (180 / Math.PI) * -1 + 180;

            eyeElements.forEach((eye) => {
                eye.style.transform = `rotate(${-rotationDegrees}deg)`;
            });
        };

        document.addEventListener('mousemove', updateEyePosition);

        return () => {
            document.removeEventListener('mousemove', updateEyePosition);
        };
    }, []);

    return (
        <div className="google-eyes" ref={ref}>
            <div className="eye">
                <div className="pupil"></div>
            </div>
            <div className="eye">
                <div className="pupil"></div>
            </div>
        </div>
    );
};
