import Layout from '../../../components/Layout';
import WithSubMenu from '../../../components/WithSubMenu';
import menuData from '../../../constants/menuData';

const menuItem = 'clients';
const subMenuItem = 'video';
const imgSrc =
    'http://www.zabor-setka.ru/bitrix/templates/defoult/components/bitrix/catalog.section/video_main/images/video-play.jpg';

const Index = () => (
    <Layout title={menuData[menuItem][subMenuItem]} menuItem={menuItem}>
        <WithSubMenu
            subMenuItems={menuData[menuItem]}
            subMenuItem={subMenuItem}
            menuItem={menuItem}
        >
            <h1>Видео клиентов</h1>
            <p>
                Клиенты описывают опыт работы с нами, какие были особенности и
                задачи и как их решили.
            </p>
            <div className="video-list">
                <div className="video-list__item">
                    <img src={imgSrc} />
                </div>
                <div className="video-list__item">
                    <img src={imgSrc} />
                </div>
                <div className="video-list__item">
                    <img src={imgSrc} />
                </div>
                <div className="video-list__item">
                    <img src={imgSrc} />
                </div>
                <div className="video-list__item">
                    <img src={imgSrc} />
                </div>
            </div>
        </WithSubMenu>
        <style jsx>{`
            .video-list {
                display: flex;
                flex-wrap: wrap;
            }
            .video-list__item {
                cursor: pointer;
                width: 100%;
                padding-bottom: 20px;
            }
            .video-list__item img {
                width: 100%;
            }
            @media screen and (min-width: 750px) {
                .video-list {
                    margin: 0 -10px;
                }
                .video-list__item {
                    padding: 0 10px 20px;
                    width: 50%;
                }
            }
            @media screen and (min-width: 1600px) {
            }
        `}</style>
    </Layout>
);

export default Index;
