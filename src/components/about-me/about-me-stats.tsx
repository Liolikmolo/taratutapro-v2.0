'use client';

import React, {useEffect, useState} from 'react';
import {useInView} from "react-intersection-observer";
import CountUp from "react-countup";

type AboutMeType = {
    number: number,
    postfix: string,
    prefix?: string,
    title: string,
    descr: string
}[]

const AboutMeStats = () => {
    const [aboutMe, setAboutMe] = useState<AboutMeType>();
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch data.');
                const data = await res.json();
                setAboutMe(data?.aboutMeStats)
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    return (
        <section className = "pb-10 md:pb-20 xl:pb-40 dark:bg-secondary">
            <div className = "container">
                <div className = "grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">
                    {aboutMe?.map((item, i) => (
                        <div ref = {ref} key = {i} className = "grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">
                            <h3 className = "text-5xl md:text-6xl Xxl:text-7xl font-bold border-b border-secondary/12 dark:border-white/12 pb-4 md:pb-8">
                                {item.prefix && <span>{item.prefix}</span>}
                                {inView ? <CountUp end = {item.number} start = {0} duration = {3} /> : '0'}
                                {item.postfix && <span>{item.postfix}</span>}
                            </h3>
                            <div className = "flex flex-col gap-2 md:gap-4">
                                <h4>
                                    {item.title}
                                </h4>
                                <p className = "text-base text-secondary/70 dark:text-white/70">
                                    {item.descr}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMeStats;