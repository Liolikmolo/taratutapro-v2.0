import {NextResponse} from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Сергей Петров"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Анна Фёдорова"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "София Иванова"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Пётр Сергеев"
    },
];

const statsFactData = {
    number: '01',
    name: "Факты обо мне",
    heading: "Ваш дом и моя печь — тепло, что не стареет.",
    description: "Я — мастер-печник, занимаюсь строительством и ремонтом печей, каминов, барбекю и банных комплексов в Молодечно, Вилейке, Сморгони, Воложине, Мяделе, Минске.",
    scoreData: [
        {
            number: 100,
            numberValue: '',
            scoreDescr: "Столько клиентов в Минской области довольны моей работой"
        },
        {
            number: 15,
            scoreDescr: "Столько лет я занимаюсь кладкой надежных печей и каминов"
        },
        {
            number: 120,
            numberValue: '',
            scoreDescr: "Столько моих печей греют своих хозяев теплом огня"
        },
    ]
};

const servicesData = {
    number: '03',
    name: "Услуги",
    heading: "Чем я занимаюсь",
    description: "Я создаю печи, которые \"дышат\" вместе с вашим домом, печи, которые обнимают воздух и дарят жизнь теплу.",
    data: [
        {
            id: 1,
            image: "/images/home/services/services_1.png",
            heading: "Консультация и проектирование",
            descr: "Предлагаю каждому клиенту индивидуальный расчет печи, учитывающий особенности и требования клиента, с составлением проекта и полной сметы. Такой подход полностью исключает из моей работы принцип «на глазок»."
        },
        {
            id: 2,
            image: "/images/home/services/services_2.png",
            heading: "Строительство и ремонт печей",
            descr: "Кладу новые печи с полным соблюдением всех технологий печной кладки, а также провожу ремонтные работы, включая восстановление старых печей, замену частей и устранение повреждений. При этом работаю только с проверенными поставщиками материалов (кирпича, раствора, фурнитуры)."
        },
        {
            id: 3,
            image: "/images/home/services/services_3.png",
            heading: "Монтаж дымоходов",
            descr: "Провожу монтаж и обслуживание дымоходных систем, обеспечивающих эффективный вывод дымовых газов и соблюдение норм безопасности на вашем объекте."
        },
        {
            id: 4,
            image: "/images/home/services/services_4.png",
            heading: "Обслуживание печей",
            descr: "Даю на свою работу полную гарантию, включающую проверку, очистку и техническое обслуживание печей для предотвращения накопления загрязнений и обеспечения безопасного их использования. Всегда на связи со своими заказчиками."
        },
    ]
};

const testimonialData = {
    data_1: {
        preTitle: "Клиенты говорят...",
        title: "Заказывали у Алексея кладку камина и не пожалели. Все сделано в лучшем виде и безукоризненно!",
        author: "Игорь Иванов",
        company: "Молодечно"
    },
    data_2: {
        preTitle: "Клиенты говорят...",
        title: "Сотрудничали с Алексеем по кладке барбекю комплекса. Все работы выполнены на высоком уровне!",
        author: "Ольга Петрова",
        company: "Сморгонь"
    },
    data_3: {
        preTitle: "Клиенты говорят...",
        title: "Нужно было срочно построить печь в доме, обратились к Алексею — не пожалели! Все сделано оперативно и качественно!",
        author: "Андрей Смирнов",
        company: "Воложин"
    },
};

const teamData = {
    number: '06',
    data: [
        {
            image: "/images/home/team/team-img-1.png",
            name: "Martha Finley",
            position: "Creative Director",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-2.png",
            name: "Floyd Miles",
            position: "Marketing Strategist",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-3.png",
            name: "Glenna Snyder",
            position: "Lead Designer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-4.png",
            name: "Albert Flores",
            position: "UX/UI Developer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
    ]
};

const faqData = {
    data: [
        {
            faq_que: "Сколько стоит сложить печь или камин?",
            faq_ans: 'Да, в сегодняшних реалиях строительство печи или камина - это недешёвое удовольствие. Стоимость постройки печи или камина зависит от нескольких факторов. Прежде всего, это тип изделия (отопительная печь, варочная печь, комбинированная печь с камином и лежанкой и др.). Каждый из них имеет свою цену. Также на стоимость влияет материал, из которого будет строится печь или камин (кирпич, кафель или изразцы, металл). Кроме того, учитывается сложность проекта, регион, профессиональный уровень мастера. В среднем же, услуги по кладке стандартной печи могут стоить от 1 300 до 5 000 рублей и выше, а камина — от 1 500 до 6000 рублей и выше. В любом случае, всегда рекомендую заказчикам получить несколько смет от разных мастеров, чтобы понять, какой вариант будет самым оптимальным.'
        },
        {
            faq_que: "Как долго кладется печь?",
            faq_ans: 'Вопреки устоявшемуся мнению, стандартный процесс кладки печи составляет примерно 5-6 рабочих дней по 10-12 часов. Опытный мастер никогда не будет торопиться в этом деле, так как для получения идеального результата нужно соблюдать все достаточно непростые технологические процессы. Если мастер предлагает вам сложить печь за 2-3 дня - это не тот мастер, который вам нужен!'
        },
        {
            faq_que: "Составляете ли вы проект печи или камина?",
            faq_ans: 'Да, для каждого клиента я составляю детальный проект по строительству печи или камина, в котором всегда указана окончательная стоимость моих услуг, а также полная смета по материалам, необходимым для строительства того или иного вида печного прибора.'
        },
        {
            faq_que: "Помогаете ли вы с закупкой материалов?",
            faq_ans: 'Да. Я совершенно бесплатно формирую для каждого клиента полную смету материалов, необходимых для строительства печи или камина, рекомендую проверенных поставщиков и партнеров, занимающихся реализацией печных материалов. Как правило, у них всегда есть возможность доставки материалов на объект, услуги предварительного хранения, скидки, акции и т.п.'
        },
        {
            faq_que: "Даете ли вы гарантию на свою работу?",
            faq_ans: 'Да, я даю гарантию на все свои работы в течение 3 лет. Кроме того, я осущевляю постгарантийное обслуживание возведенных мной печей или каминов. Все мои заказчики становятся моими постоянными клиентами.'
        },
        {
            faq_que: "В каких регионах вы работаете?",
            faq_ans: 'Я работаю в Молодечненском, Вилейском, Мядельском, Воложинском, Сморгонском, Минском районах. Также могу выезжать в командировки по всей стране.'
        }
    ]
};
const contactData = {
    keypoint: ["Always-On Customer Support", "Service Across the Globe"],
    managerProfile: {
        image: "/images/avatar/avatar_1.jpg",
        name: "Courtney Henry",
        position: "Onboarding & Success Manager"
    }
}

const aboutUsStats = [
    {
        number: 45,
        postfix: "+",
        title: 'Presence in global markets',
        descr: "Expanding reach across international regions with localized expertise and worldwide impact."
    },
    {
        number: 15,
        prefix: "$",
        postfix: "M",
        title: 'In strategic investments',
        descr: "Driving growth with curated partnerships and high-performing, audience-driven initiatives."
    },
    {
        number: 158,
        postfix: "+",
        title: 'Trusted brand collaborations',
        descr: "Shaping industry conversations through innovation, creativity, and lasting influence."
    },
]

const servicesSliderData = [
    "Branding", "Web development", "Agency", "Content creation", "SaaS", "Motion & 3d modeling", "Photography"
]

export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        faqData,
        contactData,
        aboutUsStats,
        servicesSliderData
    });
};