import React, { Component } from 'react';
import Link from 'next/link';
import { Icon } from 'antd';
import { mainMenu } from '../constants/menuData';
import { grey } from '../constants/colors';

class Menu extends Component {
    render() {
        return (
            <ul className="menu">
                {mainMenu.map(
                    (item, index) =>
                        item.isMainMenu && (
                            <Link prefetch key={index} href={`/${item.src}`}>
                                <li
                                    className={`menu-item ${
                                        this.props.menuItem === item.src ? `menu-item_active` : ``
                                    }`}
                                >
                                    <Icon className="icon" type={item.icon} style={{ color: '#eee', fontSize: 25 }} />
                                    <a>{item.name}</a>
                                </li>
                            </Link>
                        )
                )}
                <style jsx>{`
                    .menu {
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        bottom: 0;
                        z-index: 100;
                        width: 100%;
                        background-color: ${grey};
                        position: fixed;
                    }
                    .menu-item {
                        list-style-type: none;
                        flex: 1 1 0;
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        flex-direction: column;
                        padding: 20px 10px;
                        cursor: pointer;
                        transition: all 0.4s;
                    }
                    .menu-item a {
                        text-align: center;
                        text-transform: uppercase;
                        color: #fff;
                        font-weight: 100;
                        white-space: nowrap;
                        display: none;
                        font-size: 10px;
                        padding-top: 5px;
                        text-decoration: none;
                        margin: 0;
                    }
                    .menu-item:hover {
                        background: rgba(255, 255, 255, 0.1);
                    }
                    .menu-item_active {
                        background: rgba(255, 255, 255, 0.2);
                    }
                    @media (min-width: 640px) {
                        .menu-trigger {
                            display: none;
                        }
                        .menu {
                            display: flex;
                        }
                        .menu-item {
                            padding: 10px;
                        }
                        .menu-item a {
                            display: block;
                            font-size: 12px;
                        }
                    }
                    @media (min-width: 960px) {
                        .menu {
                            top: 0;
                            bottom: auto;
                            left: 300px;
                            width: calc(100% - 600px);
                            background: none;
                        }
                        .menu-item {
                            padding: 15px;
                        }
                        .menu-item a {
                            font-size: 14px;
                            color: #fff;
                        }
                    }
                `}</style>
            </ul>
        );
    }
}

export default Menu;
