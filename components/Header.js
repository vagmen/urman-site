import React, { Component } from "react";
import Link from "next/link";
import { Icon } from "antd";
import { animateScroll as scroll } from "react-scroll";
import { initGA, trackPageView } from "../modules/react-ga.js";
import { mainColorLightBgr, mainColorLight, mainColorDark, mainColorMid, colorViolet } from "../constants/colors";
import { postWidth, pageWidth } from "../constants/settings";

let ticking = false;

class Header extends Component {
    constructor(props) {
        super(props);
        const { headerOpacity } = props;
        this.state = {
            headerBackgroundOpacity: props.headerOpacity ? 0 : 1
        };
    }

    componentDidMount() {
        (function(d, w, c) {
            w.ChatraID = "DKFod4oh55xDx6Q29";
            var s = d.createElement("script");
            w[c] =
                w[c] ||
                function() {
                    (w[c].q = w[c].q || []).push(arguments);
                };
            s.async = true;
            s.src = "https://call.chatra.io/chatra.js";
            if (d.head) d.head.appendChild(s);
            w.ChatraSetup = {
                buttonPosition:
                    window.innerWidth < 1024 // порог ширины
                        ? "bc" // положение кнопки чата на маленьких экранах
                        : "br", // положение кнопки чата на больших экранах
                colors: {
                    buttonText: "#f0f0f0" /* цвет текста кнопки чата */,
                    buttonBg: colorViolet /* цвет фона кнопки чата */
                }
            };
        })(document, window, "Chatra");

        //google Analitics
        initGA();
        trackPageView();
        this.setOpacity();
        window.addEventListener("scroll", this.handleScroll);

        (function(m, e, t, r, i, k, a) {
            m[i] =
                m[i] ||
                function() {
                    (m[i].a = m[i].a || []).push(arguments);
                };
            m[i].l = 1 * new Date();
            (k = e.createElement(t)),
                (a = e.getElementsByTagName(t)[0]),
                (k.async = 1),
                (k.src = r),
                a.parentNode.insertBefore(k, a);
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(51360247, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
        });
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                this.setOpacity();
                ticking = false;
            });

            ticking = true;
        }
    };

    setOpacity = () => {
        if (this.props.headerOpacity && window.scrollY < 100) {
            this.setState({
                headerBackgroundOpacity: window.scrollY / 100
            });
        } else {
            this.setState({
                headerBackgroundOpacity: 1
            });
        }
    };

    render() {
        return (
            <div className={`header ${true ? `` : `transparent`}`}>
                <Link href="/" passHref>
                    <div className="header-container">
                        <img src="../static/images/logo-w.png" alt="Логотип" className="logogo" />
                        <div className="header-name">
                            <span className="logo">URMAN</span>
                            <span className="slogan">ЛЕСНЫЕ РЕШЕНИЯ</span>
                        </div>
                    </div>
                </Link>
                <div className="start-proj">
                    {/* <button className="start-proj__button for-desktop" onClick={() => scroll.scrollToBottom()}>
                        Рассчитать стоимость
                    </button>
                    <button className="start-proj__button for-mobile" onClick={() => scroll.scrollToBottom()}>
                        <Icon type="plus" />
                    </button> */}
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
                    html,
                    body {
                        height: 100vh;
                    }
                    body {
                        font-size: 10px;
                        background: ${mainColorLightBgr};
                        font-family: Rubik, Helvetica, sans-serif;
                    }
                    button {
                        border: none;
                    }
                    h1 {
                        font-size: 2.2rem;
                        line-height: 2.5rem;
                        margin-top: 1.1rem;
                        margin-bottom: 1.3rem;
                    }
                    h2 {
                        font-size: 2rem;
                        line-height: 2.3rem;
                        margin-top: 1.3rem;
                        margin-bottom: 1.2rem;
                    }
                    h3 {
                        font-size: 1.8rem;
                        line-height: 2rem;
                        margin-top: 1.2rem;
                        margin-bottom: 1.1rem;
                    }
                    h4 {
                        font-size: 1.5rem;
                        line-height: 1.7rem;
                        margin-top: 1.1rem;
                        margin-bottom: 1rem;
                    }
                    h5 {
                        font-size: 1.4rem;
                        line-height: 1.5rem;
                        margin-top: 1rem;
                        margin-bottom: 0.9rem;
                    }
                    h6 {
                        font-size: 1.3rem;
                        line-height: 1.4rem;
                        margin-top: 0.9rem;
                        margin-bottom: 0.8rem;
                    }
                    p,
                    strong,
                    a {
                        font-size: 1.2rem;
                        margin-bottom: 0.8rem;
                    }
                    li {
                        font-size: 1.2rem;
                    }
                    a {
                        color: inherit;
                        text-decoration: none;
                    }
                    a:hover {
                        text-decoration: none;
                        color: inherit;
                    }
                    .react-icons {
                        vertical-align: middle;
                    }
                    .page-background,
                    .template-background {
                        display: flex;
                        justify-content: center;
                        position: relative;
                        flex-wrap: wrap;
                    }
                    .template-background:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                         {
                            /* background: url("../../static/images/background.webp"); */
                        }
                        background: #fff;
                         {
                            /* background-size: 30%; */
                        }
                         {
                            /* filter: opacity(4%); */
                        }
                    }
                    .page-content {
                        flex: 1;

                        padding-top: 100px;
                        margin: 0 10px;
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
                        background: #fff;
                    }
                    .grid__item time {
                        color: #3a431b;
                        font-weight: 200;
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
                        color: #262421;
                        max-width: ${postWidth};
                        margin: 0 auto;
                    }
                    .post h1 {
                        margin-bottom: 2rem;
                    }
                    .post > h1,
                    .post > h2,
                    .post > h3,
                    .post > h4,
                    .post > h5,
                    .post > h6 {
                        text-align: center;
                    }
                    .post p,
                    .post li {
                        font-weight: 100;
                    }
                    .post .number {
                        font-size: 30px;
                        font-weight: 500;
                        color: ${mainColorDark};
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
                    ul.without-mark {
                        list-style-type: none;
                    }
                    .post-card {
                        padding: 24px;
                        border-radius: 24px;
                        background: ${mainColorLight};
                        cursor: pointer;
                        color: #fff;
                        transition: all 0.4s;
                        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                            0px 3px 1px -2px rgba(0, 0, 0, 0.12);
                    }
                    .post-card:hover {
                        background: ${mainColorMid};
                        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
                            0px 3px 14px 2px rgba(0, 0, 0, 0.12);
                        transform: translateY(-5px);
                    }
                    .post-card a {
                        font-size: 28px;
                        color: inherit;
                        text-decoration: none;
                    }
                    .post-card a:hover {
                        color: inherit;
                    }
                    .post-img {
                        width: 100%;
                        margin-bottom: 0.8rem;
                         {
                            /* max-height: 500px; */
                        }
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
                    .for-desktop {
                        display: none;
                    }
                    .for-mobile {
                        display: block;
                    }
                    .hide-in-keyboard {
                        display: block;
                    }
                    @media (max-height: 550px) {
                        .hide-in-keyboard {
                            display: none;
                        }
                    }
                    // подвинуть кнопку чатры, чтобы не заслонять мобильное меню
                    .chatra--side-bottom {
                        bottom: 80px !important;
                        max-height: calc(100% - 100px) !important;
                    }
                    @media (min-width: 640px) {
                        body {
                            font-size: 12px;
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
                        .post h6,
                        .post p {
                            text-align: left;
                        }
                    }
                    @media (min-width: 960px) {
                        body {
                            font-size: 14px;
                        }
                        .grid {
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                        .grid-with-menu {
                            grid-template-columns: 1fr 1fr;
                        }
                        .page-content {
                            padding-top: 100px;
                            margin: 0 20px;
                        }
                        .post {
                            margin-top: 50px;
                        }
                        .post h1 {
                            font-size: 3rem;
                            line-height: 3rem;
                            margin-top: 2rem;
                            margin-bottom: 4rem;
                        }
                        // подвинуть кнопку чатры, чтобы не заслонять мобильное меню
                        .chatra--side-bottom {
                            bottom: 20px !important;
                        }
                    }
                    @media (min-width: 1200px) {
                        body {
                            font-size: 16px;
                        }
                        .grid {
                            grid-template-columns: 1fr 1fr 1fr 1fr;
                        }
                        .grid-with-menu {
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                        .for-desktop {
                            display: inline-block;
                        }
                        .for-mobile {
                            display: none;
                        }
                        .post h1 {
                            font-size: 4rem;
                            line-height: 4rem;
                            margin-top: 2rem;
                            margin-bottom: 4rem;
                        }
                        .post h2 {
                            font-size: 2.5rem;
                            line-height: 2.5rem;
                        }
                        .post h3 {
                            font-size: 2.2rem;
                            line-height: 2.2rem;
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
                        padding: 0 10px;
                        top: 0;
                        z-index: 1;
                        width: 100%;
                        background: rgba(102, 118, 54, ${this.state.headerBackgroundOpacity});
                        transition: all 1s;
                        height: 60px;
                        position: fixed;
                        top: 0;
                        z-index: 100;
                        box-sizing: border-box;
                        transition: all 0.8s;
                        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, calc(0.14 * ${this.state.headerBackgroundOpacity})),
                            0 1px 10px 0 rgba(0, 0, 0, calc(0.12 * ${this.state.headerBackgroundOpacity})),
                            0 2px 4px -1px rgba(0, 0, 0, calc(0.2 * ${this.state.headerBackgroundOpacity}));
                    }
                     {
                        /* .header.transparent {
                        background-color: transparent;
                        border-bottom-color: transparent;
                    } */
                    }
                    .header-container {
                        display: flex;
                        align-items: center;
                    }
                    .logogo {
                        height: 40px;
                        width: 40px;
                        object-fit: cover;
                        margin-right: 10px;
                        transition: all 0.8s;
                    }
                    .header-name {
                        display: flex;
                        flex-direction: column;
                        cursor: pointer;
                        align-items: center;
                    }
                    .logo {
                        font-size: 32px;
                        letter-spacing: 4px;
                        font-family: Geneva, Arial, Helvetica, sans-serif;
                        line-height: 40px;
                    }
                    .slogan {
                        font-size: 10px;
                        padding: 0;
                        letter-spacing: 2.8px;
                        display: none;
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
                    @media (min-width: 960px) {
                        .header {
                            height: 80px;
                            padding: 0 20px;
                        }
                        .slogan {
                            display: block;
                        }
                        .logogo {
                            height: 56px;
                            width: 56px;
                            margin-right: 10px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Header;
