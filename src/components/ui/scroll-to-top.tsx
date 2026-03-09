"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }

    }, []);

    const scrolling = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className = "fixed bottom-8 right-8 z-[999]">
            <div className = "flex items-center gap-2.5">
                {isVisible && (
                    <div
                        onClick = {scrolling} aria-label = "Scroll to Top"
                        className = "flex cursor-pointer items-center justify-center transition duration-300 ease-in-out"
                    >
                        <Image src = {"/images/Icon/up-arrow.svg"} alt = "up arrow" width = {55} height = {55} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScrollToTop;