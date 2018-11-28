import { Button } from "antd";
import Link from "next/link";
import Layout from "../components/Layout.js";
import Recall from "../components/Recall.js";
import StartProject from "../components/StartProject.js";
import { feedbackVideo } from "../constants/feedback";
import { mainColorLight, mainColorMid, greyDark, mainColorDark, grey } from "../constants/colors";
import { Fragment } from "react";

export default () => (
    <Layout title="URMAN">
        <div className="main-container">
            <div className="background-image" />
            <section className="section slogan">
                <h1>С 2010 года упрощаем жизнь нашим клиентам</h1>
                <h4>
                    Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного
                    участка
                </h4>
            </section>
            <section className="section feedback">
                <Recall feedbackData={feedbackVideo[0]} />
            </section>
            <section className="section logos">
                <img src="../static/images/logos/gazprom.svg" alt="Логотип Газпром" />
                <img src="../static/images/logos/rzd.png" alt="Логотип РЖД" />
                <img src="../static/images/logos/novatek.svg" alt="Логотип НОВАТЭК" />
                <img src="../static/images/logos/rgo.jpg" alt="Логотип Русского Географического Общества" />
                <img src="../static/images/logos/bashneft.jpg" alt="Логотип Башнефть" />
            </section>
            <section className="section tour">
                <Link href={`/services`}>
                    <div className="tour__item">
                        <h3>НАШИ УСЛУГИ</h3>
                        <p>Посмотрите, чем мы можем быть вам полезны</p>
                        <img src="/static/images/tour/pol.png" />
                    </div>
                </Link>
                <Link href={`/clients/stats`}>
                    <div className="tour__item tour__item-ligth">
                        <h3>ЦИФРЫ</h3>
                        <p>Нами разработано и согласовано</p>
                        <p className="number">173</p>
                        <p>проекта освоения лесов</p>
                    </div>
                </Link>
                <Link href={`/clients/video`}>
                    <div className="tour__item">
                        <h3>ИСТОРИИ КЛИЕНТОВ</h3>
                        <p>Посмотрите, что говорят наши клиенты о нас</p>
                        <img src="/static/images/tour/feedback.png" />
                    </div>
                </Link>
            </section>
        </div>

        <style jsx>{`
            .main-container {
                display: grid;
                grid-auto-rows: 70px auto minmax(500px, auto) auto;
                grid-gap: 20px;
                grid-template-areas:
                    "."
                    "s"
                    "f"
                    "t";
            }
            .background-image {
                background-image: url("/static/images/logo.png");
                position: absolute;
                height: 100%;
                width: 100%;
                top: 70px;
                left: 0%;
                z-index: -1;
                filter: blur(2px) opacity(20%);
                background-repeat: no-repeat;
                background-position: center top;
                background-size: 100%;
            }
            .slogan {
                grid-area: s;
            }
            .feedback {
                grid-area: f;
            }
            .tour {
                grid-area: t;
            }
            .logos {
                grid-area: l;
                align-items: center;
                background: rgba(255, 255, 255, 0.9);
                padding: 0 50px;
                justify-content: center;
                display: none;
                border-top: 1px solid #d5d5d5;
                border-bottom: 1px solid #d5d5d5;
                z-index: 1;
            }
            .logos img {
                flex: 0 1 150px;
                width: 0px;
                padding: 20px 30px;
            }
            h1 {
                color: ${mainColorDark};
                text-align: center;
                font-weight: 300;
            }
            h4 {
                font-weight: 300;
                color: ${grey};
                text-align: center;
            }
            .tour {
                display: flex;
                flex-wrap: wrap;
            }
            .tour__item {
                flex: 1 1 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                color: white;
                padding: 40px;
                cursor: pointer;
                background-color: ${mainColorMid};
                text-align: center;
            }
            .tour__item-ligth {
                background-color: ${mainColorLight};
                background-position: left;
                color: ${greyDark};
            }
            .tour__item img {
                width: 100%;
            }
            .tour__item .number {
                font-size: 8rem;
            }

            @media (min-width: 640px) {
                .main-container {
                    grid-auto-rows: 100px auto minmax(500px, auto) auto auto;
                    grid-template-areas:
                        "."
                        "s"
                        "f"
                        "l"
                        "t";
                }
                .logos {
                    display: flex;
                }
            }

            @media (min-width: 960px) {
                .main-container {
                    padding-top: 100px;
                    grid-template-rows: 50px minmax(380px, auto) 100px 0 auto 0px;
                    grid-template-columns: 0 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 0;
                    grid-template-areas:
                        ". s s s s f f f f f ."
                        ". s s s s f f f f f ."
                        ". . . . . f f f f f ."
                        ". . . . . f f f f f ."
                        "t t t t t t t t t t ."
                        ". . . . . . . . . . .";
                    grid-gap: 50px;
                }
                .logos {
                    grid-column-start: 1;
                    grid-column-end: 12;
                    grid-row-start: 3;
                    grid-row-end: 4;
                }
                .background-image {
                    background-size: 80%;
                    top: 30px;
                }
                .slogan {
                    padding: 0;
                }

                h1,
                h4 {
                    text-align: left;
                }
                h1 {
                    font-size: 3rem;
                }
                .tour {
                    margin-top: 50px;
                }
                .tour__item {
                    flex: 1 1 33%;
                }
            }
            @media (min-width: 1200px) {
                .main-container {
                    grid-template-rows: 50px minmax(550px, auto) 100px 0 auto 0px;
                    grid-template-areas:
                        ". . . . . f f f f f ."
                        ". s s s s f f f f f ."
                        ". . . . . f f f f f ."
                        ". . . . . f f f f f ."
                        "t t t t t t t t t t ."
                        ". . . . . . . . . . .";
                }
                .background-image {
                    background-size: 60%;
                    top: 0;
                }
            }
            @media (min-width: 1366px) {
                .main-container {
                    padding-top: 80px;
                    grid-template-rows: 50px minmax(400px, auto) 100px 0px auto 0px;
                }
            }
            @media (min-width: 1600px) {
                .main-container {
                    padding-top: 100px;
                    grid-template-rows: 50px minmax(500px, auto) 100px 50px auto 0px;
                }
                .background-image {
                    background-size: 60%;
                    top: 0;
                }
            }
            @media (min-width: 1920px) {
                .main-container {
                    padding-top: 100px;
                    grid-template-rows: 50px minmax(650px, auto) 100px 0px auto 0px;
                }
            }
        `}</style>
    </Layout>
);
