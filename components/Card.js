import Link from "next/link";

const Card = ({ title, img, href }) => (
    <div className="card">
        <Link href={href} passHref>
            <a href=""> </a>
        </Link>
        <img src={img} alt="" />
        <p className="title">{title}</p>
        <style jsx>{`
            .card {
                border-radius: 8px;
                overflow: hidden;
                background: #fff;
                box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
                position: relative;
            }
            .card:hover img {
                transform: scale(1.1);
            }
            img {
                height: 200px;
                width: 100%;
                object-fit: cover;
                transition: all 1s ease-out;
            }
            .title {
                padding: 16px;
                font-size: 22px;
                font-weight: 600;
            }
            .card a {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 1;
            }
        `}</style>
    </div>
);

export default Card;
