"use client";
import React, {useEffect, useState} from 'react';
import {useInView} from "react-intersection-observer";
import CountUp from "react-countup";
import NavigationLink from "@/shared/navigation-link";
import sectionbg from "../../public/images/home/statsfact/sectionbg.png"
import sectiondark from "../../public/images/home/statsfact/sectionbgdark.png"
import Image from "next/image";

type statsFactsDataType = {
    number: string
    name: string
    heading: string
    description: string
    scoreData: {
        number: number
        numberValue: string
        scoreDescr: string
    }[]
}

const StatsFacts = () => {
    const [statsFactsData, setStatsFactsData] = useState<statsFactsDataType>();
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/page-data");
                if (!res.ok) throw new Error("Failed to fetch data");
                const pageData = await res.json();
                if (pageData) {
                    setStatsFactsData(pageData?.statsFactData);
                } else {
                    console.error("Failed to fetch data");
                }
            } catch (e) {
                console.error('Error fetching services', e);
            }
        }
        fetchData();
    }, [])
    return (
        <section className = "relative bg-white dark:bg-secondary overflow-hidden">
            <div className = "relative py-20 md:py-40 z-10">
                <div className = "container">
                    <div className = "flex flex-col xl:flex xl:flex-row items-start gap-8">
                        <div className = "flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                            <span
                                className = "bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary"
                            >
                                {statsFactsData && statsFactsData?.number}
                            </span>
                            <div className = "h-px w-16 bg-black/12 dark:bg-white/12" />
                            <p className = "section-bedge py-1.5 px-4 rounded-full">
                                {statsFactsData && statsFactsData?.name}
                            </p>
                        </div>
                        <div className = "flex flex-col gap-11">
                            <div className = "flex flex-col gap-5">
                                <h2 className = "max-w-3xl">
                                    {statsFactsData?.heading}
                                </h2>
                                <p className = "max-w-xl text-secondary/70 dark:text-white/70">
                                    {statsFactsData?.description}
                                </p>
                            </div>
                            <div className = "grid grid-cols-1 md:grid-cols-3 gap-8">
                                {statsFactsData && statsFactsData?.scoreData?.map((value, index) => (
                                    <div
                                        ref = {ref} key = {index}
                                        className = "flex flex-col gap-5 pt-4 md:pt-11 border-t border-secondary/12 dark:border-white/12"
                                    >
                                        <h3 className = "text-5xl md:text-6xl Xxl:text-7xl font-bold">
                                            {inView ? <CountUp start = {0} end = {value.number} duration = {3} /> : "0"}
                                            {value.numberValue && <span>{value.numberValue}</span>}
                                        </h3>
                                        <p className = "text-base text-secondary/70 dark:text-white/70">
                                            {value.scoreDescr}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <NavigationLink
                                    navigationTitle = "Кто я такой?" navigationLink = "/about-me" transform = {true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "absolute -bottom-28 -left-20">
                <Image src = {sectionbg} alt = "image" className = "dark:hidden" width = {590} height = {590} />
                <Image src = {sectiondark} alt = "image" className = "hidden dark:block" width = {590} height = {590} />
            </div>

        </section>
    );
};

export default StatsFacts;