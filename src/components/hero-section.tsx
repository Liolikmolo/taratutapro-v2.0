"use client";

import React from 'react';
import {Parallax, ParallaxProvider} from "react-scroll-parallax";
import Image from "next/image";
import banner from "../../public/images/home/banner/banner-bg-img.png"
import primLeaf from "../../public/images/Icon/primary-leaf.svg"
import arrow from "../../public/images/Icon/arrow-icon.svg"


const HeroSection = () => {
    return (
        <ParallaxProvider>
            <Parallax speed = {-25}>
                 <section className = "relative flex items-end text-white bg-black h-full min-h-screen">
                     <Image
                         src = {banner} alt = "барбекю комплекс с плитой"
                         className = "absolute top-0 left-0 w-full h-full object-cover" width = {1094} height = {666}
                     />
                     <div className = "absolute inset-0 bg-black/50"></div>
                     <div className = "relative z-10 container text-left">
                         <div className = "flex flex-col gap-6 Xxl:pb-20 pb-10">
                             <div className = "flex items-start gap-2 md:gap-6">
                                 <div className = "w-11 h-11 flex-shrink-0">
                                     <Image
                                         src = {primLeaf} alt = "снежинка" width = {44} height = {44}
                                         className = "animate-spin"
                                     />
                                 </div>
                                 <p className = "text-white/70 max-w-md">
                                     Я создаю <span className = "text-primary">печи,</span> которые живут дольше любых слов и обещаний.
                                 </p>
                             </div>
                             <div className = "flex flex-col lg:flex-row items-start lg:items-end gap-4">
                                 <h1 className = "large-heading">Печник <br /> Алексей Таратута</h1>
                                 <div>
                                     <div className = "bg-primary rounded-full p-1.5 pl-8">
                                         <Image src = {arrow} alt = "стрелка вверх" width = {52} height = {52} />
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section>
            </Parallax>
        </ParallaxProvider>
    );
};

export default HeroSection;