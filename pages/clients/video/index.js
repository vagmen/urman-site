import ReactPlayer from 'react-player';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import Layout from '../../../components/Layout';
import WithSubMenu from '../../../components/WithSubMenu';
import { menuData } from '../../../constants/menuData';

const menuItem = 'clients';
const subMenuItem = 'video';
const imgSrc = '/static/video.png';
const Index = () => (
    <Layout title={menuData[menuItem][subMenuItem]} menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <WithSubMenu subMenuItems={menuData[menuItem]} subMenuItem={subMenuItem} menuItem={menuItem}>
                    <h1>Видео клиентов</h1>
                    <p>Клиенты описывают опыт работы с нами, какие были особенности и задачи и как их решили.</p>
                    <div className="video-list grid-with-menu">
                        <div className="video-list__item grid__item">
                            <div className="player-wrapper">
                                <YouTubePlayer
                                    url="https://www.youtube.com/watch?v=OxeGSvSuAeM"
                                    controls
                                    className="react-player"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
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
