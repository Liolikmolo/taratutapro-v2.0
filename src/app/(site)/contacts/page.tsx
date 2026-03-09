import React from 'react';
import {Metadata} from "next";
import MainBanner from "@/shared/main-banner";
import Contacts from "@/components/contacts";

export const metadata:Metadata = {
    title: "Связаться со мной | Мастер-печник Алексей Таратута",
}

const Page = () => {
    return (
        <main>
            <MainBanner bannerImage="/images/contact/banner/contact-banner.png" heading="Связаться со мной" desc="Готовы к строительству печи? Мастер‑печник на связи! Проектирование, кладка, гарантия. Пишите — обсудим ваш заказ!"/>
            <Contacts contactsDataValue={'01'}/>
        </main>
    );
};

export default Page;
