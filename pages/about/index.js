import Link from "next/link";
import Layout from "../../components/Layout";
import Statistics from "../../components/Statistics";

const Index = () => (
    <Layout menuItem="about">
        <div className="template-background">
            <div className="page-content">
                <div className="post about">
                    <h1>URMAN — это команда экспертов в лесной сфере для Вас и Вашего бизнеса.</h1>
                    <img className="post-img" src="../../static/images/about/about6.jpg" alt="Команда" />
                    <p>
                        Сегодня лесное хозяйство тесно переплетено с другими отраслями, и чтобы выполнять работы
                        качественно, недостаточно разбираться только в лесной тематике, поэтому в нашей команде наряду
                        со специалистами лесного хозяйства (такими как таксатор, лесопатолог, инженер лесного хозяйства)
                        также работают кадастровые инженеры, землеустроители, картографы и юристы.
                    </p>
                    <img className="post-img" src="../../static/images/about/about4.jpg" alt="Сотрудники" />
                    <p>
                        Если Вы планируете какую-либо деятельность на землях лесного фонда, будь то заготовка древесины
                        или организация базы отдыха, Вам необходимо провести анализ лесного участка, правильно оформить
                        документы, чтобы в процессе использования не было проблем и претензий со стороны проверяющих
                        органов. Наша цель — максимально упростить процесс оформления и использования лесного участка
                        для наших клиентов.
                    </p>
                    <img
                        className="post-img"
                        src="../../static/images/about/about7.jpg"
                        alt="Сотрудники в процессе работы"
                    />
                    <p>
                        Мы не «распыляемся» на другие ниши. С каждым днём наращиваем экспертность в своём направлении.
                        Это позволяет сплочённой команде из 15 человек решать поставленные задачи по всей России —
                        начиная от разработки{" "}
                        <Link href="/services/proekt-osvoeniya-lesov">
                            <a className="post-a" href="">
                                проектов освоения лесов
                            </a>
                        </Link>{" "}
                        и заканчивая разработкой лесных планов субъектов РФ.
                    </p>
                    <p>
                        Сейчас у нас функционирует{" "}
                        <Link href="/contacts">
                            <a className="post-a" href="">
                                2 офиса (в Москве и в Уфе)
                            </a>
                        </Link>
                        . Проектный отдел находится в Уфе.
                    </p>
                    <img
                        className="post-img"
                        src="../../static/images/about/about1.jpg"
                        alt="Сотрудники в процессе работы"
                    />
                    <img
                        className="post-img"
                        src="../../static/images/about/about2.jpg"
                        alt="Сотрудники в процессе работы"
                    />
                    <img
                        className="post-img"
                        src="../../static/images/about/about3.jpg"
                        alt="Сотрудники в процессе работы"
                    />
                    <img
                        className="post-img"
                        src="../../static/images/about/about5.jpg"
                        alt="Сотрудники в процессе работы"
                    />
                    <img
                        className="post-img"
                        src="../../static/images/about/about9.jpg"
                        alt="Сотрудники в процессе работы"
                    />
                    <img className="post-img" src="../../static/images/about/about10.jpg" alt="Московский офис" />
                    <img
                        className="post-img"
                        src="../../static/images/about/about8.jpg"
                        alt="Сотрудники в процессе работы"
                    />
                    <p>Да пребудет с Вами URMAN.</p>
                    <Statistics />
                </div>
            </div>
        </div>
    </Layout>
);

export default Index;
