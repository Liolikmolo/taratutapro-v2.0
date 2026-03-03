import {Metadata} from "next";
import HeroSection from "@/components/hero-section";
import StatsFacts from "@/components/stats-facts";
import Portfolio from "@/components/portfolio";

export const metadata: Metadata = {
    title: "Сайт мастера печника Алексея Таратуты",
}

export default function Home() {
    return (
        <>
            <HeroSection />
            <StatsFacts />
            <Portfolio />
        </>
    );
}