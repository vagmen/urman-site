import Layout from '../../../components/Layout';
import WithSubMenu from '../../../components/WithSubMenu';
import FeedbackCard from '../../../components/FeedbackCard';
import menuData from '../../../constants/menuData';

const menuItem = 'clients';
const subMenuItem = 'feedback';

const initialData = [
    {
        id: 1,
        author: 'Радик Талипов',
        company: `ГУП "Аскинский лес"`,
        header: '"За высокое качество выполнения проектов освоения лесов"',
        img: '../static/images/feedback/1.jpeg',
    },
    {
        id: 2,
        author: 'Бахтигариев Х.З.',
        company: 'Туристическое агентство "Зианчура"',
        header: '"Профессионализм и глубокое знание дела позволили сократить сроки разработки проекта"',
        img: '../static/images/feedback/2.jpeg',
    },
    {
        id: 3,
        author: 'Султанов Р.Ф.',
        company: 'ООО "ГазСтройИнвест"',
        header: 'Соблюдение установленных сроков повлияло на своевременное начало строительства газопровода.',
        img: '../static/images/feedback/3.jpeg',
    },
    {
        id: 4,
        author: 'Евдокимов А.Н.',
        company: 'ЗАО "ПРОМСНАБ"',
        header:
            '"Отличительной чертой ООО Гринландия является высокий профессионализм, организованность сотрудников и сильный командный дух"',
        img: '../static/images/feedback/4.jpg',
    },
    {
        id: 5,
        author: 'Титов А.В.',
        company: 'ООО "ИнГео"',
        header:
            '"Хочется отметить качество оказываемых услуг, гибкость в подходе, разрешение всех возникающих в процессе работы вопросов путем переговоров"',
        img: '../static/images/feedback/5.jpg',
    },
    {
        id: 6,
        author: 'Евдокимов А.Н.',
        company: 'ИП "Евдокимов А.Н."',
        header:
            '"ООО "Гринландия" показала свою способность с полной ответственностью подходить к поставленным задачам"',
        img: '../static/images/feedback/6.jpg',
    },
    {
        id: 7,
        author: 'Карамов Азат Мугарифович',
        company: 'ИП "Карамов А.М."',
        header:
            '"В сжатые сроки, оперативно, профессионально справились сотрудники ООО "Гринландия" с поставленной задачей"',
        img: '../static/images/feedback/7.jpeg',
    },
    {
        id: 8,
        author: 'Бородина Л.Ф.',
        company: 'ООО "Карьер"',
        header:
            '"Проект освоения лесов был разработан в кратчайшие сроки и согласован в Министерстве лесного хозяйства"',
        img: '../static/images/feedback/8.jpg',
    },
    {
        id: 9,
        author: 'Гилимьянов М.З.',
        company: 'ОАО "Уфимское карьероуправление"',
        header:
            '"Особо хотелось бы подчеркнуть доброжелательность коллектива и его готовность сделать работу качественно и оперативно"',
        img: '../static/images/feedback/9.jpeg',
    },
];

const Index = () => (
    <Layout title={menuData[menuItem][subMenuItem]} menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <div className="feedback-wraper">
                    <WithSubMenu subMenuItems={menuData[menuItem]} subMenuItem={subMenuItem} menuItem={menuItem}>
                        <h1>Отзывы</h1>
                        <h4>То, что наши клиенты говорят о нас своими словами</h4>
                        <div className="grid-with-menu">
                            {initialData.map((item) => (
                                <FeedbackCard feedbackData={item} key={item.id} />
                            ))}
                        </div>
                    </WithSubMenu>
                </div>
            </div>
        </div>
        <style jsx>{`
            h1 {
                flex: 1 1 100%;
            }
            h3,
            h4 {
                color: #424242;
            }
        `}</style>
    </Layout>
);

export default Index;
