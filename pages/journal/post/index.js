import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../../../components/Layout.js';

// const Content = withRouter((props) => (
//     <div>
//         <h1>{props.router.query.title}</h1>
//         <p>Текст статьи</p>
//     </div>
// ));

const Index = (props) => (
    <Layout>
        <div className="template-background">
            <div className="page-content">
                <div className="post">
                    <header>
                        <h1>У вашего Проекта освоения лесов вышел срок годности</h1>
                        <img src="../../../static/forest.jpg" className="post-img" alt=" " />
                    </header>
                    <h3>
                        Почему нужно разрабатывать проект освоения лесов (сокращенно ПОЛ) уже сейчас и почему он у Вас
                        не пройдет государственную экспертизу.
                    </h3>
                    <p>У нас для Вас 2 новости: одна плохая, другая хорошая.</p>
                    <p>
                        <strong>Плохая</strong> в том, что срок Проекта освоения лесов на ваш лесной участок
                        заканчивается в этом году. И с нового года Вы не имеете права вести деятельность на участке без
                        нового лесного проекта прошедшего государственную экспертизу. Что сулит проблемы и штрафы.
                    </p>
                    <p>
                        <strong>Хорошая</strong> в том, что мы готовы для Вас сделать новый{' '}
                        <Link href="/services/pol">
                            <a className="post-a" href="">
                                Проект освоения лесов
                            </a>
                        </Link>{' '}
                        .
                    </p>
                    <p>
                        В этом году обновляются многие Проекты освоения лесов. Будет завал и у разработчиков и у
                        организаций проводящих экспертизу, которая занимает <strong>30 дней</strong> по закону. Так же
                        если у вас было лесоустройство и изменились номера выделов, нужно будет заключать доп.
                        соглашение, а это трата драгоценного времени.
                    </p>
                    <p>
                        Особенно это важно для заготовителей древесины, которые не смогут вести деятельность на своем
                        лесном участке с 1 января 2019 года без принятой лесной декларации по новому ПОЛ. Соответственно
                        встанет вся работа.
                    </p>
                    <h3>Почему нужно заново разрабатывать Проект освоения лесов?</h3>
                    <p>
                        Согласно{' '}
                        <a className="post-a" href="">
                            п.30 Приказа № 69 от 29 февраля 2012 года "Об утверждении состава проекта освоения лесов и
                            порядка его разработки"
                        </a>{' '}
                        Проекты освоения лесов составляются на срок действия договора аренды по видам пользования:
                    </p>
                    <ul>
                        <li>геологическое изучение недр, разработка месторождений полезных ископаемых;</li>
                        <li>
                            строительства и эксплуатации водохранилищ, иных искусственных водных объектов, а также
                            гидротехнических сооружений, морских портов, морских терминалов, речных портов, причалов;
                        </li>
                        <li>строительства, реконструкции, эксплуатации линейных объектов;</li>
                    </ul>
                    <p>
                        По остальным видам использования лесов проект освоения лесов разрабатывается на срок не более 10
                        лет, но не должен превышать срок действия договора аренды и лесохозяйственного регламента
                        лесничества (лесопарка).
                    </p>
                    <p>
                        Так получилось, что практически все лесничества по всей стране в этом году обновляют
                        лесохозяйственные регламенты и лесные планы.
                    </p>
                    <p>
                        Но есть в этом положительный момент. Напомним, что вносить изменения в Проект освоения лесов
                        можно только в <strong>3 случаях</strong>:
                    </p>
                    <ul>
                        <li>при изменении Лесохозяйственного регламента;</li>
                        <li>изменении условий договора аренды;</li>
                        <li>при проведении лесопатологического обследования.</li>
                    </ul>
                    <p>
                        Если Вы делали Проект освоения лесов 10 лет назад, многое в Ваших планах могло поменяться. Это
                        отличная возможность откорректировать Проект с Вашим новым видением. Но если Вы делали Проект
                        пару лет назад, то в любом случае придется переделывать ПОЛ. В этом случае стоит попросить{' '}
                        <strong>скидку</strong> у разработчика .
                    </p>
                    <p>
                        Наша компания успешно разрабатывает проекты освоения лесов любой сложности на все разрешенные
                        Лесным кодексом виды деятельности. Работаем по всей России. Собрали опыт с разных уголков
                        страны, что позволяет нам с каждым прошедшим экспертизу ПОЛ, улучшать качество наших Проектов,
                        увереннее давать гарантии результата и предлагать наиболее интересные цены на рынке.
                    </p>
                </div>
            </div>
        </div>
    </Layout>
);

// Page.getInitialProps = async function(context) {
//     const { id } = context.query;
//     const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//     const show = await res.json();

//     return { show };
// };

export default Index;
