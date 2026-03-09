"use client";
import React, {useEffect, useRef, useState} from 'react';
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ui/theme-toggle";
import MenuList from "@/components/ui/menu-list";
import Logo from "@/components/ui/logo";

export type MenuDataType = {
    id: number;
    title: string;
    path: string;
    newTab: string;
}[]

const Header = () => {
    const [menuData, setMenuData] = useState<MenuDataType>();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [sticky, setSticky] = useState(false);
    const pathName = usePathname();
    const menuRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        setSticky(window.scrollY >= 80)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [pathName]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsClosed(true);
                setTimeout(() => {
                    setMenuOpen(false);
                    setIsClosed(false);
                }, 300)
            }
        };
        const fetchData = async () => {
            try {
                const res = await fetch('/api/layout-data');
                if (!res.ok) throw new Error("Could not fetch data");
                const data = await res.json();
                setMenuData(data?.MenuData);
            } catch (e) {
                console.error("Error fetching services:", e);
            }
        }
        fetchData();

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [menuOpen]);

    return (
        <header
            className = {`fixed top-0 z-50 w-full border-t-4 border-primary transition-all duration-500 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-primary before:transition-all before:duration-500 before:ease-in-out ${sticky ? "before:h-full" : "before:h-0"}`}
        >
            <div className = "container">
                <nav className = {`relative flex item-center justify-between ${sticky ? 'py-5' : 'py-7'}`}>
                    <div className = "flex items-center">
                        <Logo sticky = {sticky} />
                    </div>
                    <div className = "flex items-center gap-7">
                        <div className = "flex item-center gap-3">
                            <ThemeToggle />
                        </div>
                        <div className = "relative flex align-middle">
                            {menuOpen === false ?
                                <div className = "flex align-middle">
                                <button onClick = {() => setMenuOpen(true)}>
                                    <Image
                                        src = {sticky ? "/images/Icon/menu-button-sticky.svg" : "/images/Icon/menu-button.svg"}
                                        alt = "icon" width = {45} height = {45} className = "cursor-pointer"
                                    />
                                </button>
                            </div> :
                                <div
                                    ref = {menuRef} className = {`absolute -top-5 right-0 flex flex-col gap-5 min-w-80 sm:min-w-96 bg-white dark:bg-twilliteblack p-6 rounded-3xl shadow-lg transition-all duration-300 ease-in-out z-10 
                                    ${isClosed ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                                >
                                    <div
                                        className = "flex items-center justify-between pb-5 border-b border-secondary/15 dark:border-white/15"
                                    >
                                        <p className = "text-secondary dark:text-white">
                                            Меню сайта
                                        </p>
                                        <div onClick = {() => setMenuOpen(false)} className = "p-2 cursor-pointer">
                                            <Image
                                                src = "/images/Icon/close-icon.svg" alt = "close-icon" width = {16}
                                                height = {16} className = "dark:hidden"
                                            />
                                            <Image
                                                src = "/images/Icon/close-icon-dark.svg" alt = "close-icon" width = {16}
                                                height = {16} className = "hidden dark:block"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <ul className = "flex flex-col gap-2 pb-4">
                                            {menuData?.map((item, i) => (
                                                <MenuList
                                                    key = {i} item = {item} closeMenu = {() => setMenuOpen(false)}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <Link
                                            href = "tel: +375-29-327-98-74"
                                            className = "text-secondary/60 dark:text-white/60 hover:text-secondary dark:hover:text-white"
                                        >+375 (29) 327-98-74</Link>
                                        <Link href = "mailto:info@taratuta.pro">
                                            <h4>
                                                info@taratuta.pro
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;