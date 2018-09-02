import React, { Component } from 'react';
import Link from 'next/link';
import { Button } from 'antd';

const footerData = [
    {
        title: 'НАШИ УСЛУГИ',
        url: '',
        items: [
            {
                name: 'Проектная документация лесного участка',
                url: '',
            },
            {
                name: 'Земельный кадастровый учет',
                url: '',
            },
            {
                name: 'Проект освоения лесов',
                url: '',
            },
            {
                name: 'Лесные отчеты',
                url: '',
            },
            {
                name: 'Лесопатологическое обследование',
                url: '',
            },
            {
                name: 'Лесная экспертиза',
                url: '',
            },
            {
                name: 'Таксация лесных участков',
                url: '',
            },
            {
                name: 'Полное оформление',
                url: '',
            },
            {
                name: 'Оформление договора водопользования',
                url: '',
            },
            {
                name: 'Лесохозяйственный регламент',
                url: '',
            },
            {
                name: 'Лесной план',
                url: '',
            },
        ],
    },
    {
        title: 'ПОЧЕМУ URMAN',
        url: '',
        items: [
            {
                name: 'Проблемы, которые мы решаем',
                url: '',
            },
        ],
    },
    {
        title: 'О НАС',
        url: '',
        items: [
            {
                name: 'Карьера',
                url: '',
            },
            {
                name: 'Наши клиенты',
                url: '',
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
                {footerData.map((column, columnIndex) => {
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
                })}
                <style jsx>{`
                    footer {
                        background: url(https://www.techvalidate.com/assets/corp/header/home-bg-8ab16c51b18c37209e40ccd812f83fc6.png);
                        background-size: contain;
                        display: flex;
                        flex-wrap: wrap;
                        
                    }
                    .column{
                        flex 1 1 100%;
                        padding: 20px;
                    }
                    h5{
                        border-bottom: 1px solid #d5d5d5;
                        padding-bottom: 8px;
                        margin-bottom: 10px;
                        font-weight: 600;
                        font-size: 18px;
                    }
                    h5 a{
                        color: #2c2f88;
                    }
                    h5:hover, p:hover{
                        text-decoration: underline;
                    }
                    P{
                        margin: 5px 0;
                    }
                    p a{
                        font-size: 16px;
                        color: #2c2f88;
                    }
                    @media screen and (min-width: 1024px) {
                        footer{
                            padding-bottom: 64px;
                        }
                        .column{
                            flex: 1 1 33%
                        }
                    }
                `}</style>
            </footer>
        );
    }
}

export default Footer;
