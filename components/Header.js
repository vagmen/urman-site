import React, { Component } from 'react';
import Link from 'next/link';
import { Button } from 'antd';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
        };
    }

    checkScrolled = () => {
        const scrolled =
            window.pageYOffset || document.documentElement.scrollTop;
        this.setState({
            isScrolled: !!scrolled,
        });
    };

    render() {
        const { isScrolled } = this.state;
        return (
            <div className={`header ${isScrolled ? `` : `transparent`}`}>
                <Link href="/">
                    <div className="header-name">
                        <span className="logo">URMAN</span>
                        <span className="slogan">
                            Комплексные лесные решения
                        </span>
                    </div>
                </Link>
                <div className="menu-trigger">
                    <Button icon="bars">Меню</Button>
                </div>
                <div className="menu">
                    <Link href="/clients">
                        <a className="menu-item">Клиенты</a>
                    </Link>
                    <Link href="/service">
                        <a className="menu-item">Услуги</a>
                    </Link>
                    <Link href="/why-urman">
                        <a className="menu-item">Почему URMAN</a>
                    </Link>
                    <Link href="/about">
                        <a className="menu-item">О нас</a>
                    </Link>
                    <Link href="/blog">
                        <a className="menu-item">Журнал</a>
                    </Link>
                    <Link href="/contacts">
                        <a className="menu-item">Контакты</a>
                    </Link>
                </div>
                <style jsx>{`
                    .header {
                        display: flex;
                        justify-content: space-between;
                        color: black;
                        align-items: center;
                        padding: 0 20px;
                        top: 0;
                        z-index: 1;
                        width: 100%;
                        background-color: white;
                        border-bottom: 1px solid #d5d5d5;
                    }
                    .header.transparent {
                        background-color: transparent;
                        border-bottom-color: transparent;
                    }
                    .header-name {
                        display: flex;
                        flex-direction: column;
                    }
                    .logo {
                        font-size: 32px;
                        letter-spacing: 3px;
                        font-family: Geneva, Arial, Helvetica, sans-serif;
                        cursor: pointer;
                        height: 32px;
                    }
                    .menu-trigger {
                        display: flex;
                    }
                    .menu {
                        display: none;
                    }
                    .menu-item {
                        color: #444;
                        font-size: 15px;
                        padding: 4px 6px;
                        border-radius: 3px;
                    }
                    .menu-item:hover {
                        background: rgba(0, 0, 0, 0.05);
                    }
                    @media screen and (min-width: 750px) {
                        .menu-trigger {
                            display: none;
                        }
                        .menu {
                            display: flex;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Header;
