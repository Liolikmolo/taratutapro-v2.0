import React from 'react';
import {Metadata} from "next";
import {getAllProjects} from "@/lib/markdown";
import MainBanner from "@/shared/main-banner";

export const metadata:Metadata = {
    title: "Мои работы | Мастер-печник Алексей Таратута",
}

const Page = () => {
    return (
        <main>
            <MainBanner bannerImage="/images/projects/banner/projects-banner.png" heading="Мои работы" desc="Каждая печь - это история тепла и уюта, воплощённая в кирпиче. Ознакомьтесь с моими работами: от классических русских печей до современных каминов, согревающих дом и душу."/>
            <ProjectsList/>
        </main>
    );
};

export default Page;