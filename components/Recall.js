// import Img from '/static/home-img.png';

const Recall = ({ feedbackData }) => (
    <div className="recall">
        <div className="recall-img" />
        <div className="recall-container">
            {/* <div className="recall-header">
                <div className="recall-header-text">
                    <h4>Lee Rubin & Keri Robinson</h4>
                    <h5>
                        Senior Manager of Global Reference Programs and Customer Reference Marketing Manager, Citrix
                    </h5>
                </div>
                <img
                    className="recall-logo"
                    src="https://www.techvalidate.com/assets/corp/customers/logos/citrix-bd945466b8c623e5fab67c2855f0a8a7.png"
                />
            </div> */}
            <div className="recall__author">
                <span>{feedbackData.company}</span>
                <h4>{feedbackData.author}</h4>
            </div>
            <p>{feedbackData.header}</p>
        </div>
        <style jsx>{`
            .recall {
                width: 100%;
                margin-top: 30px;
            }
            .recall-img {
                z-index: 0;
                height: 300px;
                width: 300px;

                background: url('/static/home-img.png') 100% 100% no-repeat;

                background-size: contain;
                background-position: center center;
                margin: 0 auto;
            }
            .recall-container {
                width: 80%;
                margin: 0 auto;
                margin-top: 20px;
                border: 1px solid #d5d5d5;
                padding: 20px;
                background: rgba(255, 255, 255, 0.95);
                border-radius: 10px;
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            }
            .recall-header {
                display: flex;
            }
            .recall-header-text {
                flex: 1 1 0;
            }
            .recall-logo {
                flex: 0 0 100px;
                height: 40px;
            }
            @media (min-width: 960px) {
                .recall {
                    margin-top: 50px;
                }
                .recall-container {
                    margin-top: -50px;
                }
            }
        `}</style>
    </div>
);

export default Recall;
