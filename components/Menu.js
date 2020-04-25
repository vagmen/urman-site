import React, { Component } from "react";
import Link from "next/link";
import { mainMenu } from "../constants/menuData";
import { greyDark } from "../constants/colors";

class Menu extends Component {
    render() {
        const { headerOpacity } = this.props;
        return (
            <ul className="menu">
                {mainMenu.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        item.isMainMenu && (
                            <Link prefetch key={index} href={`/${item.src}`} passHref>
                                <li
                                    className={`menu-item ${
                                        this.props.menuItem === item.src ? `menu-item_active` : ``
                                    }`}
                                >
                                    <Icon className="icon" style={{ color: "#eee", fontSize: 25 }} />
                                    <a>{item.name}</a>
                                </li>
                            </Link>
                        )
                    );
                })}
                <style jsx>{`
                    @keyframes appearance-of-menu {
                        from {
                            opacity: ${headerOpacity ? 0 : 1};
                            transform: translateY(${headerOpacity ? "-100px" : "0px"});
                        }
                        67% {
                            opacity: ${headerOpacity ? 0 : 1};
                            transform: translateY(${headerOpacity ? "-100px" : "0px"});
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0px);
                        }
                    }
                    @keyframes appearance-of-menu-mobile {
                        from {
                            opacity: ${headerOpacity ? 0 : 1};
                            transform: translateY(${headerOpacity ? "100px" : "0px"});
                        }
                        67% {
                            opacity: ${headerOpacity ? 0 : 1};
                            transform: translateY(${headerOpacity ? "100px" : "0px"});
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0px);
                        }
                    }
                    .menu {
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        bottom: 0;
                        z-index: 100;
                        width: 100%;
                        background-color: ${greyDark};
                        position: fixed;
                        transition: all 0.4s;
                        animation: appearance-of-menu-mobile 2.5s ease-out;
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
                    .icon {
                        margin: 0 auto;
                    }
                    .menu-item:hover {
                        background: rgba(255, 255, 255, 0.1);
                    }
                    .menu-item_active {
                        background: rgba(255, 255, 255, 0.2);
                    }
                    @media (max-height: 400px) {
                        .menu {
                            bottom: -80px;
                        }
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
                            animation: appearance-of-menu 2.5s ease-out;
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
