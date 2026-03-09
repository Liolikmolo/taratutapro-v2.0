import {Metadata} from "next";
import HeroSection from "@/components/hero-section";
import StatsFacts from "@/components/stats-facts";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import AboutUs from "@/components/about-me/about-me";
import Testimonial from "@/components/testimonial";
import Faq from "@/components/faq";
import Contacts from "@/components/contacts";

export const metadata: Metadata = {
    title: "Сайт мастера печника Алексея Таратуты",
}

export default function Home() {
    return (
        <>
            <HeroSection />
            <StatsFacts />
            <Portfolio />
            <Services />
            <AboutUs />
            <Testimonial />
            <Faq />
            <Contacts contactsDataValue = "10" />
        </>
    );
}