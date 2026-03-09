"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";

type FooterDataType = {
    name: string,
    tagline: string,
    info: {
        icon: string,
        link: string,
        href: string,
    }[],
    links: {
        href: string,
        name: string,
    }[],
    socialLinks: {
        href: string,
        name: string,
    }[],
    copyright: string,
}

const Footer = () => {
    const [footerData, setFooterData] = useState<FooterDataType>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/layout-data');
                if (!res.ok) throw new Error("Failed to fetch layout data");
                const data = await res.json();
                setFooterData(data?.footerData);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    return (
        <footer>
            <div className = "bg-secondary py-10 md:py-20 xl:py-40">
                <div className = "container">
                    <div className = "flex flex-col xl:flex-row gap-10 xl:gap-0">
                        <div className = "flex flex-col gap-10 xl:max-w-2xl w-full">
                            {footerData?.tagline &&
                                <h2 className = "text-white xl:max-w-xl">
                                    {footerData.tagline}
                                </h2>
                            }
                            <div className = "flex flex-col gap-2">
                                {footerData && footerData.info.map((el, index) => {
                                    return (
                                        <div key = {index}>
                                            <a href = {el.href} className = "flex gap-4">
                                                <Image src = {el.icon} alt = "icon" width = {24} height = {24} />
                                                <span className = "text-white hover:text-primary text-lg">
                                                    {el.link}
                                                </span>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className = "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-full gap-10 md:gap-0">
                            <ul className = "flex flex-col gap-1.5">
                                {footerData && footerData.links.map((el, index) => {
                                    return (
                                        <li key = {index}>
                                            <a href = {el.href} className = "text-lg text-white hover:text-primary">
                                                {el.name}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <ul className = "flex flex-col gap-1.5">
                                {footerData && footerData.socialLinks.map((el, index) => {
                                    return (
                                        <li key = {index}>
                                            <a href = {el.href} className = "text-lg text-white hover:text-primary">
                                                {el.name}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className = "flex md:justify-end xl:col-span-2">
                                <p className = "text-white/70 text-base max-w-96">
                                    {footerData && footerData.copyright}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;