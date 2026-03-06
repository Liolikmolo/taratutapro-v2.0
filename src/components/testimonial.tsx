"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";

type TestimonialType = {
    feedback1: {
        preTitle: string,
        title: string,
        author: string,
        company: string,
    },
    feedback2: {
        preTitle: string,
        title: string,
        author: string,
        company: string,
    },
    feedback3: {
        preTitle: string,
        title: string,
        author: string,
        company: string,
    }
}

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState<TestimonialType>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/page-data")
                if (!res.ok) throw new Error("Failed to fetch data.");
                const data = await res.json()
                setTestimonial(data?.testimonialData)
            } catch (e) {
                console.error("Failed to fetch testimonials",e)
            }
        }
        fetchData();
    }, [])
    return (
        <section className="bg-lightgray dark:bg-secondary py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-14 xl:gap-24">
                        <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">05</span>
                                <div className="h-px w-16 bg-black/12 dark:bg-white/12"/>
                                <p className="section-bedge py-1.5 px-4 rounded-full">Отзывы</p>
                            </div>
                            <div className="flex flex-col gap-11">
                                <div className="flex flex-col gap-5">
                                    <h2 className="max-w-3xl">
                                        Настоящие отзывы от довольных клиентов
                                    </h2>
                                    <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                                        Реальный опыт, искренние отзывы — узнайте, как мои креативные решения преобразили дома и возродили традиции, придав им новый облик и смысл.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
                            <div className="bg-primary p-4 lg:p-7 flex flex-col gap-32">
                                <div className="flex flex-col gap-6">
                                    <p className="text-base text-secondary/70">{testimonial?.feedback1.preTitle}</p>
                                    <h4 className="dark:text-secondary">{testimonial?.feedback1.title}</h4>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image src={"/images/testimonial/testimonial_1.png"} alt={"testy-image"} width={60} height={60} className="rounded-full" />
                                    <div>
                                        <p className="dark:text-secondary">{testimonial?.feedback1.author}</p>
                                        <p className="text-secondary/70 text-base font-normal">{testimonial?.feedback1.company}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-2 bg-secondary dark:bg-lightgray/10 p-4 lg:p-7 flex flex-col justify-between gap-14">
                                <div className="flex flex-col gap-6">
                                    <p className="text-base text-white/70">{testimonial?.feedback2.preTitle}</p>
                                    <h4 className="text-white">{testimonial?.feedback2.title}</h4>
                                    <div className="flex items-center gap-2.5">
                                        {/*<StarRating count={4.5} color='#FFFFFF' />*/}
                                        <span className="text-base text-white">4.5</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <Image src={"/images/testimonial/testimonial_2.png"} alt={"testy-image"} width={60} height={60} className="rounded-full" />
                                        <div>
                                            <p className="text-white">{testimonial?.feedback2.author}</p>
                                            <p className="text-white/70 text-base font-normal">{testimonial?.feedback2.company}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src={"/images/testimonial/comma_vector.svg"} alt={"comma"} width={45} height={45} />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-black/20 p-4 lg:p-7 flex flex-col justify-between gap-32">
                                <div className="flex flex-col gap-6">
                                    <p className="text-base text-secondary/70 dark:text-white/70">{testimonial?.feedback3.preTitle}</p>
                                    <h4>{testimonial?.feedback3.title}</h4>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image src={"/images/testimonial/testimonial_3.png"} alt={"testy-image"} width={60} height={60} className="rounded-full" />
                                    <div>
                                        <p>{testimonial?.feedback3.author}</p>
                                        <p className="text-secondary/70 dark:text-white/70 text-base font-normal">{testimonial?.feedback3.company}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;