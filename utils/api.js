import { notification } from "antd";

const FORM_TYPES = {
    default: {
        items: ["name", "phone"],
        required: ["phone"],
        name: "Форма стандартная",
    },
    side: {
        items: ["phone"],
        required: ["phone"],
        name: "Форма на раскрывающейся боковой панели",
    },
    p404: {
        items: ["phone"],
        required: ["phone"],
        name: "Форма на раскрывающейся боковой панели",
    },
    pageStart: {
        items: ["phone"],
        required: ["phone"],
        name: "Форма в шапке статьи",
    },
    pageEnd: {
        items: ["name", "phone", "comment"],
        required: ["phone"],
        name: "Форма в конце статьи",
    },
};

// export const sendLead = async ({ name = "", phone = "", formName = "" }) => {
export const sendLead = async ({ formType = "default" }) => {
    ym(51360247, "reachGoal", "feedback-form");
    const baseUrl1 = "http://vagmen.ru/urman/sendLeadToPfMail.php?";
    // const baseUrl2 = "http://vagmen.ru/urman/sendLeadToAmo.php?";
    const name = localStorage.getItem("name");
    const phone = localStorage.getItem("phone");
    const email = localStorage.getItem("email");
    const comment = localStorage.getItem("comment");
    const { pathname } = window.location;
    const url1 = `${baseUrl1}name=${name}&phone=${phone}&email=${email}&comment=${comment}&formName=${FORM_TYPES[formType].name}&pathname=${pathname}&`;
    // const url2 = `${baseUrl2}name=${name}&phone=${phone}&email=${email}&comment=${comment}&formName=${
    //     FORM_TYPES[formType].name
    // }&pathname=${pathname}&`;
    if (phone) {
        const res1 = await fetch(url1, {
            method: "get",
        });
        // const res2 = await fetch(url2, {
        //     method: "get"
        // });
    } else {
        notification.warning({
            message: `Внимание`,
            description: "Заполните, пожалуйста, поле",
        });
    }

    notification.success({
        message: `Получили Вашу заявку`,
        description: "В ближайшее время ответим Вам.",
    });
};

export const sendLeadNew = async ({ name = "", phone = "", email = "", comment = "" }) => {
    ym(51360247, "reachGoal", "feedback-form");
    const baseUrl1 = "http://vagmen.ru/urman/sendLeadToPfMail.php?";
    const { pathname } = window.location;
    const url1 = `${baseUrl1}name=${name}&phone=${phone}&email=${email}&comment=${comment}&pathname=${pathname}&`;
    const res1 = await fetch(url1, {
        method: "get",
    });

    if (res1) {
        notification.success({
            message: `Получили Вашу заявку`,
            description: "В ближайшее время ответим Вам.",
        });
    }
};
