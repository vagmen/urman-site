import React, { Component } from "react";
import { FaVk, FaSkype, FaInstagram } from "react-icons/fa";
import { mainColorMid, mainColorDark, mainColorLight, grey } from "../constants/colors";

const footerData = [
    {
        title: "НАШИ УСЛУГИ",
        url: "",
        items: [
            {
                name: "Проектная документация лесного участка",
                url: "",
            },
            {
                name: "Земельный кадастровый учет",
                url: "",
            },
            {
                name: "Проект освоения лесов",
                url: "",
            },
            {
                name: "Лесные отчеты",
                url: "",
            },
            {
                name: "Лесопатологическое обследование",
                url: "",
            },
            {
                name: "Лесная экспертиза",
                url: "",
            },
            {
                name: "Таксация лесных участков",
                url: "",
            },
            {
                name: "Полное оформление",
                url: "",
            },
            {
                name: "Оформление договора водопользования",
                url: "",
            },
            {
                name: "Лесохозяйственный регламент",
                url: "",
            },
            {
                name: "Лесной план",
                url: "",
            },
        ],
    },
    {
        title: "ПОЧЕМУ URMAN",
        url: "",
        items: [
            {
                name: "Проблемы, которые мы решаем",
                url: "",
            },
        ],
    },
    {
        title: "О НАС",
        url: "",
        items: [
            {
                name: "Карьера",
                url: "",
            },
            {
                name: "Наши клиенты",
                url: "",
            },
        ],
    },
];

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                {/* {footerData.map((column, columnIndex) => {
                    const columnItems = column.items.map((item, itemIndex) => (
                        <p key={itemIndex}>
                            <a href={item.url}>{item.name}</a>
                        </p>
                    ));
                    return (
                        <div key={columnIndex} className="column">
                            <h5>
                                <a href={column.url}>{column.title}</a>
                            </h5>
                            {columnItems}
                        </div>
                    );
                })} */}
                <div className="footer-column">Напишите или позвоните нам:</div>
                <div className="footer-column">
                    <p>+7 (347) 298-34-86</p>
                </div>
                <div className="footer-column">
                    <p>
                        <a href="mailto:proekt@urman.su">proekt@urman.su</a>
                    </p>
                </div>
                <div className="footer-column icons">
                    <p>
                        <a href="skype:vagmen?chat">
                            <FaSkype />
                        </a>
                        <a href="https://vk.com/urman_su" target="_blank" rel="noopener noreferrer">
                            <FaVk />
                        </a>
                        <a href="https://www.instagram.com/urman.su" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </p>
                </div>
                <style jsx>{`
                    footer {
                        display: flex;
                        background: ${grey};
                        color: #fff;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    .footer-column {
                        flex: 1 1 100%;
                        margin: 12px;
                        font-size: 14px;
                    }
                    .footer-column p {
                        margin: 0;
                    }
                    a:hover {
                        color: ${mainColorLight};
                    }
                    .icons {
                        display: flex;
                    }
                    .icons p a {
                        margin-right: 12px;
                    }
                    @media (min-width: 640px) {
                        .footer-column {
                            flex: 0 0 auto;
                            font-size: 16px;
                            padding: 24px;
                        }
                    }
                `}</style>
            </footer>
        );
    }
}

export default Footer;
