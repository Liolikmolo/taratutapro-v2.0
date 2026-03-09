'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Marquee from "react-fast-marquee";

type ServicesDataType = {
    number: string,
    name: string,
    heading: string,
    description: string,
    data: {
        id: number,
        image: string,
        heading: string,
        descr: string
    }[]
}

const AboutMeFullImg = () => {
    const [services, setServices] = useState<ServicesDataType>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error("Something went wrong!");
                const data = await res.json();
                setServices(data?.servicesData)
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [])

    return (
        <section>
            <div className = "w-full h-50vh lg:h-80vh">
                <Image
                    src = {"/images/about-us/image-section/full-w-image.png"} alt = "full-image" width = {1800}
                    height = {800} className = "w-full h-full object-cover"
                />
            </div>
            <div className = "bg-primary flex">
                <Marquee autoFill = {true}>
                    {services?.data.map((item, i) => {
                        return (
                            <div key = {i} className = "flex items-center py-6 gap-6 pr-6 md:pr-10 md:gap-10">
                                <h4 className = "dark:text-secondary">
                                    {item.heading}
                                </h4>
                                <div className = "w-2.5 h-2.5 bg-secondary/12  rounded-full" />
                            </div>
                        )
                    })}
                </Marquee>
            </div>
        </section>
    );
};

export default AboutMeFullImg;