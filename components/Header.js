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
                    <button className="start-proj__button start-proj__button-text">Начать проект</button>
                    {/* </span> */}
                    <span className="start-proj__button start-proj__button-icon">
                        <Icon type="plus" />
                    </span>
                </div>
                <style jsx global>{`
                    @import url('https://fonts.googleapis.com/css?family=Rubik');
                    body {
                        font-size: 18px;
                        background: #eee;
                        font-family: Rubik, Helvetica, sans-serif;
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
                    .page-background {
                        display: flex;
                        justify-content: center;
                    }
                    .page-content {
                        flex: 1;
                        max-width: 1600px;
                        padding-top: 100px;
                        margin: 0 30px;
                        overflow: hidden;
                    }
                    .centered {
                        display: flex;
                        justify-content: center;
                    }
                    .grid,
                    .grid-with-menu {
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-gap: 30px;
                    }
                    .grid__item {
                        transition: all 0.3s;
                    }
                    .clickable-block {
                        cursor: pointer;
                    }
                    .clickable-block:hover {
                        box-shadow: 0px 0px 35px 4px rgba(0, 0, 0, 0.3);
                    }
                    .player-wrapper {
                        position: relative;
                        padding-top: 56.25%;
                    }
                    .react-player {
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                    .post {
                        color: rgba(0, 0, 0, 0.7);
                        max-width: 1000px;
                        margin: 0 auto;
                    }
                    .post h1,
                    .post h2,
                    .post h3,
                    .post h4,
                    .post h5,
                    .post h6 {
                        color: rgba(0, 0, 0, 0.7);
                    }

                    .post h1 {
                        font-size: 50px;
                        text-align: center;
                        padding: 50px 0;
                    }
                    .post h3 {
                        font-size: 30px;
                    }
                    .input-with-button {
                        display: flex;
                        justify-content: center;
                        margin-bottom: 1em;
                        flex-wrap: wrap;
                    }
                    .input-with-button input {
                        border: none;
                        border-top-left-radius: 24px;
                        border-top-right-radius: 24px;
                        padding: 10px;
                        flex: 100%;
                    }
                    .input-with-button button {
                        color: #fff;
                        padding: 10px 14px;
                        border-bottom-left-radius: 24px;
                        border-bottom-right-radius: 24px;
                        cursor: pointer;
                        transition-duration: 0.3s;
                        transition-timing-function: ease;
                        transition-property: background-color, color, opacity;
                        background: #f06060;
                        flex: 100%;
                    }
                    .input-with-button button:hover {
                        background: #fff;
                        color: #f06060;
                    }
                    @media screen and (min-width: 640px) {
                        .grid,
                        .grid-with-menu {
                            grid-template-columns: 1fr 1fr;
                        }
                        .clickable-block:hover {
                            transform: translate(0, -10px);
                            box-shadow: 0 10px 35px 4px rgba(0, 0, 0, 0.3);
                        }
                        .input-with-button input {
                            flex: 0 0 auto;
                            border-top-left-radius: 24px;
                            border-bottom-left-radius: 24px;
                            border-top-right-radius: 0px;
                        }
                        .input-with-button button {
                            flex: 0 0 auto;
                            border-top-right-radius: 24px;
                            border-bottom-right-radius: 24px;
                            border-bottom-left-radius: 0px;
                        }
                    }
                    @media screen and (min-width: 960px) {
                        .grid {
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                        .grid-with-menu {
                            grid-template-columns: 1fr 1fr;
                        }
                    }
                    @media screen and (min-width: 1200px) {
                        .grid {
                            grid-template-columns: 1fr 1fr 1fr 1fr;
                        }
                        .grid-with-menu {
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                    }
                    @media screen and (min-width: 1600px) {
                        .grid {
                            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                        }
                        .grid-with-menu {
                            grid-template-columns: 1fr 1fr 1fr 1fr;
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
                        transition-duration: 0.3s;
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
                        width: 30px;
                        height: 30px;
                    }
                    @media screen and (min-width: 640px) {
                        .start-proj__button-icon {
                            display: none;
                        }
                        .start-proj__button-text {
                            display: inline;
                        }
                    }
                    @media screen and (min-width: 960px) {
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
