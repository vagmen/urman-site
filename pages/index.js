import { Button } from 'antd';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import Recall from '../components/Recall.js';
import StartProject from '../components/StartProject.js';
import feedback from '../constants/feedback';

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
                        Смотреть краткий обзор? или заменить текст?
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
                top: 50px;
                height: 100%;
                width: 100%;
                left: 0;
                z-index: -1;
                filter: blur(4px) opacity(30%);
            }
            .section{
                flex: 1 1 100%;
            }
            h1 {
                color: #2c2f88;
                color: #3a431b;
                text-align: center;
                padding: 70px 50px 0px;
                font-weight: 200;
                margin: 0;
            }
            h4 {
                font-size: 20px;
                font-weight: 300;
                color: #666;
                text-align: center;
                padding: 30px;
            }
            .tour {
                display: flex;
                flex-wrap: wrap;
                margin-top: 30px;
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
                .slogan{
                    flex: 0 0 50%;
                }
                .feedback{
                    flex: 0 0 50%;
                }
                h1, h4{
                    text-align: left;
                }
                .tour__item {
                    flex: 1 1 33%;
                }
            }
        `}</style>
    </Layout>
);
