// import Img from '/static/home-img.png';

const Recall = ({ feedbackData }) => (
    <div className="recall">
        <div className="recall-img" />
        <div className="recall-container">
            <div className="recall__author">
                <span>{feedbackData.company}</span>
                <h4>{feedbackData.author}</h4>
            </div>
            <p>{feedbackData.header}</p>
        </div>
        <style jsx>{`
            .recall {
                width: 100%;
            }
            .recall-img {
                z-index: 0;
                height: 300px;
                background: url('/static/home-img.png') 100% 100% no-repeat;
                background-size: contain;
                background-position: center center;
                margin: 0 auto;
            }
            .recall-container {
                margin: 0 30px;
                margin-top: -50px;
                border: 1px solid #d5d5d5;
                padding: 20px;
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            }
            @media (min-width: 960px) {
                .recall-img {
                    height: 400px;
                    width: 400px;
                }
            }
        `}</style>
    </div>
);

export default Recall;
