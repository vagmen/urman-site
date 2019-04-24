import { Component } from "react";
import fetch from "isomorphic-unfetch";
import { message } from "antd";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout";
import ImgWithTitle from "../../../components/post/ImgWithTitle";
import RelatedPost from "../../../components/post/RelatedPost";
import ButtonViolet from "../../../components/ui/ButtonViolet";
import { connectHandler } from "../../../utils/localStorage";

const menuItem = "services";

class Index extends Component {
    state = {
        email: "",
    };
    sendServiceDocTemplate = async () => {
        const res = await fetch("https://helpforest.azurewebsites.net/SendServiceDocTemplate", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                To: this.state.email,
                ServiceCode: "pol",
            }),
        });
        const data = await res.json();
        if (data) message.success("Мы отправили письмо с вложенной формой на вашу почту");
    };

    render() {
        const { email } = this.state;
        const { postData } = this.props;
        return (
            <Layout postData={postData}>
                <Head>
                    <link ref="canonical" href="http://urman.su/services/proekt-osvoeniya-lesov" />
                </Head>
                <div className="template-background">
                    <div className="page-content">
                        <div className="post">
                            <header>
                                <h1>{postData.name}</h1>
                                <img src="/static/forest.webp" className="post-img" alt={postData.name} />
                            </header>
                            <h3>Что такое проект освоения лесов? </h3>
                            <p>
                                Проект освоения лесов (или, сокращённо, ПОЛ) — это один из основных документов,
                                описывающих особенности использования лесов на конкретном лесном участке. Данный проект
                                разрабатывается в соответствии со статьёй 88 Лесного кодекса РФ после регистрации
                                договора аренды лесного участка или права постоянного (бессрочного) пользования.
                            </p>
                            <p>
                                Основой разработки проекта является приказ Федерального агентства лесного хозяйства
                                (Рослесхоза) от 29 февраля 2012 года № 69 «Об утверждении состава проекта освоения лесов
                                и порядка его разработки». Содержание проекта должно соответствовать
                                правоустанавливающему документу (например, договору аренды лесного участка), а также
                                нормам законодательства РФ, лесохозяйственному регламенту лесничества, в котором
                                расположен лесной участок, и лесному плану субъекта РФ.
                            </p>
                            <p>
                                Невыполнение требований проекта освоения лесов является основанием для досрочного
                                расторжения договора аренды или принудительного прекращения права постоянного
                                (бессрочного) пользования лесным участком.
                            </p>
                            <ImgWithTitle
                                title="Титульный лист проекта освоения лесов"
                                src="/static/images/services/pol/titulnyj-list-proekta-osvoeniya-lesov.webp"
                            />
                            <ImgWithTitle
                                title="Пример тематической лесной карты характеристики территории лесного участка по классам пожарной опасности"
                                src="/static/images/services/pol/primer-tematicheskoj-lesnoj-karty-kharakteristiki-territorii-lesnogo-uchastka-po-klassam-pozharnoj-opasnosti.webp"
                            />
                            <h3>Разработка проекта освоения лесов</h3>
                            <p>
                                Проект освоения лесов может быть разработан как лицом, использующим леса, так и
                                специализированной организацией. Сведения о разработчике проекта отражаются в самом
                                проекте.
                            </p>
                            <p>
                                Составление проекта освоения лесов может занять от 7 до 30 дней в зависимости от
                                сложности. С учётом длительности получения необходимых документов (например, выписки из
                                государственного лесного реестра), последующей экспертизы проекта освоения лесов (до 30
                                дней), а также повторной экспертизы (до 10 дней), о которых речь пойдёт ниже, полный
                                цикл разработки проекта может затянуться на несколько месяцев. Но срок утверждения
                                проекта освоения лесов, как правило, ограничен, что отдельно указывается в некоторых
                                правоустанавливающих документах. Поэтому после заключения договора аренды или получения
                                права постоянного (бессрочного) пользования лесным участком нужно оперативно начать
                                разработку проекта.
                            </p>
                            <p>Стоимость разработки проекта освоения лесов также зависит от нескольких факторов:</p>
                            <ul>
                                <li>вид использования лесов;</li>
                                <li>площадь лесного участка;</li>
                                <li>особенности лесного участка и договора аренды.</li>
                            </ul>
                            <p>
                                Минимальная цена разработки проекта составляет <span className="number">10 000</span>{" "}
                                рублей. Точную стоимость Вы можете уточнить, связавшись с нашим специалистом.
                            </p>
                            <div className="centered">
                                <ButtonViolet onClick={connectHandler}>
                                    Рассчитать стоимость проекта освоения лесов
                                </ButtonViolet>
                            </div>
                            <p>
                                При заказе разработки проекта освоения лесов у нас Вам не придётся самостоятельно
                                разбираться в деталях проектирования и участвовать в бюрократических процедурах. Мы
                                максимально упростим весь процесс. Посмотрите{" "}
                                <Link href="/clients/feedback">
                                    <a className="post-a" href="">
                                        отзывы
                                    </a>
                                </Link>{" "}
                                наших клиентов — это лучшее подтверждение многолетнего опыта и профессионализма
                                компании.
                            </p>
                            <h3>Срок действия проекта освоения лесов</h3>
                            <p>
                                Для большинства видов использования лесов проект освоения лесов разрабатывается на срок
                                не более десяти лет. При этом он не должен превышать срок действия договора аренды и
                                лесохозяйственного регламента. То есть, например, если срок действия лесохозяйственного
                                регламента истекает через два года, то и проект освоения лесов будет действовать лишь
                                два года, после чего нужно будет разработать новый проект (причём лучше сделать это за
                                несколько месяцев до истечения срока).
                            </p>
                            <p>
                                С 1 января 2019 года действуют новые лесохозяйственные регламенты большинства
                                лесничеств. Если у Вас был старый проект освоения лесов, а новый вы ещё не сделали, то
                                Вам нужно сделать его как можно скорее, чтобы минимизировать размеры возможных штрафов.
                                Подробнее об этом читайте в нашем журнале:
                            </p>
                            <RelatedPost
                                title="У вашего Проекта освоения лесов вышел срок годности"
                                bgr="/static/forest.webp"
                                href="/journal/out-of-date"
                            />
                            <p>
                                Проекты освоения лесов составляются на срок действия договора аренды лесного участка
                                только для трёх видов использования лесов:
                            </p>
                            <ul>
                                <li>
                                    осуществление геологического изучения недр, разведка и добыча полезных ископаемых;
                                </li>
                                <li>
                                    строительство и эксплуатация водохранилищ и иных искусственных водных объектов, а
                                    также гидротехнических сооружений, морских портов, морских терминалов, речных
                                    портов, причалов;
                                </li>
                                <li>строительство, реконструкция, эксплуатация линейных объектов.</li>
                            </ul>
                            <h3>Содержание проекта освоения лесов</h3>
                            <p>Проект освоения лесов содержит следующие сведения:</p>
                            <ul>
                                <li>разрешённые виды и проектируемые объёмы использования лесов;</li>
                                <li>мероприятия по охране, защите и воспроизводству лесов;</li>
                                <li>мероприятия по созданию объектов лесной и лесоперерабатывающей инфраструктуры;</li>
                                <li>мероприятия по охране объектов животного мира и водных объектов;</li>
                                <li>
                                    мероприятия по строительству, реконструкции и эксплуатации объектов, не связанных с
                                    созданием лесной инфраструктуры (в случаях, предусмотренных частью 1 статьи 21
                                    Лесного кодекса РФ).
                                </li>
                            </ul>
                            <ImgWithTitle
                                title="Пример тематической лесной карты пространственного размещения существующих и проектируемых объектов лесной инфраструктуры"
                                src="/static/images/services/pol/primer-tematicheskoj-lesnoj-karty-prostranstvennogo-razmeshcheniya-sushchestvuyushchikh-i-proektiruemykh-obektov-lesnoj-infrastruktury.webp"
                            />
                            <ImgWithTitle
                                title="Пример тематической лесной карты характеристики существующих и проектируемых объектов, не связанных с созданием лесной инфраструктуры"
                                src="/static/images/services/pol/primer-tematicheskoj-lesnoj-karty-kharakteristiki-sushchestvuyushchikh-i-proektiruemykh-obektov-ne-svyazannykh-s-sozdaniem-lesnoj-infrastruktury.webp"
                            />
                            {/* <p>Подробнее об этом читайте в нашем журнале:</p>
                            <Link href="/journal/out-of-date">
                                <div className="post-card">
                                    <a href="">У вашего Проекта освоения лесов вышел срок годности</a>
                                </div>
                            </Link> */}
                            <p>
                                Проект состоит из общей и специальной частей. Общая часть составляется для всех видов
                                использования лесов. Специальная часть называется «Организация использования лесов» и
                                включает в себя подразделы, соответствующие видам разрешённого использования лесов,
                                предусмотренным правоустанавливающим документом.
                            </p>
                            <p>
                                Информация в проекте освоения лесов оформляется в виде текстовых, табличных и
                                графических материалов. Все картографические материалы изготавливаются в масштабах,
                                предусмотренных действующей лесоустроительной инструкцией.
                            </p>
                            <h3>Внесение изменений в проект освоения лесов</h3>
                            <p>Внесение изменений в проект освоения лесов допускается только в двух случаях:</p>
                            <ul>
                                <li>при изменении лесохозяйственного регламента лесничества;</li>
                                <li>при изменении условий договора аренды.</li>
                            </ul>
                            <p>
                                Поэтому при первичной разработке проекта освоения лесов необходимо тщательно продумать
                                все вопросы — в частности, как и в каких объёмах вы будете использовать леса, какие
                                объекты планируете разместить на лесном участке.
                            </p>
                            <h3>Экспертиза проекта освоения лесов</h3>
                            <p>
                                Разработанный проект должен пройти экспертизу в соответствии с приказом Минприроды
                                России от 26 сентября 2016 года № 496 «Об утверждении порядка государственной или
                                муниципальной экспертизы проекта освоения лесов».
                            </p>
                            <ImgWithTitle
                                title="Пример экспертного заключения по проекту освоения лесов"
                                src="/static/images/services/pol/primer-ehkspertnogo-zaklyucheniya-po-proektu-osvoeniya-lesov-01.webp"
                            />
                            <ImgWithTitle
                                title="Пример экспертного заключения по проекту освоения лесов"
                                src="/static/images/services/pol/primer-ehkspertnogo-zaklyucheniya-po-proektu-osvoeniya-lesov-02.webp"
                            />
                            <p>
                                Для проведения экспертизы необходимо представить в уполномоченный орган следующие
                                документы:
                            </p>
                            <ol>
                                <li>
                                    заявление по форме, представленной в приказе Минприроды России от 15 февраля 2018
                                    года № 57 «Об утверждении Административного регламента предоставления органом
                                    государственной власти субъекта Российской Федерации в области лесных отношений
                                    государственной услуги по проведению государственной экспертизы проектов освоения
                                    лесов, расположенных на землях лесного фонда».
                                    <p>Заявление содержит следующие сведения:</p>
                                    <ol type="a">
                                        <li>
                                            сведения о лице, использующем леса (полное и сокращённое наименование, адрес
                                            места нахождения, банковские реквизиты — для юридического лица; фамилия,
                                            имя, отчество (при наличии), адрес места жительства, индивидуальный
                                            налоговый номер (ИНН), данные документа, удостоверяющего личность, — для
                                            гражданина или индивидуального предпринимателя);
                                        </li>
                                        <li>
                                            дата, номер регистрации договора аренды или права постоянного (бессрочного)
                                            пользования лесным участком, кадастровый номер участка;
                                        </li>
                                        <li>
                                            местоположение, площадь лесного участка, вид и срок использования лесов;
                                        </li>
                                    </ol>
                                </li>
                                <li>копию документа, удостоверяющего личность заявителя или представителя;</li>
                                <li>
                                    копию документа, удостоверяющего полномочия представителя (если с заявлением
                                    обращается представитель);
                                </li>
                                <li>
                                    проект освоения лесов на бумажном носителе в двух экземплярах или в электронном виде
                                    в форме электронного документа, подписанного электронной подписью.
                                </li>
                            </ol>
                            <p>
                                Экспертиза проводится в срок не более чем 30 дней. При выявлении замечаний по оформлению
                                проекта освоения лесов он возвращается для устранения замечаний в течение 2 рабочих
                                дней; срок устранения замечаний составляет 5 рабочих дней.
                            </p>
                            <ImgWithTitle
                                title="Пример приказа об утверждении положительного заключения государственной экспертизы Комитет лесного хозяйства Московской области"
                                src="/static/images/services/pol/primer-prikaza-ob-utverzhdenii-polozhitelnogo-zaklyucheniya-gosudarstvennoj-ehkspertizy-komitet-lesnogo-khozyajstva-moskovskoj-oblasti.webp"
                            />
                            <ImgWithTitle
                                title="Пример приказа об утверждении положительного заключения государственной экспертизы Министерство лесного хозяйства Республики Башкортостан"
                                src="/static/images/services/pol/primer-prikaza-ob-utverzhdenii-polozhitelnogo-zaklyucheniya-gosudarstvennoj-ehkspertizy-ministerstvo-lesnogo-khozyajstva-respubliki-bashkortostan.webp"
                            />
                            <p>
                                Заключение экспертизы направляется лесопользователю в течение 5 дней после его
                                утверждения. Если заключение положительное, то оно действует на протяжении срока
                                действия проекта. Если заключение отрицательное, то проект дорабатывается с учётом
                                замечаний и направляется на повторную экспертизу, которая занимает не более 10 рабочих
                                дней.
                            </p>
                            <p>
                                В соответствии с п. 34 приказа Рослесхоза от 29 февраля 2012 года № 69 «Об утверждении
                                состава проекта освоения лесов и порядка его разработки» проект освоения лесов
                                представляется в уполномоченный орган в трёх экземплярах на бумажных носителях и один —
                                в электронном виде. Одна из бумажных копий остаётся в уполномоченном органе, вторая
                                отдаётся в лесничество, а третья остаётся заявителю.
                            </p>
                            <h3>Штрафы, проверки?</h3>
                            <p>
                                За нарушение срока разработки и представления арендодателю проекта освоения лесов для
                                проведения экспертизы (в течение 6 месяцев со дня заключения договора аренды и не
                                позднее чем за 6 месяцев до окончания срока действия текущего проекта), а также за
                                использование лесного участка без проекта освоения лесов арендатор уплачивает неустойку
                                в размере 50 тыс. рублей (для ФЛ и ИП) или 150 тыс. рублей (для ЮЛ) за каждый полный
                                календарный месяц просрочки. Такое требование прописано в большинстве договоров аренды
                                лесных участков. Поэтому необходимо адекватно оценивать имеющиеся сроки и
                                заблаговременно начинать разработку проекта освоения лесов.
                            </p>
                            <p>
                                Надзорные органы регулярно проводят проверку лесных участков. Будут ли у Вас проблемы
                                при использовании лесного участка, штрафы и иные последствия проверок, во многом зависит
                                от полноты и качества представленной в проекте освоения лесов информации.
                            </p>
                            <em>
                                <h4>Смотрите также:</h4>
                            </em>
                            <RelatedPost
                                title="Проектная документация лесного участка"
                                bgr="../../../static/forest2.jpg"
                                href="/services/pdlu"
                            />
                            <RelatedPost
                                title="Договор аренды лесного участка"
                                bgr="../../../static/arenda.webp"
                                href="/services/arenda-lesnogo-uchastka"
                            />
                            <p>
                                Если у Вас остались вопросы или вы решили заказать разработку проекта освоения лесов —{" "}
                                <Link href="/contacts">
                                    <a className="post-a" href="">
                                        свяжитесь
                                    </a>
                                </Link>{" "}
                                с нашим специалистом, и мы Вам поможем!
                            </p>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    header img {
                        width: 100%;
                    }
                    .img-container {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    .img-item {
                        flex: 0 1 300px;
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

Index.getInitialProps = async function() {
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=forest');
    // const data = await res.json();

    return {
        postData: {
            name: "Проект освоения лесов (ПОЛ)",
            title: "Проект освоения лесов 🌳 разработка, состав, экспертиза стоимость по России",
            description:
                "Разработаем проект освоения лесов на арендованный вами участок. Гарантия прохождения экспертизы. В соответствии с требованиями законодательства к порядку разработки и срокам действия. Согласно состава. Если хотите узнать стоимость - звоните! Цена Вас приятно удивит.",
        },
    };
};

export default Index;
