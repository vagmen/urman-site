import Link from "next/link";
import YouTubePlayer from "react-player/lib/players/YouTube";
import Layout from "../../components/Layout";
import WithSubMenu from "../../components/WithSubMenu";
import FeedbackCard from "../../components/FeedbackCard";
import { feedback } from "../../constants/feedback";
import Button from "../../components/ui/Button";

const menuItem = "clients";

const Index = () => (
    <Layout menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <WithSubMenu menuItem={menuItem}>
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
                                <a href="">
                                    <Button name="Больше видео" />
                                </a>
                            </Link>
                        </div>
                        <div className="grid-with-menu">
                            {feedback.slice(0, 3).map(item => (
                                <FeedbackCard feedbackData={item} key={item.id} />
                            ))}
                        </div>
                        <div className="button-section">
                            <Link href="/clients/feedback">
                                <a href="">
                                    <Button name="Больше отзывов" />
                                </a>
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
