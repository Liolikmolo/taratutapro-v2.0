import {Metadata} from "next";
import MainSection from "@/components/main-section";
import StatsFacts from "@/components/stats-facts";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";
import Faq from "@/components/faq";
import Contacts from "@/components/contacts";
import AboutMe from "@/components/about-me/about-me";

export const metadata: Metadata = {
    title: "Сайт мастера печника Алексея Таратуты",
}

export default function Home() {
    return (
        <>
            <MainSection />
            <StatsFacts />
            <Portfolio />
            <Services />
            <AboutMe />
            <Testimonial />
            <Faq />
            <Contacts contactsDataValue = "07" />
        </>
    );
}