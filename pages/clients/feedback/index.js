import Layout from "../../../components/Layout";
import WithSubMenu from "../../../components/WithSubMenu";
import menuData from "../../../constants/menuData";

const menuItem = "clients";
const subMenuItem = "feedback";

const initialData = [
    {
        author: "Артём Быстров",
        company: "PR-менеджер Sibelco Russia",
        header: "Еще раз хочу сказать огромное спасибо, вы супер молодцы!)",
        text:
            "Я очень рад, что мы, а еще больше что я, работаем с вами) Сегодня еще не успел начать работу по заполнению, все еще выставка идет, скоро начну. И еще читаю ваш блог, тоже очень нравится. Карта процесса супер, наша карта процесса скучная и серая."
    },
    {
        author: "Татьяна Минакова",
        company: "Руководитель отдела маркетинга slavcoffee",
        header:
            "В процессе детального выбора подрядчика решили остановиться на компании «Сибирикс». И не пожалели!",
        text:
            "Хотелось бы отметить высокий профессионализм и клиентоориентированный подход к делу, начиная с первого контакта и до завершения проекта. По итогам плодотворного сотрудничества был создан официальный сайт нашей компании, полностью отвечающий всем нашим требованиям. Успехов вам в дальнейшем развитии!"
    },
    {
        author: "Михаил Швабенланд",
        company: "Руководитель IT-отдела Magnesium & Metals Limited",
        header:
            "Благодарим за профессиональную работу! Ожидание от работы выше всяких похвал.",
        text:
            "Вообще, часто приходится работать через free-lance.ru — не думал, что будет такая разница в качестве. Показывал дизайн-проект итальянцам, с которыми будем работать — очень высоко оценили (ну вы понимаете... у них даже полицейские модно выглядят)))!"
    },
    {
        author: "Максим Крицкий",
        company: "Учредитель и Генеральный директор Lightstar-Russia",
        header: "Сибирикс — это лучшие руки, которые делают лучшие сайты.",
        text:
            "Долго и упорно искали адекватных подрядчиков. Проведя два месяца поисков, нашли компанию «Сибирикс». От первого этапа концепции и до самой реализации я не переставал удивляться. Ребята все делали в сроки, предлагали интересные и не тривиальные пути решения задач. Работалось легко и самое главное быстро). В результате мы получили новый, современный сайт и восторженных клиентов."
    }
];

const Index = () => (
    <Layout title={menuData[menuItem][subMenuItem]} menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <div className="feedback-wraper">
                    <WithSubMenu
                        subMenuItems={menuData[menuItem]}
                        subMenuItem={subMenuItem}
                        menuItem={menuItem}
                    >
                        <h1>Отзывы</h1>
                        <div className="feedback">
                            {initialData.map((item, index) => (
                                <div className="card" key={index}>
                                    <div className="card__text">
                                        <h3>{item.header}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="card__author">
                                        <h4>{item.author}</h4>
                                        <span>{item.company}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </WithSubMenu>
                </div>
            </div>
        </div>
        <style jsx>{`
            .feedback-wraper {
                background: #f1f4f5;
            }
            .feedback {
                display: flex;
                flex-wrap: wrap;
                margin: 0 -10px;
                align-items: flex-start;
            }
            h1 {
                flex: 1 1 100%;
            }
            h3,
            h4 {
                color: #424242;
            }
            .card {
                background: #fff;
                width: 100%;
                margin: 10px;
            }
            .card__text {
                padding: 20px;
            }
            .card__author {
                padding: 20px;
                border-top: solid 1px rgba(0, 0, 0, 0.3);
            }
            @media (min-width: 750px) {
                .card {
                    width: calc(100% / 2 - 20px);
                }
            }
            @media (min-width: 1400px) {
                .card {
                    width: calc(100% / 3 - 20px);
                }
            }
        `}</style>
    </Layout>
);

export default Index;
