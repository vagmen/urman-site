import React, { Component } from 'react';
import Link from 'next/link';
import { Icon } from 'antd';

class Header extends Component {
    render() {
        return (
            <div className={`header ${true ? `` : `transparent`}`}>
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
                    {/* <span className="start-proj__button start-proj__button-text"> */}
                    <button className="start-proj__button start-proj__button-text">
                        Начать проект
                    </button>
                    {/* </span> */}
                    <span className="start-proj__button start-proj__button-icon">
                        <Icon type="plus" />
                    </span>
                </div>
                <style jsx global>{`
                    body {
                        font-size: 18px;
                    }
                    ul {
                        margin: 0;
                        padding: 0;
                    }

                    li {
                        list-style: none;
                    }
                    button {
                        border: none;
                    }
                    .centered {
                        display: flex;
                        justify-content: center;
                    }
                    .grid {
                        display: flex;
                         {
                            /* background: blue; */
                        }
                        flex-wrap: wrap;
                        margin: 0 -15px;
                    }
                    .grid__item {
                        margin: 15px;
                         {
                            /* padding: 10px; */
                        }
                        width: 100%;
                        background: #fff;
                        transition: all 0.4s;
                        cursor: pointer;
                    }
                    .grid__item:hover {
                        transform: translate(0, -20px);
                        box-shadow: 0 20px 35px 4px rgba(0, 0, 0, 0.3);
                    }
                    @media screen and (min-width: 750px) {
                        .grid__item {
                            width: calc(50% - 30px);
                        }
                    }
                    @media screen and (min-width: 1200px) {
                        .grid__item {
                            width: calc(100% / 3 - 30px);
                        }
                    }
                `}</style>
                <style jsx>{`
                    .header {
                        display: flex;
                        justify-content: space-between;
                        color: white;
                        align-items: center;
                        padding: 0 20px;
                        top: 0;
                        z-index: 1;
                        width: 100%;
                        background: rgba(0, 0, 0, 0.5);
                        height: 80px;
                        position: sticky;
                        top: 0;
                        z-index: 100;
                        box-sizing: border-box;
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
                        transition-duration: 1s;
                        transition-timing-function: ease;
                        transition-property: background-color, color, opacity;
                        font-weight: 700;
                        background: #f06060;
                    }
                    .start-proj__button:hover {
                        background: #fff;
                        color: #f06060;
                    }

                    .start-proj__button-text {
                        display: none;
                        font-size: 16px;
                    }
                    .start-proj__button-icon {
                         {
                            /* background-image: url(static/icons/tree.svg); */
                        }
                        width: 30px;
                        height: 30px;
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
                    }
                `}</style>
            </div>
        );
    }
}

export default Header;
