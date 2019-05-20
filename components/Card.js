const Card = ({ title, img }) => (
    <div className="card">
        <img src={img} alt="" />
        <p>{title}</p>
        <style jsx>{`
            .card {
                border-radius: 8px;
                overflow: hidden;
            }
            img {
                height: 300px;
                width: 100%;
                object-fit: cover;
            }
        `}</style>
    </div>
);

export default Card;
