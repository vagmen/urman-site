import React, { Component } from "react";
import Link from "next/link";
import { Icon } from "antd";

import { mainColorLightBgr, mainColorLight } from "../constants/colors";
import { postWidth, pageWidth } from "../constants/settings";

class Header extends Component {
    render() {
        return (
            <div className={`header ${true ? `` : `transparent`}`}>
                <Link href="/">
                    <div className="header-container">
                        <img src="../static/images/logo-w.png" alt="Логотип" className="logogo" />
                        <div className="header-name">
                            <span className="logo">URMAN</span>
                            <span className="slogan">ЛЕСНЫЕ РЕШЕНИЯ</span>
                        </div>
                    </div>
                </Link>
                <div className="start-proj">
                    <button className="start-proj__button start-proj__button-text">Рассчитать стоимость</button>
                    <span className="start-proj__button start-proj__button-icon">
                        <Icon type="plus" />
                    </span>
                </div>
                <style jsx global>{`
                    @import url("https://fonts.googleapis.com/css?family=Rubik:300,400");
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                        color: inherit;
                        font-size: 1em;
                        line-height: inherit;
                        margin: 0;
                        padding: 0;
                        vertical-align: baseline;
                    }
                    body {
                        font-size: 16px;
                        background: ${mainColorLightBgr};
                        font-family: Rubik, Helvetica, sans-serif;
                    }
                    button {
                        border: none;
                    }
                    h1 {
                        font-size: 2.5rem;
                        line-height: 3rem;
                        margin-bottom: 2.5rem;
                    }
                    h2 {
                        font-size: 2rem;
                        line-height: 2.5rem;
                        margin-bottom: 2rem;
                    }
                    h3 {
                        font-size: 1.8rem;
                        line-height: 2rem;
                        margin-top: 0.5rem;
                        margin-bottom: 1.8rem;
                    }
                    h4 {
                        font-size: 1.6rem;
                        line-height: 2rem;
                        margin-bottom: 1.6rem;
                    }
                    h5 {
                        font-size: 1.4rem;
                        line-height: 1.6rem;
                        margin-bottom: 1.4rem;
                    }
                    h6 {
                        font-size: 1.2rem;
                        line-height: 1.4rem;
                        margin-bottom: 1.2rem;
                    }
                    p {
                        margin-bottom: 0.5rem;
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
                        position: relative;
                    }
                    .page-background:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                    }
                    .page-content {
                        flex: 1;
                        max-width: ${pageWidth};
                        padding-top: 100px;
                        margin: 0 30px;
                         {
                            /* overflow: hidden; */
                        }
                    }
                    .centered {
                        display: flex;
                        justify-content: center;
                    }
                    .centered-elem {
                        margin: 0 auto;
                    }
                    .full-width {
                        width: 100%;
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
                        max-width: ${postWidth};
                        margin: 0 auto;
                    }
                    .post h1,
                    .post h2,
                    .post h3,
                    .post h4,
                    .post h5,
                    .post h6 {
                        text-align: center;
                    }
                    .post p {
                        margin-bottom: 2rem;
                        font-weight: 100;
                        text-align: center;
                    }
                    .post-a {
                        color: inherit;
                        text-decoration: none;
                        border-bottom: 3.5px solid ${mainColorLight};
                    }
                    .post-a:hover {
                        color: inherit;
                        background: ${mainColorLight};
                    }
                    .post-img {
                        width: 100%;
                        margin-bottom: 2rem;
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
                    @media (min-width: 640px) {
                        body {
                            font-size: 18px;
                        }
                        .grid,
                        .grid-with-menu {
                            grid-template-columns: 1fr 1fr;
                        }
                        .clickable-block:hover {
                            transform: translate(0, -10px);
                            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
                        .post {
                            margin-top: 20px;
                        }
                        .post h2,
                        .post h3,
                        .post h4,
                        .post h5,
                        .post h6 {
                            text-align: left;
                        }
                        .post p {
                            text-align: left;
                        }
                    }
                    @media (min-width: 960px) {
                        body {
                            font-size: 20px;
                        }
                        .grid {
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                        .grid-with-menu {
                            grid-template-columns: 1fr 1fr;
                        }
                        .post {
                            margin-top: 50px;
                        }
                    }
                    @media (min-width: 1200px) {
                        .grid {
                            grid-template-columns: 1fr 1fr 1fr 1fr;
                        }
                        .grid-with-menu {
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                    }
                    @media (min-width: 1600px) {
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
                        background: rgba(58, 76, 27, 0.7);
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
                    .header-container {
                        display: flex;
                        align-items: center;
                    }
                    .logogo {
                        height: 56px;
                        width: 56px;
                        object-fit: cover;
                        margin-right: 10px;
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
