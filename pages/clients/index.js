import Layout from '../../components/Layout';
import WithSubMenu from '../../components/WithSubMenu';
import menuData from '../../constants/menuData';
import { Player, BigPlayButton } from 'video-react';
import { Button } from 'antd';
import FeedbackCard from '../../components/FeedbackCard';

const menuItem = 'clients';

const initialData = [
    {
        author: 'Артём Быстров',
        company: 'PR-менеджер Sibelco Russia',
        header: 'Еще раз хочу сказать огромное спасибо, вы супер молодцы!)',
        text:
            'Я очень рад, что мы, а еще больше что я, работаем с вами) Сегодня еще не успел начать работу по заполнению, все еще выставка идет, скоро начну. И еще читаю ваш блог, тоже очень нравится. Карта процесса супер, наша карта процесса скучная и серая.',
    },
    {
        author: 'Татьяна Минакова',
        company: 'Руководитель отдела маркетинга slavcoffee',
        header:
            'В процессе детального выбора подрядчика решили остановиться на компании «Сибирикс». И не пожалели!',
        text:
            'Хотелось бы отметить высокий профессионализм и клиентоориентированный подход к делу, начиная с первого контакта и до завершения проекта. По итогам плодотворного сотрудничества был создан официальный сайт нашей компании, полностью отвечающий всем нашим требованиям. Успехов вам в дальнейшем развитии!',
    },
    {
        author: 'Михаил Швабенланд',
        company: 'Руководитель IT-отдела Magnesium & Metals Limited',
        header:
            'Благодарим за профессиональную работу! Ожидание от работы выше всяких похвал.',
        text:
            'Вообще, часто приходится работать через free-lance.ru — не думал, что будет такая разница в качестве. Показывал дизайн-проект итальянцам, с которыми будем работать — очень высоко оценили (ну вы понимаете... у них даже полицейские модно выглядят)))!',
    },
];

const Index = () => (
    <Layout title="Клиенты" menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <WithSubMenu
                    subMenuItems={menuData[menuItem]}
                    menuItem={menuItem}
                >
                    <div className="">
                        <h1>Клиенты</h1>
                        <h4>
                            От глобальных лидеров до быстрорастущих стартапов,
                            сотни компаний полагаются на URMAN.
                        </h4>
                        <Player
                            playsInline
                            poster="http://lamcdn.net/lookatme.ru/post_image-image/zFesszST-MN14B3AAcKBBg-article.jpg"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>
                        <div className="button-section">
                            <Button type="primary" className="button">
                                Больше видео
                            </Button>
                        </div>
                        <div className="grid-with-menu">
                            {initialData.map((item, index) => (
                                <FeedbackCard feedbackData={item} key={index} />
                            ))}
                        </div>
                        <div className="button-section">
                            <Button type="primary" className="button">
                                Больше отзывов
                            </Button>
                        </div>
                        <div className="button-section">
                            <Button type="primary" className="button">
                                Все клиенты
                            </Button>
                        </div>
                    </div>
                </WithSubMenu>
            </div>
        </div>
        <style jsx>{`
            .button-section {
                display: flex;
                justify-content: center;
                padding: 20px;
            }
            .button {
            }
        `}</style>
    </Layout>
);

export default Index;
