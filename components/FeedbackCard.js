const FeedbackCard = ({ feedbackData }) => (
    <div className="feedback__item grid__item">
        <div className="card__img">
            <img src={feedbackData.img} />
            <div className="cover">
                <p>{feedbackData.header}</p>
            </div>
        </div>
        {/* <div className="card__text">
            <h3>{feedbackData.header}</h3>
            <p>{feedbackData.text}</p>
        </div> */}
        <div className="card__author">
            <h4>{feedbackData.author}</h4>
            <span>{feedbackData.company}</span>
        </div>
        <style jsx>{`
            .feedback__item {
                background: #fff;
            }
            .card__img {
                position: relative;
            }
            img {
                width: 100%;
            }
            img:hover {
            }
            .cover {
                 {
                    /* background: #667636; */
                }
                background: rgba(102, 118, 54, 0);
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                left: 0;
                color: #fff;
                cursor: pointer;
                opacity: 0;
                transition: all 0.5s;
                overflow: hidden;
            }
            .cover:hover {
                opacity: 1;
                background: rgba(102, 118, 54, 0.6);
            }
            .cover p {
                font-size: 22px;
                padding: 20px;
                text-align: center;
            }
            .card__text,
            .card__img {
                margin: 20px;
            }
            .card__author {
                padding: 0 20px 20px;
                 {
                    /* border-top: solid 1px rgba(0, 0, 0, 0.2); */
                }
            }
        `}</style>
    </div>
);

export default FeedbackCard;
