import Layout from '../../../components/Layout';
import WithSubMenu from '../../../components/WithSubMenu';
import menuData from '../../../constants/menuData';
import { Player, BigPlayButton } from 'video-react';

const menuItem = 'clients';
const subMenuItem = 'video';
const imgSrc = '/static/video.png';
const Index = () => (
    <Layout title={menuData[menuItem][subMenuItem]} menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <WithSubMenu
                    subMenuItems={menuData[menuItem]}
                    subMenuItem={subMenuItem}
                    menuItem={menuItem}
                >
                    <h1>Видео клиентов</h1>
                    <p>
                        Клиенты описывают опыт работы с нами, какие были
                        особенности и задачи и как их решили.
                    </p>
                    <div className="video-list grid-with-menu">
                        <div className="video-list__item grid__item clickable-block">
                            <Player
                                playsInline
                                poster="http://lamcdn.net/lookatme.ru/post_image-image/zFesszST-MN14B3AAcKBBg-article.jpg"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            >
                                <BigPlayButton position="center" />
                            </Player>
                        </div>
                        <div className="video-list__item grid__item clickable-block">
                            <Player
                                playsInline
                                poster="http://lamcdn.net/lookatme.ru/post_image-image/zFesszST-MN14B3AAcKBBg-article.jpg"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            >
                                <BigPlayButton position="center" />
                            </Player>
                        </div>
                        <div className="video-list__item grid__item clickable-block">
                            <Player
                                playsInline
                                poster="http://lamcdn.net/lookatme.ru/post_image-image/zFesszST-MN14B3AAcKBBg-article.jpg"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            >
                                <BigPlayButton position="center" />
                            </Player>
                        </div>
                        <div className="video-list__item grid__item clickable-block">
                            <Player
                                playsInline
                                poster="http://lamcdn.net/lookatme.ru/post_image-image/zFesszST-MN14B3AAcKBBg-article.jpg"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            >
                                <BigPlayButton position="center" />
                            </Player>
                        </div>
                        <div className="video-list__item grid__item clickable-block">
                            <Player
                                playsInline
                                poster="http://lamcdn.net/lookatme.ru/post_image-image/zFesszST-MN14B3AAcKBBg-article.jpg"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            >
                                <BigPlayButton position="center" />
                            </Player>
                        </div>
                        <div className="video-list__item grid__item clickable-block">
                            <Player
                                playsInline
                                poster="http://lamcdn.net/lookatme.ru/post_image-image/zFesszST-MN14B3AAcKBBg-article.jpg"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            >
                                <BigPlayButton position="center" />
                            </Player>
                        </div>
                    </div>
                </WithSubMenu>
            </div>
        </div>
        <style jsx>{`
            .video-list {
            }
            .video-list__item {
            }
            .video-list__item img {
                width: 100%;
            }
        `}</style>
    </Layout>
);

export default Index;
