"use client";

import React, {useEffect, useState} from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

type FaqDataType = {
    data: {
        faq_que: string,
        faq_ans: string,
    }[];
}

const Faq = () => {
    const [faqData, setFaqData] = useState<FaqDataType>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error("Faq failed.");
                const data = await res.json();
                setFaqData(data?.faqData);
            } catch (e) {
                console.error("Error fetching services:", e);
            }
        }
        fetchData();
    }, [])

    return (
        <section className = "bg-white dark:bg-darkblack py-20 md:py-40">
            <div className = "flex flex-col gap-24">
                <div className = "container">
                    <div className = "flex flex-col gap-20">
                        <div className = "flex flex-col gap-14 xl:gap-24">
                            <div className = "flex flex-col xl:flex xl:flex-row items-start gap-8">
                                <div className = "flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                    <span
                                        className = "bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full"
                                    >
                                        06
                                    </span>
                                    <div className = "h-px w-16 bg-black/12 dark:bg-white/12" />
                                    <p className = "section-bedge py-1.5 px-4 rounded-full">
                                        Вы спрашивали...
                                    </p>
                                </div>
                                <div className = "flex flex-col gap-11">
                                    <div className = "flex flex-col gap-5">
                                        <h2 className = "max-w-3xl">
                                            Вопросы, которые чаще всего задают печнику
                                        </h2>
                                        <p className = "max-w-2xl text-secondary/70 dark:text-white/70">
                                            Узнайте ответы на вопросы, которыми чаще всего интересуются те, кому нужны услуги печника.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className = "flex flex-col items-end">
                                <Accordion type = "single" collapsible className = "flex flex-col 2xl:max-w-5xl w-full">
                                    {faqData?.data.map((item, i) => (
                                        <AccordionItem value = {`item - ${i}`} key = {i}>
                                            <AccordionTrigger>
                                                <h4>
                                                    {item.faq_que}
                                                </h4>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                {item.faq_ans}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;