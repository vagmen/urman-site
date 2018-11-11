import Layout from '../../../components/Layout';
import WithSubMenu from '../../../components/WithSubMenu';
import FeedbackCard from '../../../components/FeedbackCard';
import menuData from '../../../constants/menuData';

const menuItem = 'clients';
const subMenuItem = 'feedback';

const initialData = [
    {
        id: 10,
        author: 'Жуков А.М.',
        company: `ООО "ОлимпСитиСтрой"`,
        header: '"Отмечаю высокий уровень профессионализма и квалификацию"',
        img: '../static/images/feedback/10.png',
    },
    {
        id: 11,
        author: 'Горбатов Г.А.',
        company: `ООО "Регион-Авто"`,
        header:
            '"Отдельная благодарность инженеру-таксатору Проектной организации "Гринландия" за оперативность и профессионализм"',
        img: '../static/images/feedback/11.png',
    },
    {
        id: 12,
        author: 'Янбеков Б.Р.',
        company: `ООО "Робинзон"`,
        header:
            '"Благодаря опыту и профессионализму сотрудников Проект освоения лесов положительно прошел государственную экспертизу"',
        img: '../static/images/feedback/12.png',
    },
    {
        id: 13,
        author: 'Беляев А.Ю',
        company: `ООО "Лесная поляна"`,
        header:
            '"Выражаем уверенность в сохранении сложившихся дружественных отношений и надеемся на дальнейшее взаимовыгодное и плодотворное партнерство"',
        img: '../static/images/feedback/13.png',
    },
    {
        id: 14,
        author: 'Манячкин Андрей Викторович',
        company: `ИП "Манячкин А.В."`,
        header:
            '"Рекомендуем ООО "Гринландия" для выполнения работ по разработке и согласованию проекта освоения лесов"',
        img: '../static/images/feedback/14.png',
    },
    {
        id: 15,
        author: 'Павлов С.А.',
        company: `ОАО "Самаранефтегеофизика"`,
        header:
            '"ООО "Гринландия" зарекомендовало себя как надежный добросовестный партнер, грамотно и своевременно исполняющий обязательства"',
        img: '../static/images/feedback/15.png',
    },
    {
        id: 16,
        author: 'Халитов Ф.Г.',
        company: `Управление дорожного хозяйства РБ`,
        header:
            '"Мы смогли не однократно убедиться в благонадежности, профессиональности и оперативности ООО "Гринландия" "',
        img: '../static/images/feedback/16.png',
    },
    {
        id: 17,
        author: 'Агеев Д.В.',
        company: `ООО "Кольская верфь"`,
        header:
            '"При решении нестандартных задач, возникающих замечаний и предложений сотрудники моментально принимали эффективные действия"',
        img: '../static/images/feedback/17.png',
    },
    {
        id: 18,
        author: 'Зиганшин Камиль',
        company: `Русское географическое общество. Региональное отделение в РБ`,
        header:
            '"Хотелось бы отметить инициативность и оперативность в работе инженера-таксатора Проектной организации"',
        img: '../static/images/feedback/18.png',
    },
    {
        id: 19,
        author: 'Пелевин М.Л.',
        company: `ООО "Башнефть-Добыча"`,
        header:
            '"Сотрудники компании работают слаженно и оперативно. ООО "Гринландия" выполняет проектные работы на высоком профессиональном уровне"',
        img: '../static/images/feedback/19.png',
    },
    {
        id: 1,
        author: 'Радик Талипов',
        company: `ГУП "Аскинский лес"`,
        header: '"За высокое качество выполнения проектов освоения лесов"',
        img: '../static/images/feedback/1.png',
    },
    {
        id: 2,
        author: 'Бахтигариев Х.З.',
        company: 'Туристическое агентство "Зианчура"',
        header: '"Профессионализм и глубокое знание дела позволили сократить сроки разработки проекта"',
        img: '../static/images/feedback/2.png',
    },
    {
        id: 3,
        author: 'Султанов Р.Ф.',
        company: 'ООО "ГазСтройИнвест"',
        header: 'Соблюдение установленных сроков повлияло на своевременное начало строительства газопровода.',
        img: '../static/images/feedback/3.png',
    },
    {
        id: 4,
        author: 'Евдокимов А.Н.',
        company: 'ЗАО "ПРОМСНАБ"',
        header:
            '"Отличительной чертой ООО Гринландия является высокий профессионализм, организованность сотрудников и сильный командный дух"',
        img: '../static/images/feedback/4.png',
    },
    {
        id: 5,
        author: 'Титов А.В.',
        company: 'ООО "ИнГео"',
        header:
            '"Хочется отметить качество оказываемых услуг, гибкость в подходе, разрешение всех возникающих в процессе работы вопросов"',
        img: '../static/images/feedback/5.png',
    },
    {
        id: 6,
        author: 'Евдокимов А.Н.',
        company: 'ИП "Евдокимов А.Н."',
        header:
            '"ООО "Гринландия" показала свою способность с полной ответственностью подходить к поставленным задачам"',
        img: '../static/images/feedback/6.png',
    },
    {
        id: 7,
        author: 'Карамов Азат Мугарифович',
        company: 'ИП "Карамов А.М."',
        header:
            '"В сжатые сроки, оперативно, профессионально справились сотрудники ООО "Гринландия" с поставленной задачей"',
        img: '../static/images/feedback/7.png',
    },
    {
        id: 8,
        author: 'Бородина Л.Ф.',
        company: 'ООО "Карьер"',
        header:
            '"Проект освоения лесов был разработан в кратчайшие сроки и согласован в Министерстве лесного хозяйства"',
        img: '../static/images/feedback/8.png',
    },
    {
        id: 9,
        author: 'Гилимьянов М.З.',
        company: 'ОАО "Уфимское карьероуправление"',
        header:
            '"Особо хотелось бы подчеркнуть доброжелательность коллектива и его готовность сделать работу качественно и оперативно"',
        img: '../static/images/feedback/9.png',
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