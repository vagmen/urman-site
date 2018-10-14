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
                        <span className="slogan">ЛЕСНЫЕ РЕШЕНИЯ</span>
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
                        background: #eee;
                        font-family: Geneva, Arial, Helvetica, sans-serif;
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
                    h1 {
                        font-size: 48px;
                        font-weight: 500;
                        line-height: 48px;
                    }
                    a {
                        color: inherit;
                        text-decoration: underline;
                    }
                    a:hover {
                    }
                    .react-icons {
                        vertical-align: middle;
                    }
                    .page-content {
                        max-width: 1200px;
                        padding-top: 100px;
                        margin: 0 20px;
                    }
                    .centered {
                        display: flex;
                        justify-content: center;
                    }
                    .grid {
                        display: flex;
                        flex-wrap: wrap;
                        margin: 0 -15px;
                    }
                    .grid__item {
                        margin: 15px;
                        width: 100%;
                        background: #fff;
                        transition: all 0.4s;
                        cursor: pointer;
                    }
                    .grid__item:hover {
                        box-shadow: 0px 0px 35px 4px rgba(0, 0, 0, 0.3);
                    }
                    @media screen and (min-width: 750px) {
                        .grid__item {
                            width: calc(50% - 30px);
                        }
                        .grid__item:hover {
                            transform: translate(0, -20px);
                            box-shadow: 0 10px 35px 4px rgba(0, 0, 0, 0.3);
                        }
                        .page-content {
                            overflow-x: hidden;
                        }
                    }
                    @media screen and (min-width: 1200px) {
                        .grid__item {
                            width: calc(100% / 3 - 30px);
                        }
                        .page-content {
                            margin: 0 auto;
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
                        position: fixed;
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
                        cursor: pointer;
                    }
                    .logo {
                        font-size: 32px;
                        letter-spacing: 4px;
                        font-family: Geneva, Arial, Helvetica, sans-serif;
                        height: 32px;
                    }
                    .slogan {
                        font-size: 10px;
                        padding: 10px 0;
                        letter-spacing: 2.8px;
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
