import { mainColorMid } from "../constants/colors";

const Statistics = () => (
    <div className="stat-list grid-with-menu">
        <div className="stat-list__item grid__item">
            <div className="before-number">
                <p>Нами разработано и согласовано</p>
            </div>
            <p className="number">173</p>
            <p>проекта освоения лесов</p>
        </div>
        <div className="stat-list__item grid__item">
            <div className="before-number">
                <p>Нами разработано</p>
            </div>
            <p className="number">3</p>
            <p>лесных плана</p>
        </div>
        <div className="stat-list__item grid__item">
            <div className="before-number">
                <p>Нами разработано</p>
            </div>
            <p className="number">18</p>
            <p>регламентов</p>
        </div>
        <div className="stat-list__item grid__item">
            <div className="before-number">
                <p>Успешный опыт работы в</p>
            </div>
            <p className="number">11</p>
            <p>регионах</p>
        </div>
        <div className="stat-list__item grid__item">
            <div className="before-number">
                <p>Выполнено работ на</p>
            </div>
            <p className="number">127</p>
            <p>Га</p>
        </div>
        <div className="stat-list__item grid__item">
            <div className="before-number">
                <p>Нашим коллективом посажено</p>
            </div>
            <p className="number">745</p>
            <p>деревьев</p>
        </div>
        <style jsx>{`
            .stat-list {
                align-items: start;
            }
            .stat-list__item {
                transition: all 0.3s;
                position: relative;
                display: flex;
                flex-wrap: wrap;
            }
            .stat-list__item:hover {
                transform: scale(1.1);
            }
            .stat-list__item > p {
                text-align: center;
                width: 100%;
                padding: 0 30px;
            }
            .before-number {
                min-height: 4rem;
                display: flex;
                align-items: flex-end;
                width: 100%;
                justify-content: center;
                text-align: center;
                padding: 0 30px;
            }
            .before-number p {
                padding: 0;
                text-transform: uppercase;
            }
            .number {
                font-size: 8rem;
                line-height: 8rem;
                margin: 0;
                color: ${mainColorMid};
                font-weight: 100;
            }
        `}</style>
    </div>
);

export default Statistics;
