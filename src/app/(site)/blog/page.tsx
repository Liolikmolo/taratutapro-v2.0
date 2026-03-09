import React from 'react';
import {Metadata} from "next";
import MainBanner from "@/shared/main-banner";
import BlogList from "@/components/blog-list";

export const metadata:Metadata = {
    title: "Записки печника | Мастер-печник Алексей Таратута",
}

const Page = () => {
    return (
        <main>
            <MainBanner bannerImage="/images/blog/banner/blog_banner.png" heading="Записки печника" desc="Готовы построить печь, <span>которая будет радовать вас десятилетиями</span>? Давайте обсудим ваш проект — буду рад помочь!"/>
            <BlogList/>
        </main>
    );
};

export default Page;