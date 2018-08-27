import React, { Component } from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { escapeComponent } from 'uri-js';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isScrolled: true,
        };

        if (typeof window !== 'undefined') {
            this.checkScrolled();
            window.addEventListener('scroll', (e) => {
                this.checkScrolled();
            });
        }
    }

    checkScrolled = () => {
        const scrolled =
            window.pageYOffset || document.documentElement.scrollTop;
        this.setState({
            isScrolled: !!scrolled,
        });
    };

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        const { isScrolled } = this.state;
        return (
            <div className={`header ${isScrolled ? `` : `transparent`}`}>
                <div className="header-name">
                    <span className="logo">URMAN</span>
                    <span className="slogan">Комплексные лесные решения</span>
                </div>
                <div className="menu-trigger">
                    <Button icon="bars">Меню</Button>
                </div>
                <div className="menu">
                    <Link href="/">
                        <a className="menu-item">Главная</a>
                    </Link>
                    <Link href="/about">
                        <a className="menu-item">О нас</a>
                    </Link>
                    <Link href="/blog">
                        <a className="menu-item">Блог</a>
                    </Link>
                </div>
                <style jsx>{`
                    .header {
                        display: flex;
                        justify-content: space-between;
                        color: black;
                        align-items: center;
                        padding: 0 20px;
                        position: fixed;
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
