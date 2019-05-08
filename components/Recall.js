import Link from "next/link";
import Button from "../components/ui/Button";

const Recall = ({ feedbackData }) => (
    <div className="recall">
        <div className="recall__text">
            <div className="recall__author">
                <span>{feedbackData.company}</span>
                <h4>{feedbackData.author}</h4>
            </div>
            <p>{feedbackData.header}</p>
            <Link href="/clients/video" passHref>
                <a href="">
                    <Button className="full-width">Смотрите интервью</Button>
                </a>
            </Link>
        </div>
        <style jsx>{`
            .recall {
                width: 100%;
                height: 100%;
                background: url("/static/images/clients/udhrb.png") 100% 100% no-repeat;
                background-size: contain;
                background-position: center center;
                position: relative;
            }
            .recall__text {
                position: absolute;
                bottom: 0px;
                left: 50%;
                padding: 20px;
                background: rgba(255, 255, 255, 0.9);
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
                width: 90%;
                font-size: 0.95rem;
                transform: translate(-50%);
            }
            @media (min-width: 960px) {
                .recall__text {
                    bottom: 130px;
                    width: 60%;
                    transform: none;
                    right: 0;
                    left: inherit;
                }
            }
            @media (min-width: 1200px) {
                .recall__text {
                    bottom: 140px;
                }
            }
            @media (min-width: 1366px) {
            }
            @media (min-width: 1600px) {
                .recall__text {
                    bottom: 150px;
                }
            }
            @media (min-width: 1920px) {
                .recall-img {
                    height: 500px;
                    width: 500px;
                }
                .recall__text {
                    bottom: 200px;
                }
            }
        `}</style>
    </div>
);

export default Recall;
