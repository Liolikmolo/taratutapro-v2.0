"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";

type ContactsDataType = {
    keypoint: string[],
    managerProfile: {
        image: string,
        name: string,
        position: string
    }
}

const Contacts = (props: { contactsDataValue: string }) => {
    const {contactsDataValue} = props;
    const [submitted, setSubmitted] = useState(false);
    const [loader, setLoader] = useState(false);
    const [contactData, setContactData] = useState<ContactsDataType>();
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/page-data");
                if (!res.ok) throw new Error("Failed to fetch data");
                const data = await res.json();
                setContactData(data?.contactData);
            } catch (e) {
                console.error("Error fetching services:", e);
            }
        }
        fetchData();
    }, [])

    const resetForm = () => {
        formData.email = "";
        formData.name = "";
        formData.message = "";
    };
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoader(true);

        fetch("https://formsubmit.co/ajax/strojka19@gmail.com", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: formData.email,
                name: formData.name,
                message: formData.message,
            }),
        })
            .then(res => res.json())
            .then(data => {
                setSubmitted(data.success)
                setLoader(false);
                resetForm();
            })
            .catch(err => console.log(err.message));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section className = "py-20 md:py-40 dark:bg-darkblack">
            <div className = "container">
                <div className = "flex flex-col gap-8 md:gap-20">
                    <div className = "flex flex-col gap-14 xl:gap-24">
                        <div className = "flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className = "flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                <span
                                    className = "bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full"
                                >
                                    {contactsDataValue ? contactsDataValue : '07'}
                                </span>
                                <div className = "h-px w-16 bg-black/12 dark:bg-white/12" />
                                <p className = "section-bedge py-1.5 px-4 rounded-full">
                                    Контакты
                                </p>
                            </div>
                            <div className = "flex flex-col gap-11">
                                <div className = "flex flex-col gap-5">
                                    <h2 className = "max-w-3xl">
                                        Как связаться со мной
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "flex flex-col xl:flex xl:flex-row gap-15 xl:gap-48">
                        <div className = "max-w-md flex flex-col gap-9 md:gap-16">
                            <div className = "flex flex-col gap-5 md:gap-8">
                                <p className = "max-w-2xl text-secondary/70 dark:text-white/70">
                                    Давайте сотрудничать и создавать что-нибудь интересное! Расскажите мне о своих идеях — я весь внимание!
                                </p>
                                <div>
                                    <ul className = "flex flex-col gap-3">
                                        {contactData?.keypoint.map((el, i) => {
                                            return (
                                                <li key = {i} className = "flex items-center gap-1.5 sm:gap-4">
                                                    <div
                                                        className = "bg-primary w-fit p-1 sm:p-1.5 rounded-full flex-shrink-0"
                                                    >
                                                        <Image
                                                            src = {"/images/Icon/right-check.svg"} alt = "right-check"
                                                            width = {20} height = {20}
                                                        />
                                                    </div>
                                                    <span className = "flex-1">
                                                        {el}
                                                    </span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className = "flex items-center gap-5">
                                {contactData?.managerProfile?.image &&
                                    <Image
                                        src = {contactData?.managerProfile?.image} alt = "image" width = {64}
                                        height = {64} className = "rounded-full"
                                    />}
                                <div>
                                    <p>
                                        {contactData?.managerProfile.name}
                                    </p>
                                    <span className = "text-base text-secondary/70 dark:text-white/70">
                                        {contactData?.managerProfile.position}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className = "w-full">
                            <form onSubmit = {handleSubmit} className = "flex flex-col gap-5 md:gap-8">
                                <div>
                                    <input
                                        required
                                        className = "w-full border-b border-secondary dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none py-3.5"
                                        id = "name"
                                        type = "text"
                                        name = "name"
                                        value = {formData.name}
                                        onChange = {handleChange}
                                        placeholder = "Ваше имя"
                                    />
                                </div>
                                <div>
                                    <input
                                        required
                                        className = "w-full border-b border-secondary dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none py-3.5"
                                        id = "email"
                                        type = "email"
                                        name = "email"
                                        value = {formData.email}
                                        onChange = {handleChange}
                                        placeholder = "Ваш еmail"
                                    />
                                </div>
                                <div>
                                    <input
                                        required
                                        className = "w-full border-b border-secondary dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none py-3.5"
                                        id = "message"
                                        type = "text"
                                        name = "message"
                                        value = {formData.message}
                                        onChange = {handleChange}
                                        placeholder = "Опишите кратко, что бы вы хотели построить?"
                                    />
                                </div>
                                {submitted && (
                                    <div className = "flex gap-1.5">
                                        <div className = "bg-primary w-fit p-1 sm:p-1.5 rounded-full flex-shrink-0">
                                            <Image
                                                src = {"/images/Icon/right-check.svg"} alt = "right-check" width = {20}
                                                height = {20}
                                            />
                                        </div>
                                        <p className = "text-secondary">
                                            Великолепно!!! Сообщение успешно отправлено. Я свяжусь с вами как можно скорее.
                                        </p>
                                    </div>
                                )}
                                <div>
                                    {!loader ? (
                                        <button
                                            className = "group relative flex justify-center items-center w-full bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                                            type = "submit"
                                        >
                                            <span
                                                className = "py-4 px-2 text-lg font-bold text-secondary group-hover:text-white transition-all duration-300 ease-in-out"
                                            >
                                                Отправить сообщение
                                            </span>
                                            <div
                                                className = "absolute top-0.5 right-0.5 transition-all duration-300 ease-in-out group-hover:left-0"
                                            >
                                                <svg
                                                    className = "flex items-center transition-transform duration-300 ease-in-out group-hover:rotate-45"
                                                    width = "58" height = "58" viewBox = "0 0 58 58" fill = "none"
                                                    xmlns = "http://www.w3.org/2000/svg"
                                                >
                                                    <g filter = "url(#filter0_d_1_873)">
                                                        <rect
                                                            x = "3" y = "2" width = "52" height = "52" rx = "26"
                                                            fill = "white"
                                                        />
                                                        <path
                                                            d = "M24 23H34M34 23V33M34 23L24 33" stroke = "#1F2A2E"
                                                            strokeWidth = "1.5" strokeLinecap = "round"
                                                            strokeLinejoin = "round"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <filter
                                                            id = "filter0_d_1_873" x = "0" y = "0" width = "58"
                                                            height = "58" filterUnits = "userSpaceOnUse"
                                                            colorInterpolationFilters = "sRGB"
                                                        >
                                                            <feFlood floodOpacity = "0" result = "BackgroundImageFix" />
                                                            <feColorMatrix
                                                                in = "SourceAlpha" type = "matrix"
                                                                values = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result = "hardAlpha"
                                                            />
                                                            <feOffset dy = "1" />
                                                            <feGaussianBlur stdDeviation = "1.5" />
                                                            <feComposite in2 = "hardAlpha" operator = "out" />
                                                            <feColorMatrix
                                                                type = "matrix"
                                                                values = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                                            />
                                                            <feBlend
                                                                mode = "normal" in2 = "BackgroundImageFix"
                                                                result = "effect1_dropShadow_1_873"
                                                            />
                                                            <feBlend
                                                                mode = "normal" in = "SourceGraphic"
                                                                in2 = "effect1_dropShadow_1_873" result = "shape"
                                                            />
                                                        </filter>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </button>
                                    ) : (
                                        <button className = "bg-grey item-center flex gap-2 py-3 px-7 rounded">
                                            <div
                                                className = "animate-spin inline-block size-6 border-2 border-current border-t-transparent text-primary rounded-full dark:text-primary"
                                                role = "status"
                                                area-label = "loading"
                                            >
                                                <span className = "sr-only">
                                                    Загрузка...
                                                </span>
                                            </div>
                                            {" "}
                                            Отправка
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contacts;