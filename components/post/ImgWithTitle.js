import { mainColorMid, mainColorLight } from "../../constants/colors";

const ImgWithTitle = ({ title, src, className = "", children, ...props }) => {
    const alt = `${title ? title + "|" : ""} URMAN - Лесные решения`;

    return (
        <div className="post-img-wrapper">
            <img src={src} alt={alt} title={alt} loading="lazy" />
            {title && <em>{title}</em>}
            <style jsx>{`
                .post-img-wrapper {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: flex-start;
                }
                img {
                    width: 100%;
                    max-height: 600px;
                    object-fit: contain;
                    margin-bottom: 8px;
                }
                em {
                    margin-bottom: 16px;
                    text-align: center;
                }
                @media (min-width: 960px) {
                    img {
                        margin-bottom: 16px;
                    }
                    em {
                        margin-bottom: 32px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ImgWithTitle;
