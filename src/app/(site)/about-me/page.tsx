import React from 'react';
import {Metadata} from "next";
import AboutMeDetail from "@/components/about-me/about-me-detail";
import MainBanner from "@/shared/main-banner";
import AboutMeStats from "@/components/about-me/about-me-stats";
import AboutMeFullImg from "@/components/about-me/about-me-full-img";

export const metadata: Metadata = {
    title: "Обо мне | Мастер-печник Алексей Таратута",
}

const Page = () => {
    return (
        <main>
            <MainBanner
                bannerImage = "/images/about-us/banner/aboutus-banner.png" heading = "Обо мне"
                desc = "Я создаю <span>современные отопительные </span> приборы, которые делают вашу жизнь теплее и комфортнее."
            />
            <AboutMeDetail />
            <AboutMeStats />
            <AboutMeFullImg />
        </main>
    );
};

export default Page;