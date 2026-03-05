import React from 'react';
import StarRating from "@/shared/star-rating";
import Image from "next/image";

const AboutUs = () => {
    return (
        <section className = "py-20 md:py-40 dark:bg-darkblack">
            <div className = "container">
                <div className = "flex flex-col 2xl:flex-row gap-10 2xl:gap-28">
                    <div className = "flex flex-col gap-5 2xl:gap-7 w-full 2xl:max-w-2xl 2xl:w-full">
                        <div className = "flex items-center gap-4 md:gap-8">
                            <span
                                className = "bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary"
                            >
                                04
                            </span>
                            <div className = "h-px w-16 bg-secondary/12 dark:bg-white/12" />
                            <p className = "text-base font-medium text-white bg-secondary dark:bg-white/10 py-1.5 px-4 rounded-full">
                                Обо мне
                            </p>
                        </div>
                        <div className = "flex flex-col gap-5 2xl:gap-7">
                            <h2 className = "2xl:max-w-3xl text-secondary dark:text-white">
                                Почему меня выбирают
                            </h2>
                            <p className = "2xl:max-w-sm text-secondary/70 dark:text-white/70">
                                Каждый объект для меня — это не просто очередная стройка, а создание уникального изделия, которое будет служить вашей семье поколениями.
                            </p>
                        </div>
                    </div>
                    <div className = "grid md:grid-cols-3 gap-5 2xl:gap-7">
                        <div className = "relative bg-primary p-4 2xl:p-7 flex flex-col justify-between gap-8 md:gap-0">
                            <div className = "relative z-10 flex flex-col gap-2 lg:gap-4">
                                <div>
                                    <StarRating count = {4} color = {'#1f2a2e'} />
                                </div>
                                <p className = "dark:text-secondary">
                                    Печь на века — ваш залог теплого дома навсегда.
                                </p>
                            </div>
                            <div className = "relative z-10">
                                <div className = "relative border-b border-secondary/12 pb-5">
                                    <h2 className = "dark:text-secondary">
                                        98.6%
                                    </h2>
                                    <p className = "text-base text-secondary/70">
                                        Довольных клиентов
                                    </p>
                                </div>
                                <div className = "flex items-center gap-2 lg:gap-5 pt-5">
                                    <Image
                                        src = {"/images/home/aboutusIndex/avatar.svg"} alt = "avatar" width = {64}
                                        height = {64}
                                    />
                                    <div>
                                        <p className = "font-medium dark:text-secondary">
                                            София Петрова
                                        </p>
                                        <p className = "text-base text-secondary/70">
                                            Вилейка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className = "absolute bottom-0 right-0">
                                <Image
                                    src = {"/images/home/aboutusIndex/bg-ellipse.svg"} alt = "ellipse" width = {200}
                                    height = {200}
                                />
                            </div>
                        </div>
                        <div className = "flex flex-col gap-5 2xl:gap-7">
                            <div className = "w-full h-full">
                                <Image
                                    src = {"/images/home/services/services_2.png"} alt = "services image" width = {340}
                                    height = {215} style = {{width: '100%', height: '100%'}}
                                />
                            </div>
                            <div
                                className = "bg-secondary dark:bg-lightgray/10 p-5 2xl:p-7 flex flex-col justify-between gap-8"
                            >
                                <div>
                                    <h2 className = "text-white">
                                        120+
                                    </h2>
                                    <p className = "text-base text-white/70">
                                        Успешно работающих печей и каминов
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className = "relative overflow-hidden p-5 2xl:p-7 border border-secondary/12 dark:border-white/30 flex flex-col justify-between gap-8 md:gap-0"
                        >
                            <div className = "relative z-10">
                                <h2>15+</h2>
                                <p>Лет опыта в печном деле</p>
                            </div>
                            <div className = "flex flex-col gap-4 relative z-10">
                                <Image
                                    src = {"/images/logo/logo.png"} alt = "logo" width = {160} height = {44}
                                    className = "dark:hidden"
                                />
                                <Image
                                    src = {"/images/logo/logo.png"} alt = "logo" width = {160} height = {44}
                                    className = "hidden dark:block"
                                />
                                <p>Мой опыт позволяет многим получить современный комфорт на плечах вековых традиций.</p>
                            </div>
                            <div
                                className = "absolute -top-72 right-0 border border-secondary/12 dark:border-white/30 rounded-full w-[489px] h-[489px]"
                            />
                            <div
                                className = "absolute -bottom-36 -right-14 border border-secondary/12 dark:border-white/30 rounded-full w-[489px] h-[489px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;