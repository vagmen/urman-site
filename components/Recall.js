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
                background: url('/static/images/clients/udhrb.png') 100% 100% no-repeat;
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
            @media (min-width: 1366px) {
                .recall-container {
                    margin-top: -150px;
                }
            }
            @media (min-width: 1600px) {
                .recall-container {
                    margin-top: -100px;
                }
            }
            @media (min-width: 1920px) {
                .recall-img {
                    height: 500px;
                    width: 500px;
                }
                .recall-container {
                    margin-top: -50px;
                }
            }
        `}</style>
    </div>
);

export default Recall;
