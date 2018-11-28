import { Button } from 'antd';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import ReactPlayer from 'react-player';
import Layout from '../../components/Layout';
import WithSubMenu from '../../components/WithSubMenu';
import FeedbackCard from '../../components/FeedbackCard';
import { menuData } from '../../constants/menuData';
import { feedback } from '../../constants/feedback';
import Link from 'next/link';

const menuItem = 'clients';

const Index = () => (
    <Layout title="Клиенты" menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <WithSubMenu subMenuItems={menuData[menuItem]} menuItem={menuItem}>
                    <div className="">
                        <h1>Клиенты</h1>
                        <h4>От глобальных лидеров до быстрорастущих стартапов, сотни компаний полагаются на URMAN.</h4>
                        <div className="player-wrapper">
                            <YouTubePlayer
                                url="https://www.youtube.com/watch?v=OxeGSvSuAeM"
                                controls
                                className="react-player"
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="button-section">
                            <Link href="/clients/video">
                                <Button type="primary" className="button">
                                    Больше видео
                                </Button>
                            </Link>
                        </div>
                        <div className="grid-with-menu">
                            {feedback.slice(0, 3).map((item) => (
                                <FeedbackCard feedbackData={item} key={item.id} />
                            ))}
                        </div>
                        <div className="button-section">
                            <Link href="/clients/feedback">
                                <Button type="primary" className="button">
                                    Больше отзывов
                                </Button>
                            </Link>
                        </div>
                    </div>
                </WithSubMenu>
            </div>
        </div>
        <style jsx>{`
            .button-section,
            .video-section {
                display: flex;
                justify-content: center;
                padding: 20px;
            }
        `}</style>
    </Layout>
);

export default Index;
