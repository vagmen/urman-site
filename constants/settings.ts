export const pageWidth = `1200px`;
export const postWidth = `1000px`;
export const pageWidthPhones = `320px`;
export const pageWidthTablets = `800px`;
export const pageWidthDesktopsSmall = `1024px`;
export const pageWidthDesktopsMedium = `1280px`;
export const pageWidthDesktopsLarge = `1600px`;
export const pageWidthDesktopsExtraLarge = `1920px`;

export const API_URL = "https://admin.urman.su";

export const segments = [
    {
        title: "Государственным заказчикам",
        description:
            "Выполняем комплексные решения по вопросам лесного планирования и лесопользования федерального значения",
        link: "werw",
    },
    {
        title: "Лесозаготовителям",
        description: [
            "Первичный анализ участка",
            "Таксация",
            "Представление интересов в суде по внесению изменений в договор аренды",
            "Ведение ЛесЕГАИС",
        ],
        link: "werw",
    },
    {
        title: "Рекреация",
        description: ["Оформим участок по всей России", "Расскажем о нюансах ведения бизнеса на лесных землях"],
        link: "werw",
    },
    {
        title: "Промышленность",
        description: "ГазПром, Роснефть, РЖД выбирают нас",
        children: [
            { title: "Нефтяным компаниям", link: "sdfsdf" },
            { title: "Энергетическим компания", link: "sdfsdf" },
            { title: "Дорожным компания", link: "sdfsdf" },
            { title: "Геология", link: "sdfsdf" },
        ],
    },
    {
        title: "Фермерство",
        description: "Помогаем оформлять документы и вести деятельность на лесном участке",
        children: [
            { title: "Пчеловодство", link: "sdfsdf" },
            { title: "Выпас скота", link: "sdfsdf" },
            { title: "Сенокос", link: "sdfsdf" },
        ],
    },

    {
        title: "Иные виды пользования",
        description: [
            "Охотничье хозяйство",
            "Сбор недревесных лесных ресурсов",
            "Сбор лекарственных растений",
            "И другие",
        ],
        link: "werw",
    },
];
