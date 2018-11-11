import { Button } from 'antd';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import Recall from '../components/Recall.js';
import StartProject from '../components/StartProject.js';

export default () => (
    <Layout title="URMAN">
        <div className="main-container">
            <h1>С 2010 года упрощаем жизнь нашим клиентам</h1>
            <h4>
                Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного
                участка
            </h4>
            <Button type="primary" size="large">
                Смотреть краткий обзор
            </Button>
            <Recall />
            <div className="tour">
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
            </div>
        </div>

        <style jsx>{`
            .main-container {
                background: url('/static/home-bg.png');
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                padding-top: 50px;
            }
            h1 {
                color: #2c2f88;
                color: #3a431b;
                text-align: center;
                padding: 70px 50px 30px;
                font-weight: 200;
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
                    padding: 100px 70px 30px;
                }
                h4 {
                    font-size: 24px;
                    padding: 50px;
                }
            @media (min-width: 960px) {
                .tour__item {
                    flex: 1 1 33%;
                }
            }
        `}</style>
    </Layout>
);
