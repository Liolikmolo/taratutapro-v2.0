import {NextResponse} from "next/server";

const MenuData = [
    {
        id: 1,
        title: "Главная",
        path: "/",
        newTab: false,
    },
    {
        id: 2,
        title: "Обо мне",
        path: "/about-me",
        newTab: false,
    },
    {
        id: 3,
        title: "Мои работы",
        path: "/projects",
        newTab: false,
    },
    {
        id: 4,
        title: "Записки печника",
        path: "/blog",
        newTab: false,
    },
    {
        id: 5,
        title: "Мои услуги",
        path: "/#services",
        newTab: false,
    },
    {
        id: 6,
        title: "Контакты",
        path: "/contacts",
        newTab: false,
    },
]

const footerData = {
    name: "Мастер-печник Алексей Таратута",
    tagline: "Построим что-нибудь вместе?",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "info@taratuta.pro",
            href: "https://www.taratuta.pro/"
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Молодечно, Минская область, Беларусь",
            href: "https://yandex.by/maps/-/CPupAHj2"
        }
    ],
    links: [
        {name: "Главная", href: "/"},
        {name: "Обо мне", href: "/about-me"},
        {name: "Услуги", href: "/#services"},
        {name: "Мои работы", href: "/projects"},
    ],
    socialLinks: [
        {name: "Facebook", href: "https://www.facebook.com/aleksejpechnik/"},
        {name: "Instagram", href: "https://www.instagram.com/aleksej_pechnik/?hl=ru"},
    ],
    copyright: "© Мастер-печник Алексей Таратута. 2026"
}

export const GET = async () => {
    return NextResponse.json({
        MenuData,
        footerData,
    })
}