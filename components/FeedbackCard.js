const FeedbackCard = ({ feedbackData }) => (
    <div className="feedback__item grid__item">
        <div className="card__text">
            <h3>{feedbackData.header}</h3>
            <p>{feedbackData.text}</p>
        </div>
        <div className="card__author">
            <h4>{feedbackData.author}</h4>
            <span>{feedbackData.company}</span>
        </div>
        <style jsx>{`
            .feedback__item {
                background: #fff;
            }
            .card__text {
                padding: 20px;
            }
            .card__author {
                padding: 20px;
                border-top: solid 1px rgba(0, 0, 0, 0.2);
            }
        `}</style>
    </div>
);

export default FeedbackCard;
