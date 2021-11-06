import React, { Component } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import classNames from "classnames";

// let ticking = false;

class Header extends Component {
    componentDidMount() {
        // (function (d, w, c) {
        //     w.ChatraID = "DKFod4oh55xDx6Q29";
        //     var s = d.createElement("script");
        //     w[c] =
        //         w[c] ||
        //         function () {
        //             (w[c].q = w[c].q || []).push(arguments);
        //         };
        //     s.async = true;
        //     s.src = "https://call.chatra.io/chatra.js";
        //     if (d.head) d.head.appendChild(s);
        //     w.ChatraSetup = {
        //         buttonPosition:
        //             window.innerWidth < 1024 // порог ширины
        //                 ? "bc" // положение кнопки чата на маленьких экранах
        //                 : "br", // положение кнопки чата на больших экранах
        //         colors: {
        //             buttonText: "#f0f0f0" /* цвет текста кнопки чата */,
        //             buttonBg: "#e7c67b" /* цвет фона кнопки чата */,
        //         },
        //         disabledOnMobile: true,
        //     };
        // })(document, window, "Chatra");

        // this.setOpacity();
        // window.addEventListener("scroll", this.handleScroll);

        (function (m, e, t, r, i, k, a) {
            m[i] =
                m[i] ||
                function () {
                    (m[i].a = m[i].a || []).push(arguments);
                };
            m[i].l = 1 * new Date();
            (k = e.createElement(t)),
                (a = e.getElementsByTagName(t)[0]),
                (k.async = 1),
                (k.src = r),
                a.parentNode.insertBefore(k, a);
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        // eslint-disable-next-line no-undef
        ym(51360247, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
        });
    }

    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.handleScroll);
    // }

    // handleScroll = () => {
    //     if (!ticking) {
    //         window.requestAnimationFrame(() => {
    //             this.setOpacity();
    //             ticking = false;
    //         });

    //         ticking = true;
    //     }
    // };

    // setOpacity = () => {
    //     const { isMainPage, headerOpacity } = this.props;

    //     const header = document.querySelector("#header");
    //     const headerBg = document.querySelector("#headerBg");
    //     const logo = document.querySelector("#logo");
    //     const windowHeight = window.innerHeight;
    //     const scrollY = Math.round(window.scrollY);
    //     let headerBackgroundOpacity = 1;

    //     if (isMainPage) {
    //         let newHeight = windowHeight - scrollY - (scrollY / windowHeight) * 300;
    //         if (newHeight < 64) {
    //             newHeight = 64;
    //         }
    //         header.style.height = newHeight + "px";
    //         header.style.zIndex = "0";
    //         if (scrollY < windowHeight - 300) {
    //             headerBackgroundOpacity = scrollY / (windowHeight - 300);
    //         }
    //         if (scrollY > windowHeight / 2) {
    //             header.style.zIndex = "2";
    //         }
    //         logo.style.setProperty("--headerOpacity", headerBackgroundOpacity);
    //     } else if (headerOpacity && scrollY < 100) {
    //         headerBackgroundOpacity = scrollY / 100;
    //     }

    //     headerBg.style.setProperty("--headerOpacity", headerBackgroundOpacity);
    // };

    render() {
        const { isMainPage } = this.props;

        return (
            <div className={classNames(styles.header, { [styles.main]: isMainPage })} id="header">
                <Link href="/" passHref>
                    <div className={classNames(styles.wrapper)}>
                        <img
                            src="images/brandName.svg"
                            alt="Логотип"
                            className={classNames(styles.logo, { [styles.cursorPointer]: !isMainPage })}
                            id="logo"
                            loading="lazy"
                        />
                    </div>
                </Link>
            </div>
        );
    }
}

export default Header;
