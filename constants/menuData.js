import { MdVpnKey, MdFace, MdContactPhone, MdLibraryBooks, MdHome } from "react-icons/md";

export const mainMenu = [
    {
        name: "Главная",
        title: "URMAN - Лесные решения",
        icon: MdHome,
        src: "",
        description:
            "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка",
        isMainMenu: true,
        hiddenInDesktop: true,
    },
    {
        name: "Услуги",
        title: "Услуги | URMAN - Лесные решения",
        icon: MdVpnKey,
        src: "services",
        description:
            "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка",
        isMainMenu: true,
    },
    {
        name: "О нас",
        title: "О нас | URMAN - Лесные решения",
        icon: MdFace,
        src: "about",
        description:
            "Мы сплоченная команда из 15 человек. Решаем поставленные задачи по всей России — начиная от разработки проектов освоения лесов и заканчивая разработкой лесных планов субъектов РФ.",
        isMainMenu: true,
    },
    {
        name: "Статьи",
        title: "Статьи | URMAN - Лесные решения",
        icon: MdLibraryBooks,
        src: "journal",
        description: "Про лес и не только",
        isMainMenu: true,
    },
    {
        name: "Контакты",
        title: "Контакты | URMAN - Лесные решения",
        icon: MdContactPhone,
        src: "contacts",
        description:
            "У нас команда проверенных, грамотных и опытных штатных сотрудников. Мы за открытую коммуникацию. Пишите и звоните нам, будем рады!",
        isMainMenu: true,
    },
    {
        name: "Соглашение",
        title: "Соглашение",
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
