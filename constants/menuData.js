export const mainMenu = [
    // {
    //     name: "Клиенты",
    //     title: "Клиенты | URMAN - Лесные решения",
    //     icon: "team",
    //     src: "clients",
    //     description: "От глобальных лидеров до быстрорастущих стартапов, сотни компаний полагаются на URMAN.",
    //     isMainMenu: true,
    //     children: [
    //         {
    //             title: "Видео клиентов",
    //             src: "video",
    //             description: "Видео клиентов"
    //         },
    //         {
    //             title: "Отзывы",
    //             src: "feedback",
    //             description: "Отзывы"
    //         },
    //         {
    //             title: "Статистика и показатели",
    //             src: "stats",
    //             description: "Статистика и показатели"
    //         }
    //     ]
    // },
    {
        name: "Услуги",
        title: "Услуги | URMAN - Лесные решения",
        icon: "key",
        src: "services",
        description:
            "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка",
        isMainMenu: true,
    },
    {
        name: "О нас",
        title: "О нас | URMAN - Лесные решения",
        icon: "idcard",
        src: "about",
        description:
            "Мы сплоченная команда из 15 человек. Решаем поставленные задачи по всей России — начиная от разработки проектов освоения лесов и заканчивая разработкой лесных планов субъектов РФ.",
        isMainMenu: true,
    },
    {
        name: "Журнал",
        title: "Журнал | URMAN - Лесные решения",
        icon: "book",
        src: "journal",
        description: "Про лес и не только",
        isMainMenu: true,
    },
    {
        name: "Контакты",
        title: "Контакты | URMAN - Лесные решения",
        icon: "phone",
        src: "contacts",
        description:
            "У нас команда проверенных, грамотных и опытных штатных сотрудников. Мы за открытую коммуникацию. Пишите и звоните нам, будем рады!",
        isMainMenu: true,
    },
    {
        name: "Соглашение",
        title: "Соглашение",
        icon: "phone",
        src: "agreement",
        description:
            "У нас команда проверенных, грамотных и опытных штатных сотрудников. Мы за открытую коммуникацию. Пишите и звоните нам, будем рады!",
        isMainMenu: false,
    },
];

export const menuData = {
    clients: {
        video: "Видео клиентов",
        feedback: "Отзывы",
        stats: "Статистика и показатели",
        // geography: 'География проектов',
    },
};
export const servicesData = [
    {
        name: "Проект освоения лесов",
        img: "/static/forest.webp",
        id: "proekt-osvoeniya-lesov",
        title: "Проект освоения лесов 🌳 Разработка, состав, экспертиза, стоимость по России",
        description:
            "Разработаем проект освоения лесов на арендованный вами участок. Гарантия прохождения экспертизы. В соответствии с требованиями законодательства к порядку разработки и срокам действия. Если хотите узнать стоимость - звоните! Цена Вас приятно удивит.",
    },
    {
        name: "Проектная документация лесного участка",
        img: "/static/forest2.jpg",
        id: "proektnaya-dokumentaciya-lesnogo-uchastka",
        title: "Проектная документация лесного участка 🍁 разработка, содержание по России",
        description:
            "Подготовим для Вас проектную документация лесного участка по всем требованиям. Составим проектую документацию по всем требованиям действующего законодательства, приказа и с учётом пожеланий заказчика. Опыт работы в лесной сфере позволяет давать гарантии при утверждении проектной документации.",
    },
    {
        name: "Аренда лесного участка",
        img: "/static/arenda.webp",
        id: "arenda-lesnogo-uchastka",
        title:
            "Аренда лесного участка 🌳 Заключение и регистрация договора аренды, внесение изменений в договор аренды",
        description:
            "Базовые условия, необходимые для заключения договора аренды. Аренда лесного участка без торгов. Аренда лесного участка по результатам аукциона. Заключение и регистрация договора аренды. Срок действия договора аренды. Если хотите узнать стоимость - звоните! Цена Вас приятно удивит.",
    },
    {
        name: "Лесоустройство и таксация",
        img: "/static/images/services/lesoustrojstvo-i-taksaciya.webp",
        id: "lesoustrojstvo-i-taksaciya",
        title: "Лесоустройство и таксация 🌳 Оказание услуг по лесоустройству, отвод и таксация лесосек",
        description:
            "Что такое таксация? Кто может проводить лесоустройство? Как проводится таксация лесов? Отвод и таксация лесосек",
    },
    {
        name: "Лесопатологическое обследование",
        img: "/static/images/services/lesopatologicheskoe-obsledovanie.webp",
        id: "lesopatologicheskoe-obsledovanie",
        title:
            "Лесопатологическое обследование 🐞 Заключение и регистрация договора аренды, внесение изменений в договор аренды",
        description:
            "Повреждения лесных насаждений. Что такое лесопатологическое обследование? В чём заключается проведение ЛПО? Когда проводятся ЛПО? Способы проведения ЛПО. Акт лесопатологического обследования",
    },
    {
        name: "Лесной план",
        img: "/static/images/services/lesnoj-plan.webp",
        id: "lesnoj-plan",
        title: "Лесной план 🍀 Разработка, согласование, внесение изменений, стоимость по России",
        description:
            "Что такое лесной план? Кто может разрабатывать лесные планы? С кем нужно согласовывать лесной план? Что содержится в лесном плане? Внесение изменений в лесной план. На что влияет лесной план?",
    },
    {
        name: "Лесохозяйственный регламент",
        img: "/static/images/services/lesokhozyajstvennyj-reglament.webp",
        id: "lesokhozyajstvennyj-reglament",
        title: "Лесохозяйственный регламент 🌿 Разработка, согласование, внесение изменений, стоимость по России",
        description:
            "Что такое лесной план? Кто может разрабатывать лесные планы? С кем нужно согласовывать лесной план? Что содержится в лесном плане? Внесение изменений в лесной план. На что влияет лесной план?",
    },
    {
        name: "Кадастровый учёт лесных участков",
        img: "/static/images/services/roel-van-sabben-vgnq_1mTubY-unsplash.webp",
        id: "kadastrovyj-uchyot-lesnykh-uchastkov",
        title: "Кадастровый учёт лесных участков 🌿 Кадастровый номер. Выписка из ЕГРН",
        description:
            "Что такое государственный кадастровый учёт? Как происходит постановка лесных участков на кадастровый учёт? Особенности постановки лесных участков на кадастровый учёт. Как получить выписку из ЕГРН?",
    },
    {
        name: "Проект лесовосстановления",
        img: "/static/images/services/plv-1.jpg",
        id: "proekt-lesovosstanovleniya",
        title: "Проект лесовосстановления 🌿 Компенсационное лесовосстановление",
        description: "Способы лесовосстановления. Порядок проведения компенсационного лесовосстановления",
    },

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
    //     name: 'Лесная экспертиза',
    //     img: 'https://pp.userapi.com/c840437/v840437449/3d0ca/INCijajQc4Q.jpg',
    //     id: 'examination',
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
];
