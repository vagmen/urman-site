import React, { Component } from 'react';
import Link from 'next/link';
import { Button, Icon } from 'antd';

const menuData = [
    {
        title: 'Клиенты',
        icon: 'team',
        src: 'clients',
    },
    {
        title: 'Услуги',
        icon: 'key',
        src: 'services',
    },
    {
        title: 'О нас',
        icon: 'idcard',
        src: 'about',
    },
    {
        title: 'Журнал',
        icon: 'book',
        src: 'journal',
    },
    {
        title: 'Контакты',
        icon: 'phone',
        src: 'contacts',
    },
];

class Menu extends Component {
    render() {
        return (
            <ul className="menu">
                {menuData.map((item, index) => (
                    <Link key={index} href={`/${item.src}`}>
                        <li
                            className={`menu-item ${
                                this.props.menuItem === item.src
                                    ? `menu-item_active`
                                    : ``
                            }`}
                        >
                            <Icon
                                className="icon"
                                type={item.icon}
                                style={{ color: '#bbb', fontSize: 25 }}
                            />
                            <a>{item.title}</a>
                        </li>
                    </Link>
                ))}
                <style jsx>{`
                    .menu {
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: space-between;
                        color: black;
                        align-items: center;
                        bottom: 0;
                        z-index: 100;
                        width: 100%;
                        background-color: #1e1435;
                        position: fixed;
                    }
                    .menu-item {
                        list-style-type: none;
                        flex: 1 1 0;
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        flex-direction: column;
                        padding: 10px;
                        cursor: pointer;
                    }
                    .menu-item .icon {
                    }
                    .menu-item a {
                        text-align: center;
                        text-transform: uppercase;
                        color: #bbb;
                        font-weight: 100;
                        white-space: nowrap;
                        display: none;
                        font-size: 10px;
                        padding-top: 5px;
                    }
                    .menu-item:hover {
                        background: rgba(255, 255, 255, 0.1);
                    }
                    .menu-item_active {
                        background: rgba(255, 255, 255, 0.2);
                    }
                    @media screen and (min-width: 750px) {
                        .menu-trigger {
                            display: none;
                        }
                        .menu {
                            display: flex;
                        }
                        .menu-item a {
                            display: block;
                        }
                    }
                `}</style>
            </ul>
        );
    }
}

export default Menu;
