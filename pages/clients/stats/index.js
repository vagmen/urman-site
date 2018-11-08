import Layout from '../../../components/Layout';
import WithSubMenu from '../../../components/WithSubMenu';
import menuData from '../../../constants/menuData';

const menuItem = 'clients';
const subMenuItem = 'stats';

const Index = () => (
    <Layout title={menuData[menuItem][subMenuItem]} menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <WithSubMenu subMenuItems={menuData[menuItem]} subMenuItem={subMenuItem} menuItem={menuItem}>
                    <h1>Статистика</h1>
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
                                регионах: Московская область, Калужская область, Тверская область, Марий Эл, Татарстан,
                                Башкортостан, Челябинская область, Мурманская область, Ямало-Ненецкий АО, Кемеровская
                                область, Красноярский край, Иркутская область
                            </p>
                        </div>
                    </div>
                </WithSubMenu>
            </div>
        </div>
        <style jsx>{`
            .stat-list {
                align-items: flex-start;
            }
            .stat-list__item {
                 {
                    /* background: #fff; */
                }
                padding: 30px;
                text-align: center;
                transition: all 0.3s;
            }
            .stat-list__item:hover {
                transform: scale(1.1);
            }
            .number {
                font-size: 120px;
                line-height: 120px;
                margin: 0;
                color: #563e8e;
                color: #667636;
            }
        `}</style>
    </Layout>
);

export default Index;
