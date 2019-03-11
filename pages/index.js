import Link from "next/link";
import Layout from "../components/Layout.js";
import Recall from "../components/Recall.js";
import { feedbackVideo } from "../constants/feedback";
import { mainColorLight, mainColorMid, greyDark, mainColorDark, grey } from "../constants/colors";
const postData = {
    title: "URMAN - Лесные решения",
    description:
        "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка."
};

export default () => (
    <Layout postData={postData}>
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
                <Link href={`/clients/otzyvy`}>
                    <div className="logos_container">
                        <img src="../static/images/logos/gazprom.svg" alt="Логотип Газпром" />
                        <img src="../static/images/logos/rzd.png" alt="Логотип РЖД" />
                        <img src="../static/images/logos/bashneft.jpg" alt="Логотип Башнефть" />
                        <img src="../static/images/logos/novatek.svg" alt="Логотип НОВАТЭК" />
                        <img src="../static/images/logos/rgo.png" alt="Логотип Русского Географического Общества" />
                    </div>
                </Link>
            </section>
            <section className="section tour">
                <Link href={`/uslugi`}>
                    <div className="tour__item">
                        <h3>НАШИ УСЛУГИ</h3>
                        <p>Посмотрите, чем мы можем быть вам полезны</p>
                        <img src="/static/images/tour/pol.png" alt="Пример проекта освоения лесов" />
                    </div>
                </Link>
                <Link href={`/clients/statistika-i-pokazateli`}>
                    <div className="tour__item tour__item-ligth">
                        <h3>ЦИФРЫ</h3>
                        <p>Нами разработано и согласовано</p>
                        <p className="number">331</p>
                        <p>проекта освоения лесов</p>
                    </div>
                </Link>
                <Link href={`/clients/video`}>
                    <div className="tour__item">
                        <h3>ИСТОРИИ КЛИЕНТОВ</h3>
                        <p>Посмотрите, что говорят наши клиенты о нас</p>
                        <img src="/static/images/tour/feedback.png" alt="Видео отзывы наших клиентов" />
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
                min-height: 100vh;
                top: 70px;
                left: 0px;
                right: 0px;
                bottom: 0px;
                filter: blur(1px) opacity(15%);
                background-repeat: no-repeat;
                background-position: center top;
                background-size: contain;
                transition: 1s;
                transform: translateZ(-10px);
                z-index: -1;
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
                background: rgba(255, 255, 255, 0.9);
                display: none;
                border-top: 1px solid #d5d5d5;
                border-bottom: 1px solid #d5d5d5;
                z-index: 1;
            }
            .logos_container {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 50px;
                width: 100%;
                height: 100%;
            }
            .logos_container img {
                flex: 0 1 150px;
                width: 0px;
                padding: 20px 30px;
                cursor: pointer;
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
                z-index: 1;
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
                    grid-template-rows: 50px minmax(380px, auto) 100px auto;
                    grid-template-columns: 0 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 0;
                    grid-template-areas:
                        ". s s s s f f f f f ."
                        ". s s s s f f f f f ."
                        ". . . . . f f f f f ."
                        "t t t t t t t t t t t";
                    grid-gap: 30px;
                }
                .logos {
                    grid-column-start: 1;
                    grid-column-end: 12;
                    grid-row-start: 3;
                    grid-row-end: 4;
                }
                .background-image {
                     {
                        /* background-size: 80%; */
                    }
                    top: 30px;
                }
                .slogan {
                    padding: 0;
                }
                h1 {
                    text-align: left;
                    font-size: 3rem;
                    line-height: 1.15em;
                    margin-bottom: 3rem;
                }
                h4 {
                    text-align: left;
                    line-height: 1.2em;
                }
                .tour {
                    margin-top: -30px;
                }
                .tour__item {
                    flex: 1 1 33%;
                }
            }
            @media (min-width: 1200px) {
                .main-container {
                    grid-template-rows: 50px minmax(550px, auto) auto auto;
                    grid-template-areas:
                        ". . . . . f f f f f ."
                        ". s s s s f f f f f ."
                        ". . . . . f f f f f ."
                        "t t t t t t t t t t t";
                    grid-gap: 40px;
                }
                .background-image {
                     {
                        /* background-size: 60%; */
                    }
                    top: 0;
                }
                .tour {
                    margin-top: -40px;
                }
            }
            @media (min-width: 1366px) {
                .main-container {
                    padding-top: 80px;
                    grid-template-rows: 50px minmax(450px, auto) auto auto;
                }
            }
            @media (min-width: 1600px) {
                .main-container {
                    padding-top: 100px;
                    grid-template-rows: 50px minmax(500px, auto) auto auto;
                    grid-gap: 50px;
                }
                .background-image {
                    top: 0;
                }
                .tour {
                    margin-top: -50px;
                }
                .logos_container img {
                    flex: 0 1 160px;
                }
                h1 {
                    font-size: 4rem;
                }
                h4 {
                    font-size: 2rem;
                }
            }
            @media (min-width: 1920px) {
                .main-container {
                    padding-top: 100px;
                    grid-template-rows: 100px minmax(600px, auto) auto auto;
                }
                .logos_container img {
                    flex: 0 1 170px;
                }
            }
        `}</style>
    </Layout>
);
