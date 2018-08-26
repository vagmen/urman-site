import { Button } from 'antd';
import Layout from '../components/Layout.js';
import Recall from '../components/Recall.js';

export default () => (
    <Layout title="URMAN">
        <div className="main-container">
            <h1>С 2010 года упрощаем жизнь нашим клиентам</h1>
            <h4>
                Берем на себя юридические, проектные, бюрократические вопросы
                при оформлении и использовании лесного участка
            </h4>
            <Button type="primary" size="large">
                Смотреть краткий обзор
            </Button>
            <Recall />
        </div>
        <style jsx>{`
            .main-container {
                background: url(https://www.techvalidate.com/assets/corp/header/home-bg-8ab16c51b18c37209e40ccd812f83fc6.png);
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
            }
            h1 {
                font-size: 48px;
                line-height: 48px;
                color: #2c2f88;
                text-align: center;
                padding: 30px 30px 0;
                font-weight: 200;
            }
            h4 {
                font-size: 24px;
                font-weight: 300;
                color: #666;
                text-align: center;
                padding: 30px;
            }
        `}</style>
    </Layout>
);
