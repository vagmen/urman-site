import Link from 'next/link';
import { mainColorMid, mainColorLight, mainColorDark } from '../../constants/colors';

const RelatedPost = ({ title, bgr, href, className = '', children, ...props }) => (
    <div className="related-post">
        <div className="white-bgr">
            <Link href={href}>
                <a href="">
                    <h4>{title}</h4>
                </a>
            </Link>
        </div>
        <style jsx>{`
            .related-post {
                background: url(${bgr}) 100% 100% no-repeat; /* Добавляем фон */
                background-position: center center;
                background-size: cover;
                border-radius: 16px;
            }
            .white-bgr {
                background: rgba(255, 255, 255, 0);
                transition: all 0.8s;
            }
            h4 {
                color: #fff;
                padding: 48px;
                transition: all 0.8s;
            }
            .white-bgr:hover {
                background: rgba(255, 255, 255, 0.7);
            }

            .white-bgr:hover h4 {
                color: ${mainColorDark};
            }
        `}</style>
    </div>
);

export default RelatedPost;
