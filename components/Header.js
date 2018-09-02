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
                <div className="start-proj">
                    <span className="start-proj__phone">
                        +7 347 <strong>298-34-86</strong>
                    </span>
                    <span className="start-proj__button start-proj__button-text">
                        Начать проект
                    </span>
                    <span className="start-proj__button start-proj__button-icon">
                        +
                    </span>
                </div>
                {/* <div className="menu-trigger">
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
                </div> */}
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
                    .start-proj {
                    }
                    .start-proj__phone {
                        display: none;
                    }
                    .start-proj__button {
                        margin-left: 20px;
                        color: #fff;
                        padding: 10px 14px;
                        border-radius: 20px;
                        cursor: pointer;
                        transition-duration: 0.4s;
                        transition-timing-function: ease;
                        transition-property: background-color, color, opacity;
                        font-weight: 700;
                        background: #f06060;
                    }
                    .start-proj__button:hover {
                        background: rgba(240, 96, 96, 0.5);
                    }

                    .start-proj__button-text {
                        display: none;
                    }
                    .start-proj__button-icon {
                        background-image: url(../images/icons/tree.svg);
                        width: 30px;
                        height: 30px;
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
                    @media screen and (min-width: 500px) {
                        .start-proj__button-icon {
                            display: none;
                        }
                        .start-proj__button-text {
                            display: inline;
                        }
                    }
                    @media screen and (min-width: 750px) {
                        .start-proj__phone {
                            display: inline;
                        }

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
