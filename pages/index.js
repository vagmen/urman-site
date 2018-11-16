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
                {/* <StartProject /> */}
            </section>
        </div>

        <style jsx>{`
            .main-container {
                display: flex;
                align-items: center;
                position: relative;
                padding-top: 50px;
                flex-wrap: wrap;
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
            .section{
                flex: 1 1 100%;
            }
            h1 {
                color: #2c2f88;
                color: #3a431b;
                text-align: center;
                padding: 60px 40px 0px;
                font-weight: 200;
                margin: 0;
            }
            h4 {
                font-size: 18px;
                font-weight: 300;
                color: #666;
                text-align: center;
                padding: 20px;
            }
            .tour {
                display: flex;
                flex-wrap: wrap;
                margin-top: 100px;
            }
            .tour__item {
                background-image: url('https://www.techvalidate.com/assets/corp/header/bg-overlay-505519f95428cb2cc16945b69604042e.png');
                background-size: cover;
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
                h1 {
                    font-size: 50px;
                    padding: 100px 50px 30px;
                }
                h4 {
                    font-size: 24px;
                    padding: 50px;
                }
            @media (min-width: 960px) {
                .background-image{
                    background-size: 80%;
                    top: 30px;
                }
                .slogan{
                    flex: 1 0 0;
                }
                .feedback{
                    flex: 0 0 500px;
                }
                h1, h4{
                    text-align: left;
                }
                h1 {
                    font-size: 50px;
                    padding: 150px 50px 50px;
                }
                h4 {
                    font-size: 24px;
                    padding: 50px;
                }
                .tour {
                    margin-top: 100px;
                }
                .tour__item {
                    flex: 1 1 33%;
                }
            }
            @media (min-width: 1200px) {
                .background-image{
                    background-size: 60%;
                    top: 0;
                }
                h1 {
                    font-size: 50px;
                    padding: 200px 50px 50px;
                }
                h4 {
                    font-size: 24px;
                    padding: 50px;
                }
                 }
        `}</style>
    </Layout>
);
