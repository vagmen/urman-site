import { notification } from "antd";

const FORM_TYPES = {
    default: {
        items: ["name", "phone"],
        required: ["phone"],
        name: "Форма стандартная",
    },
    header: {
        items: ["name", "phone"],
        required: ["phone"],
        name: "Форма в заголовке страницы",
    },
    side: {
        items: ["phone"],
        required: ["phone"],
        name: "Форма на раскрывающейся боковой панели",
    },
};

// export const sendLead = async ({ name = "", phone = "", formName = "" }) => {
export const sendLead = async ({ formType = "default" }) => {
    const baseUrl = "http://vagmen.ru/urman/sen.php?";
    const name = localStorage.getItem("leadName");
    const phone = localStorage.getItem("leadPhone");
    const email = localStorage.getItem("leadEmail");
    const comment = localStorage.getItem("leadComment");
    const formName = localStorage.getItem("formName");
    const { pathname } = window.location;
    const url = `${baseUrl}name=${name}&phone=${phone}&email=${email}&formName=${
        FORM_TYPES[formType].name
    }&pathname=${pathname}&`;
    if (phone) {
        const res = await fetch(url, {
            method: "get",
        });
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
