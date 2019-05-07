import Link from "next/link";
import Layout from "../components/Layout.js";
import { mainColorLight, mainColorMid, greyDark, mainColorDark, grey, colorViolet } from "../constants/colors";
import Button from "../components/ui/Button.js";
import ButtonViolet from "../components/ui/ButtonViolet";
import ButtonBorder from "../components/ui/ButtonBorder";

const postData = {
    title: "URMAN - Лесные решения",
    description:
        "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка.",
};

export default () => (
    <Layout postData={postData} headerOpacity={true}>
        <div className="main-container">
            <section className="section section__main">
                <div className="main-section__bg" />
                <div className="main-section__inner">
                    <h1>С 2010 года упрощаем жизнь нашим клиентам</h1>
                    <h3>
                        Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании
                        лесного участка
                    </h3>
                    <span className="for-desktop main-section__button">
                        <ButtonBorder>
                            <Link href="/about">
                                <a href="">Подробнее</a>
                            </Link>
                        </ButtonBorder>
                    </span>
                </div>
            </section>
            <section className="section section__services">
                <div className="section__services-title">
                    <h2>У нас заказывают</h2>
                </div>
                <div className="service service-pol">
                    <Link href="/services/proekt-osvoeniya-lesov">
                        <a href=""> </a>
                    </Link>
                    <h3>Проект освоения лесов</h3>
                </div>
                <div className="service service-arenda">
                    <Link href="/services/arenda-lesnogo-uchastka">
                        <a href=""> </a>
                    </Link>
                    <h3>Аренда лесного участка</h3>
                </div>
                <div className="service service-pdlu">
                    <Link href="/services/pdlu">
                        <a href=""> </a>
                    </Link>
                    <h3>Проектная документация лесного участка</h3>
                </div>
                <span className="section__services-button">
                    <ButtonBorder>
                        <Link href="/services">
                            <a href="">Все услуги</a>
                        </Link>
                    </ButtonBorder>
                </span>
            </section>
        </div>

        <style jsx>{`
            @keyframes appearance-of-text {
                from {
                    opacity: 0;
                    transform: translateY(200px);
                }
                to {
                    opacity: 0.8;
                    transform: translateY(0px);
                }
            }
            @keyframes appearance-of-text-delay-1 {
                from {
                    opacity: 0;
                    transform: translateY(200px);
                }
                33% {
                    opacity: 0;
                    transform: translateY(200px);
                }
                to {
                    opacity: 0.8;
                    transform: translateY(0px);
                }
            }
            @keyframes appearance-of-text-delay-2 {
                from {
                    opacity: 0;
                    transform: translateY(200px);
                }
                50% {
                    opacity: 0;
                    transform: translateY(200px);
                }
                to {
                    opacity: 0.8;
                    transform: translateY(0px);
                }
            }
            .main-container {
                display: grid;
                grid-auto-rows: 100vh 1fr;
                grid-auto-columns: 1fr;
                grid-template-areas:
                    "m"
                    "s";
                 {
                    /* auto minmax(500px, auto) auto; */
                }
                 {
                    /* grid-gap: 20px; */
                }
            }
            .section__main {
                grid-area: m;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                position: relative;
                text-align: center;
            }
            .main-section__bg {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-image: url("static/images/comanda.webp");
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                filter: brightness(0.4);
                z-index: -1;
            }
            h1 {
                font-size: 40px;
            }
            h2 {
                font-size: 30px;
            }
            h3 {
                font-size: 20px;
            }
            .main-section__inner h1,
            .main-section__inner h3 {
                color: #fff;
                opacity: 0.8;
            }
            .main-section__inner h1 {
                margin-top: 110px;
                animation: appearance-of-text 1s ease-out;
            }
            .main-section__inner h3 {
                margin-top: 30px;
                animation: appearance-of-text-delay-1 1.5s ease-out;
            }
            .main-section__button {
                animation: appearance-of-text-delay-2 2s ease-out;
            }
            .section__services {
                grid-area: s;
                background: ${mainColorLight};
                display: grid;
                grid-auto-rows: auto 300px 300px 300px auto;
                grid-auto-columns: 1fr;
                grid-template-areas:
                    "sst"
                    "s1"
                    "s2"
                    "s3"
                    "ssb";
            }
            .section__services-title {
                grid-area: sst;
                text-align: center;
                color: rgba(0, 0, 0, 0.8);
                padding: 100px 50px 50px;
                font-weight: 900;
            }
            .service {
                display: flex;
                align-items: flex-end;
                color: rgba(255, 255, 255, 1);
                border-radius: 8px;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                cursor: pointer;
                box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
                transition: all 0.4s;
                position: relative;
            }
            .service:hover {
                box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0px 3px 14px 2px rgba(0, 0, 0, 0.12);
                transform: translateY(-5px);
            }
            .service a {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
            }
            .service h3 {
                padding: 12px;
                background: linear-gradient(45deg, ${colorViolet}, rgba(80, 80, 80, 0));
                min-height: 100px;
                width: 100%;
            }
            .service-pol {
                grid-area: s1;
                background-image: url("static/images/about/about2.jpg");
                 {
                    /* filter: brightness(0.4); */
                }
            }
            .service-arenda {
                grid-area: s2;
                background-image: url("static/images/about/about4.jpg");
            }
            .service-pdlu {
                grid-area: s3;
                background-image: url("static/images/about/about5.jpg");
            }
            .section__services-button {
                grid-area: ssb;
                text-align: center;
                padding: 16px;
            }
            @media (min-width: 640px) {
                h1 {
                    font-size: 44px;
                    line-height: 44px;
                }
                h2 {
                    font-size: 33px;
                    line-height: 33px;
                }
                h3 {
                    font-size: 22px;
                    line-height: 24px;
                }
                .main-section__inner {
                    padding: 0 100px;
                }
            }

            @media (min-width: 960px) {
                h1 {
                    font-size: 48px;
                    line-height: 48px;
                }
                h2 {
                    font-size: 36px;
                    line-height: 36px;
                }
                h3 {
                    font-size: 24px;
                    line-height: 28px;
                }
                .main-section__inner {
                    padding: 0 200px;
                }
                .section__services {
                    grid-gap: 16px;
                    padding: 16px;
                }
            }
            @media (min-width: 1200px) {
                h1 {
                    font-size: 52px;
                    line-height: 52px;
                }
                h2 {
                    font-size: 39px;
                    line-height: 39px;
                }
                h3 {
                    font-size: 26px;
                    line-height: 32px;
                }
                .main-section__inner {
                    padding: 0 300px;
                }
                .main-section__inner h1 {
                    margin-top: 200px;
                }
                .section__services {
                    grid-auto-rows: auto 300px auto;
                    grid-auto-columns: 1fr 1fr 1fr;
                    grid-template-areas:
                        "sst    sst sst"
                        "s1     s2  s3"
                        "ssb    ssb ssb";
                }
            }
            @media (min-width: 1366px) {
                h1 {
                    font-size: 56px;
                    line-height: 56px;
                }
                h2 {
                    font-size: 42px;
                    line-height: 42px;
                }
                h3 {
                    font-size: 28px;
                    line-height: 36px;
                }
                .main-section__inner {
                    padding: 0 350px;
                }
            }
            @media (min-width: 1600px) {
                h1 {
                    font-size: 60px;
                    line-height: 60px;
                }
                h2 {
                    font-size: 45px;
                    line-height: 45px;
                }
                h3 {
                    font-size: 30px;
                    line-height: 40px;
                }
                .main-section__inner {
                    padding: 0 400px;
                }
            }
            @media (min-width: 1920px) {
                h1 {
                    font-size: 64px;
                    line-height: 64px;
                }
                h2 {
                    font-size: 48px;
                    line-height: 48px;
                }
                h3 {
                    font-size: 32px;
                    line-height: 44px;
                }
                .main-section__inner {
                    padding: 0 500px;
                }
            }
        `}</style>
    </Layout>
);
