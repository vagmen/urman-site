import { Button } from "antd";
import Link from "next/link";
import Layout from "../components/Layout.js";
import Recall from "../components/Recall.js";
import StartProject from "../components/StartProject.js";
import feedback from "../constants/feedback";

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
                <div className="centered">
                    <Button type="primary" size="large">
                        Смотреть краткий обзор??
                    </Button>
                </div>
            </section>
            <section className="section feedback">
                <Recall feedbackData={feedback[0]} />
            </section>
            <section className="section logos">
                <img src="../static/images/logos/gazprom.svg" alt="Логотип Газпром" />
                <img src="../static/images/logos/gazprom.svg" alt="Логотип Газпром" />
                <img src="../static/images/logos/gazprom.svg" alt="Логотип Газпром" />
                <img src="../static/images/logos/gazprom.svg" alt="Логотип Газпром" />
                <img src="../static/images/logos/gazprom.svg" alt="Логотип Газпром" />
            </section>
            <section className="section tour">
                <Link href={`/services`}>
                    <div className="tour__item tour__item-green">
                        <h4>НАШИ УСЛУГИ</h4>
                        <p>Посмотрите, чем мы можем быть вам полезны</p>
                        <img src="/static/video.png" />
                    </div>
                </Link>
                <Link href={`/clients`}>
                    <div className="tour__item tour__item-blue">
                        <h4>ИСТОРИИ КЛИЕНТОВ</h4>
                        <p>Посмотрите, что говорят наши клиенты о нас</p>
                        <img src="/static/video.png" />
                    </div>
                </Link>
                <div className="tour__item tour__item-orange">
                    <h4>КЛИЕНТЫ В ЦИФРАХ</h4>
                    <p>100% наших клиентов находятся в России. Подробнее -></p>
                    <img src="/static/video.png" />
                </div>
            </section>
        </div>

        <style jsx>{`
            .main-container {
                display: grid;
                grid-auto-rows:  auto;
                grid-gap: 50px;
                grid-template-areas: 's'
                'f'
                't';
            }
            .background-image{
                background-image: url('/static/images/logo.png');
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
            .slogan{
                grid-area: s;
                padding: 100px 20px 0;
            }
            .feedback{
                grid-area: f;
            }
            .tour{
                grid-area: t;
            }
            .logos{
                grid-area: l;
                align-items: center;
                background: rgba(255,255,255,0.5);
                padding: 0 50px;
                justify-content: center;
                display: none;
                border-top: 1px solid #d5d5d5;
                border-bottom: 1px solid #d5d5d5;
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            }
            .logos img{
                flex: 0 1 200px;
                width: 0px;
                padding: 30px;
            }
            h1 {
                color: #3a431b;
                text-align: center;
                font-weight: 300;
            }
            h4 {
                font-weight: 300;
                color: #666;
                text-align: center;
            }
            .tour {
                display: flex;
                flex-wrap: wrap;
                margin-top: 100px;
            }
            .tour__item {
                flex: 1 1 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: white;
                padding: 30px;
                cursor: pointer;
            }
            .tour__item-green {
                background-color: #77bc1f;
                background-position: right;
            }
            .tour__item-blue {
                background-color: #2c2f88;
                background-position: left;
            }
            .tour__item-orange {
                background-color: #ff8400;
                background-position: center;
            }
            .tour__item h4,
            .tour__item p {
                color: white;
                padding: 0px;
                text-align: center;
            }
            .tour__item img {
                width: 80%;
            }

            @media (min-width: 640px) {
                .slogan{
                    padding: 200px 100px 0;
                }
              
            @media (min-width: 960px) {
                .main-container {
                    grid-template-columns: repeat(8, 1fr);
                    grid-template-areas:    '. s s s f f f f'
                                            'l l l l l l l l'
                                            't t t t t t t t ';
                }
                .background-image{
                    background-size: 80%;
                    top: 30px;
                }
                .slogan{
                    padding: 200px 0 0;
                }
                .logos{
                    display: flex;
                    margin-top: 50px;
                }
                h1, h4{
                    text-align: left;
                }
                h1{
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
                    grid-template-columns: repeat(9, 1fr);
                    grid-template-areas:    '. s s s . f f f f'
                                            'l l l l l l l l l'
                                            't t t t t t t t t';
                }
                .background-image{
                    background-size: 60%;
                    top: 0;
                }
            }
            @media (min-width: 1600px) {
                .main-container {
                    grid-template-columns: repeat(11, 1fr);
                    grid-template-areas:    '. . s s s . f f f f .'
                                            'l l l l l l l l l l l'
                                            't t t t t t t t t t t';
                }
                .background-image{
                    background-size: 60%;
                    top: 0;
                }
            }
        `}</style>
    </Layout>
);
