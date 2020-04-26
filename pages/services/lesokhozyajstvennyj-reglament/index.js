import { Component } from "react";
import fetch from "isomorphic-unfetch";
import { message } from "antd";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PostHeader from "../../../components/post/PostHeader";
import FeedbackForm from "../../../components/FeedbackForm";
import Services from "../../../components/Services";
import { servicesData } from "../../../constants/menuData";

const menuItem = "services";
const itemId = "lesokhozyajstvennyj-reglament";

class Index extends Component {
    render() {
        const { postData } = this.props;
        return (
            <Layout postData={postData} headerOpacity={true}>
                <PostHeader h1={postData.name} img={postData.img} />
                <div className="post">
                    <h3>Что такое лесохозяйственный регламент?</h3>
                    <p>
                        Лесохозяйственный регламент — это документ, который является основой использования, охраны,
                        защиты, воспроизводства лесов, расположенных в границах лесничества. Лесохозяйственные
                        регламенты обязательны для исполнения гражданами и юридическими лицами.
                    </p>
                    <p>Лесохозяйственный регламент составляется на срок до десяти лет.</p>
                    <h3>Кто может разрабатывать лесохозяйственные регламенты?</h3>
                    <p>
                        Разработка и утверждение лесохозяйственных регламентов являются полномочиями органов
                        государственной власти субъектов РФ (иначе говоря, их утверждает региональное Министерство
                        лесного хозяйства, если речь идёт о лесничествах на землях лесного фонда).
                    </p>
                    <p>
                        Лесохозяйственные регламенты лесничеств, расположенных на землях обороны и безопасности или
                        землях ООПТ, утверждаются уполномоченным федеральным органом исполнительной власти.
                        Лесохозяйственные регламенты лесничеств, расположенных на землях, находящихся в муниципальной
                        собственности, и землях населённых пунктов, на которых расположены городские леса, утверждаются
                        органами местного самоуправления.
                    </p>
                    <p>
                        На практике разработка лесохозяйственных регламентов часто осуществляется компетентными
                        сторонними организациями.{" "}
                        <Link href="/about" passHref>
                            <a className="post-a" href="">
                                Команда URMAN
                            </a>
                        </Link>{" "}
                        имеет большой опыт разработки и согласования лесохозяйственных регламентов — мы осуществляем
                        полный цикл работ от первичного сбора информации от лесничеств до внесения изменений по
                        результатам поступивших замечаний и предложений и последующего сопровождения в соответствии с
                        государственными контрактами.
                    </p>
                    <FeedbackForm
                        title="Оставьте заявку"
                        subTitle="Мы бесплатно проконсультируем Вас по любому вопросу, связанному с оформлением и использованием лесного участка"
                        backgroundImage="/images/4.webp"
                        withComment={true}
                    />
                    <h3>Что содержится в лесохозяйственном регламенте?</h3>
                    <p>
                        Состав лесохозяйственных регламентов, порядок их разработки, сроки их действия и порядок
                        внесения в них изменений утверждены приказом Минприроды России от 27.02.2017 № 72.
                    </p>
                    <p>В лесохозяйственном регламенте устанавливаются:</p>
                    <ol type="1">
                        <li>виды разрешённого использования лесов;</li>
                        <li>
                            возрасты рубок, расчётная лесосека, сроки использования лесов и другие параметры их
                            разрешённого использования;
                        </li>
                        <li>ограничение использования лесов в соответствии со статьёй 27 Лесного кодекса РФ;</li>
                        <li>требования к охране, защите, воспроизводству лесов.</li>
                    </ol>
                    <p>
                        Основой для разработки лесохозяйственного регламента являются сведения, содержащиеся в
                        государственном лесном реестре (ГЛР), материалы лесоустройства лесничества, материалы
                        специальных изысканий и исследований, документы территориального планирования.
                    </p>
                    <h3>При каких условиях вносятся изменения в лесохозяйственный регламент?</h3>
                    <p>Внесение изменений в лесохозяйственные регламенты осуществляется в случаях:</p>
                    <ol type="1">
                        <li>
                            изменения структуры и состояния лесов, выявленных в процессе проведения лесоустройства,
                            специальных обследований, включающих в себя сведения о лесных пожарах и лесных насаждениях,
                            повреждённых вредными организмами, промышленными выбросами, ветровалами (буреломами) и
                            другими негативными воздействиями, а также в результате лесопатологических обследований;
                        </li>
                        <li>принятия или изменения нормативных правовых актов в области лесных отношений;</li>
                        <li>
                            осуществления санитарно-оздоровительных мероприятий и мероприятий по ликвидации очагов
                            вредных организмов (по результатам их осуществления);
                        </li>
                        <li>выявления технических ошибок.</li>
                    </ol>
                    <h3>На какие документы влияет лесохозяйственный регламент?</h3>
                    <p>
                        Требования утверждённого лесохозяйственного регламента лесничества должны соблюдаться при
                        разработке{" "}
                        <Link href="/services/proektnaya-dokumentaciya-lesnogo-uchastka" passHref>
                            <a className="post-a" href="">
                                проектной документации лесного участка
                            </a>
                        </Link>{" "}
                        и{" "}
                        <Link href="/services/proekt-osvoeniya-lesov" passHref>
                            <a className="post-a" href="">
                                проектов освоения лесов
                            </a>
                        </Link>
                        . В частности, во многих случаях срок действия проекта освоения лесов ограничен сроком действия
                        лесохозяйственного регламента.
                    </p>
                    <p>
                        Виды и параметры использования лесов в{" "}
                        <Link href="/services/arenda-lesnogo-uchastka" passHref>
                            <a className="post-a" href="">
                                договоре аренды лесного участка
                            </a>
                        </Link>{" "}
                        , а также срок договора аренды устанавливаются в соответствии с лесохозяйственным регламентом.
                    </p>
                    <p>
                        Информация из лесохозяйственных регламентов обобщается в{" "}
                        <Link href="/services/lesnoj-plan" passHref>
                            <a className="post-a" href="">
                                лесных планах
                            </a>
                        </Link>{" "}
                        субъектов РФ, которые являются главными документами лесного планирования.
                    </p>
                    <p>
                        Невыполнение требований и нормативов лесохозяйственного регламента является основанием для
                        досрочного расторжения договора аренды лесного участка или договоров купли-продажи лесных
                        насаждений, а также принудительного прекращения права постоянного (бессрочного) пользования или
                        безвозмездного пользования лесным участком.
                    </p>
                </div>
                <div className="post">
                    <em>
                        <h4>Другие наши услуги:</h4>
                    </em>
                </div>
                <Services withPagePadding={true} bg={true} items={servicesData.filter((item) => item.id !== itemId)} />
                <FeedbackForm
                    title="Напишите свой вопрос"
                    subTitle="Мы бесплатно проконсультируем Вас по любому вопросу, связанному с оформлением и использованием лесного участка"
                    backgroundImage="/images/4.jpg"
                    withComment={true}
                />
                <style jsx>{`
                    .img-container {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    .img-item {
                        flex: 0 1 450px;
                        padding: 10px;
                    }
                    .img-item img {
                        width: 100%;
                    }
                `}</style>
            </Layout>
        );
    }
}

Index.getInitialProps = async function () {
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=forest');
    // const data = await res.json();

    return {
        postData: servicesData.find((item) => item.id === itemId),
    };
};

export default Index;
