import { mainColorMid } from '../constants/colors';

const Statistics = () => (
    <div className="stat-list grid-with-menu">
        <div className="stat-list__item grid__item">
            <p>Нами разработано и согласовано</p>
            <p className="number">173</p>
            <p>проекта освоения лесов</p>
        </div>
        <div className="stat-list__item grid__item">
            <p>Нами разработано</p>
            <p className="number">3</p>
            <p>лесных плана</p>
        </div>
        <div className="stat-list__item grid__item">
            <p>Нами разработано</p>
            <p className="number">18</p>
            <p>регламентов</p>
        </div>
        <div className="stat-list__item grid__item">
            <p>Успешный опыт работы в</p>
            <p className="number">10</p>
            <p>
                регионах: Московская область, Калужская область, Тверская область, Марий Эл, Татарстан, Башкортостан,
                Челябинская область, Мурманская область, Ямало-Ненецкий АО, Кемеровская область, Красноярский край,
                Иркутская область
            </p>
        </div>
        <style jsx>{`
            .stat-list {
                align-items: flex-start;
            }
            .stat-list__item {
                padding: 30px;
                transition: all 0.3s;
            }
            .stat-list__item:hover {
                transform: scale(1.1);
            }
            .stat-list__item p {
                text-align: center;
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
