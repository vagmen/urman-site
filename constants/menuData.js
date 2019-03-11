export const mainMenu = [
    {
        name: "Клиенты",
        title: "Клиенты | URMAN - Лесные решения",
        icon: "team",
        src: "clients",
        description: "От глобальных лидеров до быстрорастущих стартапов, сотни компаний полагаются на URMAN.",
        isMainMenu: true,
        children: [
            {
                title: "Видео клиентов",
                src: "video",
                description: "Видео клиентов"
            },
            {
                title: "Отзывы",
                src: "otzyvy",
                description: "Отзывы"
            },
            {
                title: "Статистика и показатели",
                src: "statistika-i-pokazateli",
                description: "Статистика и показатели"
            }
        ]
    },
    {
        name: "Услуги",
        title: "Услуги | URMAN - Лесные решения",
        icon: "key",
        src: "uslugi",
        description:
            "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка",
        isMainMenu: true
    },
    {
        name: "О нас",
        title: "О нас | URMAN - Лесные решения",
        icon: "idcard",
        src: "o-nas",
        description:
            "Мы сплоченная команда из 15 человек. Решаем поставленные задачи по всей России — начиная от разработки проектов освоения лесов и заканчивая разработкой лесных планов субъектов РФ.",
        isMainMenu: true
    },
    {
        name: "Журнал",
        title: "Журнал | URMAN - Лесные решения",
        icon: "book",
        src: "journal",
        description: "Про лес и не только",
        isMainMenu: true
    },
    {
        name: "Контакты",
        title: "Контакты | URMAN - Лесные решения",
        icon: "phone",
        src: "contacts",
        description:
            "У нас команда проверенных, грамотных и опытных штатных сотрудников. Мы за открытую коммуникацию. Пишите и звоните нам, будем рады!",
        isMainMenu: true
    },
    {
        name: "Соглашение",
        title: "Соглашение",
        icon: "phone",
        src: "agreement",
        description:
            "У нас команда проверенных, грамотных и опытных штатных сотрудников. Мы за открытую коммуникацию. Пишите и звоните нам, будем рады!",
        isMainMenu: false
    }
];

export const menuData = {
    clients: {
        video: "Видео клиентов",
        feedback: "Отзывы",
        stats: "Статистика и показатели"
        // geography: 'География проектов',
    },
    services: {
        pol: "Проект освоения лесов",
        pdlu: "Проектная документация лесного участка",
        cadastre: "Земельный кадастровый учет",
        reports: "Лесные отчеты",
        pathology: "Лесопатологическое обследование",
        examination: "Лесная экспертиза",
        taxation: "Таксация лесных участков",
        registration: "Полное оформление",
        water: "Оформление договора водопользования",
        regulation: "Лесохозяйственный регламент",
        plan: "Лесной план"
    }
};
export const servicesData = [
    {
        name: "Проект освоения лесов",
        img: "../../static/forest.jpg",
        id: "proekt-osvoeniya-lesov"
    },
    {
        name: "Проектная документация лесного участка",
        img: "../../static/forest2.jpg",
        id: "proektnaya-dokumentaciya-lesnogo-uchastka"
    }
    // {
    //     name: 'Земельный кадастровый учет',
    //     img: 'https://pp.userapi.com/c849028/v849028114/2ecdb/xhoIZASBdhg.jpg',
    //     id: 'cadastre',
    // },
    // {
    //     name: 'Лесные отчеты',
    //     img: 'https://pp.userapi.com/c840437/v840437449/3d0ca/INCijajQc4Q.jpg',
    //     id: 'reports',
    // },
    // {
    //     name: 'Лесопатологическое обследование',
    //     img: 'https://pp.userapi.com/c840437/v840437449/3d0ca/INCijajQc4Q.jpg',
    //     id: 'pathology',
    // },
    // {
    //     name: 'Лесная экспертиза',
    //     img: 'https://pp.userapi.com/c840437/v840437449/3d0ca/INCijajQc4Q.jpg',
    //     id: 'examination',
    // },
    // {
    //     name: 'Таксация лесных участков',
    //     img: 'https://pp.userapi.com/c840437/v840437449/3d0ca/INCijajQc4Q.jpg',
    //     id: 'taxation',
    // },
    // {
    //     name: 'Полное оформление',
    //     img: 'https://pp.userapi.com/c840437/v840437449/3d0ca/INCijajQc4Q.jpg',
    //     id: 'registration',
    // },
    // {
    //     name: 'Оформление договора водопользования',
    //     img: 'https://pp.userapi.com/c840437/v840437449/3d0ca/INCijajQc4Q.jpg',
    //     id: 'water',
    // },
    // {
    //     name: 'Лесохозяйственный регламент',
    //     img: 'https://pp.userapi.com/c840437/v840437449/3d0ca/INCijajQc4Q.jpg',
    //     id: 'regulation',
    // },
    // {
    //     name: 'Лесной план',
    //     img: 'https://pp.userapi.com/c840437/v840437449/3d0ca/INCijajQc4Q.jpg',
    //     id: 'plan',
    // },
];
