import { Component } from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PostHeader from "../../../components/post/PostHeader";
import FeedbackForm from "../../../components/FeedbackForm";
import Services from "../../../components/Services";
import { servicesData } from "../../../constants/menuData";

const itemId = "kadastrovyj-uchyot-lesnykh-uchastkov";

class Index extends Component {
    render() {
        const { postData } = this.props;
        return (
            <Layout postData={postData} headerOpacity={true}>
                <PostHeader h1={postData.name} img={postData.img} />
                <div className="post">
                    <h3>Что такое государственный кадастровый учёт?</h3>
                    <p>
                        Если Вы планируете взять объект недвижимости (например, лесной участок) в аренду или под иное
                        право, то Вам необходимо осуществить государственный кадастровый учёт этого объекта, то есть
                        внести сведения о нём в Единый государственный реестр недвижимости (ЕГРН).
                    </p>
                    <p>
                        ЕГРН — это свод достоверных систематизированных сведений об учтённом недвижимом имуществе. В
                        данный реестр вносятся сведения о зарегистрированных правах на недвижимое имущество (земельные
                        участки, здания, сооружения и др.), основаниях их возникновения, правообладателях.
                    </p>
                    <p>
                        Согласно статье 92 Лесного кодекса РФ государственный кадастровый учёт лесных участков
                        осуществляется в соответствии с Федеральным законом от 13 июля 2015 года № 218-ФЗ «О
                        государственной регистрации недвижимости».
                    </p>
                    <h3>На основании чего осуществляется кадастровый учёт?</h3>
                    <p>
                        Основания кадастрового учёта перечислены в статье 14 Федерального закона от 13 июля 2015 года №
                        218-ФЗ «О государственной регистрации недвижимости». В случае с лесными участками одним из самых
                        распространённых оснований является межевой план.
                    </p>
                    <p>
                        Если образование земельного участка осуществлено в соответствии с требованиями Лесного кодекса
                        РФ, то, согласно пункту 4 части 11 статьи 41 указанного Федерального закона, для ГКУ необходимо
                        предоставить также{" "}
                        <Link href="/services/proektnaya-dokumentaciya-lesnogo-uchastka" passHref>
                            <a className="post-a" href="">
                                проектную документацию лесного участка
                            </a>
                        </Link>{" "}
                        (и приказ о её утверждении).
                    </p>
                    <h3>Как происходит постановка лесных участков на кадастровый учёт?</h3>
                    <p>
                        ГКУ осуществляется Федеральной службой государственной регистрации, кадастра и картографии
                        (Росреестром) и его территориальными органами в следующей последовательности:
                    </p>
                    <ol>
                        <li>подача заявления о ГКУ и прилагаемых к нему документов;</li>
                        <li>
                            проведение правовой экспертизы документов (проверка действительности поданных документов,
                            наличия соответствующих прав у подготовившего документ лица, наличия ранее
                            зарегистрированных и ранее заявленных прав);
                        </li>
                        <li>непосредственно ГКУ и внесение сведений в ЕГРН;</li>
                        <li>выдача документов, подтверждающих осуществление ГКУ.</li>
                    </ol>
                    <p>
                        ГКУ осуществляется за 7 рабочих дней при подаче заявления через МФЦ и за 5 рабочих дней при
                        подаче заявления сразу в орган регистрации прав. Если в заявлении одновременно указана
                        необходимость государственной регистрации прав, то сроки увеличиваются до 12 и 10 рабочих дней
                        соответственно.
                    </p>
                    <h3>Особенности постановки лесных участков на кадастровый учёт</h3>
                    <p>
                        Необходимо иметь в виду, что в соответствии с частью 1 статьи 8 Лесного кодекса РФ лесные
                        участки в составе земель лесного фонда находятся в федеральной собственности, то есть в
                        собственности Российской Федерации. Поэтому, согласно части 5.1 статьи 15 Федерального закона от
                        13 июля 2015 года № 218-ФЗ «О государственной регистрации недвижимости», государственный
                        кадастровый учёт лесных участков в составе земель лесного фонда осуществляется по заявлению
                        органа государственной власти субъекта РФ, которому переданы полномочия Российской Федерации в
                        области лесных отношений.
                    </p>
                    <p>
                        В соответствии с частью 1.1 статьи 4.2 Федерального закона от 4 декабря 2006 года № 201-ФЗ «О
                        введении в действие Лесного кодекса Российской Федерации» не требуется осуществление
                        государственного кадастрового учёта частей лесных участков, которые предоставляются в аренду
                        сроком до одного года при осуществлении геологического изучения недр, разведке и добыче полезных
                        ископаемых, а также при строительстве, реконструкции, эксплуатации линейных объектов.
                    </p>
                    <p>
                        Кадастровый учёт лесных участков, предоставляемых в пользование для строительства,
                        реконструкции, эксплуатации линейных объектов, осуществляется на основании проекта межевания
                        территории.
                    </p>
                    <p>
                        Кадастровые инженеры{" "}
                        <Link href="/about" passHref>
                            <a className="post-a" href="">
                                команды URMAN
                            </a>
                        </Link>{" "}
                        возьмут на себя все технические и юридические трудности и помогут Вам поставить лесной участок
                        на кадастровый учёт. Работы осуществляются в полном соответствии с Федеральным законом от 24
                        июля 2007 года № 221-ФЗ «О кадастровой деятельности».
                    </p>
                    <FeedbackForm
                        title="Получите консультацию"
                        subTitle="Если у Вас есть вопрос по кадастровому учету — свяжитесь с нашим специалистом, и мы Вам поможем."
                        backgroundImage="/images/4.webp"
                        withComment={true}
                    />
                    <h3>О кадастровых номерах</h3>
                    <p>
                        При ГКУ объекту недвижимости присваивается уникальный неизменяемый кадастровый номер, например:
                    </p>
                    <ul className="without-mark">
                        <li>19:11:111213:90, где</li>
                        <li>19 — это учётный номер кадастрового округа,</li>
                        <li>19:11 — учётный номер кадастрового района,</li>
                        <li>19:11:111213 — учётный номер кадастрового квартала,</li>
                        <li>90 — порядковый номер записи об объекте недвижимости в ЕГРН.</li>
                    </ul>
                    <p>Вся эта последовательность целиком и является кадастровым номером объекта недвижимости.</p>
                    <p>
                        Как видно, при записи кадастрового номера между единицами кадастрового деления ставится
                        разделитель в виде двоеточия.
                    </p>
                    <p>
                        Порядок присвоения кадастровых номеров утверждён приказом Минэкономразвития России от 24 ноября
                        2015 года № 877 «Об утверждении порядка кадастрового деления территории Российской Федерации,
                        порядка присвоения объектам недвижимости кадастровых номеров, номеров регистрации, реестровых
                        номеров границ».
                    </p>
                    <h3>Как посмотреть сведения о своём лесном участке?</h3>
                    <p>
                        Если государственный кадастровый учёт лесного участка уже осуществлён, то Вы можете посмотреть
                        основные сведения о нём на сайте Росреестра в разделе «Справочная информация по объектам
                        недвижимости в режиме online» на этой странице:
                    </p>
                    <p>
                        <a className="post-a" href="https://rosreestr.ru/wps/portal/online_request">
                            https://rosreestr.ru/wps/portal/online_request
                        </a>
                    </p>
                    <p>
                        Достаточно заполнить поле «Кадастровый номер», ввести текст с картинки внизу страницы и нажать
                        на кнопку «Сформировать запрос». После этого откроется страница, где вы сможете посмотреть
                        статус объекта, дату постановки на кадастровый учёт, категорию земель, точную площадь,
                        кадастровую стоимость, номер и дату государственной регистрации права.
                    </p>
                    <p>Аналогичные сведения доступны и на публичной кадастровой карте (ПКК) на нашем сайте:</p>
                    <p>
                        <iframe
                            src="https://egrp365.ru/p_map/?ref=bt"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            allowFullScreen="allowfullscreen"
                        />
                    </p>
                    <p>
                        Здесь нужно ввести кадастровый номер и нажать на кнопку «Найти участок». В текстовом блоке
                        отобразятся сведения об участке. Если при постановке на кадастровый учёт в ЕГРН были внесены
                        сведения о границах запрашиваемого лесного участка, то он отобразится на карте. Для удобства
                        восприятия лучше подгрузить картографическую подложку.
                    </p>
                    <h3>Как получить выписку из ЕГРН?</h3>
                    <p>
                        Выписка из ЕГРН (ранее — кадастровый паспорт) удостоверяет проведение государственного
                        кадастрового учёта и также содержит сведения об объекте недвижимости.
                    </p>

                    <p>
                        Выписка из ЕГРН необходима при участии в аукционе на право заключения договора{" "}
                        <Link href="/services/arenda-lesnogo-uchastka" passHref>
                            <a className="post-a" href="">
                                аренды лесного участка
                            </a>
                        </Link>{" "}
                        (разумеется, в этом случае в выписке ещё не будет сведений о Вас как о правообладателе) и при
                        разработке{" "}
                        <Link href="/services/proekt-osvoeniya-lesov" passHref>
                            <a className="post-a" href="">
                                проекта освоения лесов
                            </a>
                        </Link>
                        .
                    </p>
                    <p>
                        Выписку из ЕГРН об основных характеристиках и зарегистрированных правах на объект недвижимости
                        можно получить на сайте Росреестра, заполнив все необходимые поля на этой странице:
                    </p>
                    <p>
                        <a className="post-a" href="https://rosreestr.ru/wps/portal/p/cc_present/EGRN_1">
                            https://rosreestr.ru/wps/portal/p/cc_present/EGRN_1
                        </a>
                    </p>
                    <p>
                        Также можно получить выписку из ЕГРН через многофункциональный центр (МФЦ). Выписка
                        предоставляется в срок не более трёх рабочих дней со дня получения органом регистрации прав
                        запроса о предоставлении сведений.
                    </p>
                    <p>
                        В большинстве случаев за предоставление выписки из ЕГРН взимается плата. Размеры платы
                        установлены приказом Минэкономразвития России от 10 мая 2016 года № 291.
                    </p>
                </div>

                <div className="post">
                    <em>
                        <h4>Другие наши услуги:</h4>
                    </em>
                </div>
                <Services withPagePadding={true} bg={true} items={servicesData.filter((item) => item.id !== itemId)} />
                <FeedbackForm
                    title="Свяжитесь с нами!"
                    subTitle="Специалисты URMAN помогут Вам в кратчайшие сроки получить выписку из ЕГРН для Вашего лесного участка."
                    backgroundImage="/images/4.webp"
                    withComment={true}
                />
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

Index.getInitialProps = async function () {
    return {
        postData: servicesData.find((item) => item.id === itemId),
    };
};

export default Index;
