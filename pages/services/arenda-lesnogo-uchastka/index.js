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
import PostHeader from "../../../components/post/PostHeader";
import FeedbackForm from "../../../components/FeedbackForm";
import Services from "../../../components/Services";
import { servicesData } from "../../../constants/menuData";

const menuItem = "services";
const itemId = "arenda-lesnogo-uchastka";

class Index extends Component {
    render() {
        const { postData } = this.props;
        return (
            <Layout postData={postData} headerOpacity={true}>
                <PostHeader h1={postData.name} img={postData.img} />
                <div className="post">
                    <p>
                        Право аренды лесного участка, находящегося в государственной или муниципальной собственности, —
                        это один из основных видов прав (помимо права постоянного (бессрочного) пользования и права
                        безвозмездного пользования), на основании которого можно пользоваться лесным участком.
                    </p>
                    <p>
                        Арендатором может стать как физическое лицо или индивидуальный предприниматель, так и
                        юридическое лицо.
                    </p>
                    <p>
                        В случае предоставления лесного участка в аренду между арендатором и уполномоченным органом
                        заключается договор аренды лесного участка. Примеры договоров представлены в приложениях к
                        приказу Минприроды России от 20.12.2017 № 693 «Об утверждении типовых договоров аренды лесных
                        участков».
                    </p>
                    <h3>Сколько стоит аренда лесного участка?</h3>
                    <p>
                        Расчёт арендной платы производится арендодателем (уполномоченным органом) и фиксируется в
                        приложении к договору аренды.
                    </p>
                    <p>
                        Начальный размер ежегодной арендной платы определяется на основе минимального размера арендной
                        платы. В свою очередь, минимальный размер равен произведению ставки платы за единицу площади
                        лесного участка (либо объёма лесных ресурсов) и непосредственно его площади (либо объёма изъятия
                        лесных ресурсов на арендуемом лесном участке).
                    </p>
                    <p>
                        Ставки платы утверждены постановлением Правительства РФ от 22.05.2007 № 310. Ставки платы
                        ежегодно индексируются; по состоянию на 2019 год действуют коэффициенты, установленные
                        постановлением Правительства РФ от 11.11.2017 № 1363.
                    </p>
                    <p>
                        Если лесной участок предоставлен в аренду по результатам торгов на срок от десяти лет, то размер
                        арендной платы определяется в соответствии с методикой, утверждённой постановлением
                        Правительства РФ от 01.02.2016 № 53.
                    </p>
                    <p>
                        Вот пример расчёта арендной платы за 2019 год за лесной участок площадью 0,08 га при ведении
                        сельского хозяйства (пчеловодства), взятый из реального договора аренды:
                    </p>
                    <ul className="without-mark">
                        <li>А = Б*К*П, где</li>
                        <li>А — размер арендной платы, руб.;</li>
                        <li>Б — базовая ставка арендной платы: 14,85 рублей (за 1 пчелосемью);</li>
                        <li>К — коэффициент индексации ставки арендной платы в 2019 году: 1,89;</li>
                        <li>П — количество пчелосемей: 16 штук (исходя из норматива 1 га — 200 пчелосемей).</li>
                    </ul>
                    <p>Таким образом, арендная плата за полный 2019 год для рассматриваемого участка составляет:</p>
                    <ul className="without-mark">
                        <li>А = 14,85*1,89*16 = 449,12 рублей.</li>
                    </ul>
                    <div className="centered">
                        <ButtonViolet onClick={connectHandler}>Узнать стоимость</ButtonViolet>
                    </div>
                    <p>
                        Необходимо помнить, что в случае проведения аукциона арендная плата неизбежно повысится и будет
                        равняться конечной цене аукциона.
                    </p>
                    <p>
                        Начисление арендной платы осуществляется со дня государственной регистрации договора аренды,
                        если договор заключается на срок не менее 1 года, и со дня подписания договора, если договор
                        заключается на срок менее 1 года.
                    </p>
                    <p>
                        Арендная плата должна вноситься в установленные сроки. Первый платёж должен быть осуществлён в
                        течение 30 дней с даты подписания акта приёма-передачи лесного участка. За нарушение сроков
                        внесения арендной платы арендатор уплачивает неустойку в размере 0,1 % от суммы просроченного
                        платежа за каждый день просрочки.
                    </p>
                    <h3>Базовые условия, необходимые для заключения договора аренды</h3>
                    <ol>
                        <li>
                            Объектом аренды могут быть только лесные участки, прошедшие государственный кадастровый
                            учёт. Об этой процедуре читайте в нашей статье{" "}
                            <Link href="/services/pdlu" passHref>
                                <a className="post-a" href="">
                                    «Проектная документация лесного участка»
                                </a>
                            </Link>
                            .
                        </li>
                        <li>
                            Лица, желающие арендовать лесной участок, не должны значиться в реестре недобросовестных
                            арендаторов лесных участков и покупателей лесных насаждений.
                        </li>
                    </ol>
                    {/* <RelatedPost
                                title="Проектная документация лесного участка"
                                bgr="../../../forest2.jpg"
                                href="/services/pdlu"
                            /> */}
                    <h3>Аренда лесного участка без торгов</h3>
                    <p>Заключение договора аренды без проведения торгов возможно в случаях:</p>
                    <ol>
                        <li>предусмотренных статьями 36, 43—45 Лесного кодекса РФ;</li>
                        <li>реализации приоритетных инвестиционных проектов в области освоения лесов;</li>
                        <li>
                            заготовки древесины при использовании лесов в соответствии со статьями 43—46 Лесного кодекса
                            РФ;
                        </li>
                        <li>
                            нахождения на лесных участках зданий, сооружений (договоры аренды заключаются с
                            собственниками этих зданий, сооружений, помещений в них или юридическими лицами, которым эти
                            объекты предоставлены на праве хозяйственного ведения или оперативного управления).
                        </li>
                    </ol>
                    <p>
                        В соответствии с частью 1 статьи 74 Лесного кодекса РФ, арендатор лесного участка по истечении
                        срока действия договора аренды имеет право на заключение нового договора без проведения торгов в
                        двух случаях:
                    </p>
                    <ol>
                        <li>лесной участок был предоставлен в аренду без проведения торгов;</li>
                        <li>лесной участок был предоставлен в аренду по результатам торгов на срок от десяти лет.</li>
                    </ol>
                    <p>
                        При этом должна соблюдаться совокупность условий, установленных частью 2 статьи 74 Лесного
                        кодекса РФ. В частности, заявление о заключении нового договора аренды должно быть подано не
                        ранее чем за три месяца и не позднее чем за два месяца до истечения срока действия заключённого
                        ранее договора.
                    </p>
                    <h3>Аренда лесного участка по результатам аукциона</h3>
                    <p>
                        Договор аренды может заключаться по результатам торгов. Торги могут проводиться в двух формах:
                        открытый конкурс (только для заготовки древесины) и открытый аукцион (для всех видов
                        использования лесов). Особенности проведения открытого конкурса изложены в статьях 80.1 и 80.2
                        Лесного кодекса РФ; в настоящей статье мы не будем подробно останавливаться на этой теме, а
                        рассмотрим только порядок участия в открытом аукционе (статьи 78—80 Лесного кодекса РФ).
                    </p>
                    <p>Вот краткая инструкция по участию в аукционе:</p>
                    <ol>
                        <li>
                            Подать заявление о проведении аукциона на право заключения договора аренды лесного участка,
                            приложив{" "}
                            <Link href="/services/pdlu" passHref>
                                <a className="post-a" href="">
                                    проектную документацию лесного участка
                                </a>
                            </Link>{" "}
                            и выписку из Единого государственного реестра недвижимости (ЕГРН). В течение месяца оно
                            будет рассмотрено, и уполномоченным органом будет принято решение о проведении аукциона или
                            об отказе в его проведении, которое должно быть размещено на официальном сайте. Данный этап
                            регулируется приказом Минприроды России от 29.06.2018 № 302;
                        </li>
                        <li>
                            Изучить извещение о проведении аукциона. В нём, среди прочего, должны быть указаны сведения
                            об организаторе, месте, дате и времени проведения аукциона, о лесном участке
                            (местоположение, площадь, кадастровый номер), о начальной цене и шаге аукциона, о форме
                            заявки на участие в аукционе, о размере и порядке внесения задатка, о сроке аренды и др.
                            Если аукцион проводится в электронной форме, то в извещении также будут указаны сведения о
                            соответствующей электронной площадке. Для использования электронной площадки вам потребуется
                            электронно-цифровая подпись (ЭЦП).
                        </li>
                        <li>
                            Изучить документацию об аукционе (в частности, ознакомиться с проектом договора аренды
                            лесного участка);
                        </li>
                        <li>В установленный срок подать заявку на участие в аукционе и внести задаток;</li>
                        <li>
                            Принять участие в аукционе. Аукцион проводится путём повышения начальной цены предмета
                            аукциона на «шаг аукциона». Победителем аукциона признаётся участник, предложивший наиболее
                            высокую цену. Результаты аукциона оформляются протоколом.
                        </li>
                    </ol>
                    <p>Аукцион признаётся несостоявшимся в случае, если:</p>
                    <ul>
                        <li>не подано ни одной заявки на участие в аукционе;</li>
                        <li>подана только одна заявка;</li>
                        <li>в аукционе участвовали менее чем два участника аукциона;</li>
                        <li>
                            после троекратного объявления начальной цены ни один из участников не заявил о своём
                            намерении заключить договор аренды по начальной цене.
                        </li>
                    </ul>
                    <h3>Заключение и регистрация договора аренды</h3>
                    <p>
                        Если была подана только одна заявка или в аукционе участвовал только один участник, то
                        единственный заявитель или единственный участник не позднее чем через 20 дней после дня
                        проведения аукциона обязан заключить договор аренды лесного участка. Уполномоченный орган власти
                        не вправе отказаться от заключения договора по начальной цене предмета аукциона.
                    </p>
                    <p>
                        Если же аукцион состоялся, то договор аренды заключается не ранее чем через 10 дней со дня
                        размещения информации о результатах аукциона на официальном сайте торгов.
                    </p>
                    <p>
                        Для заключения (подписания) договора аренды лесного участка необходимо обратиться в лесничество.
                        При себе необходимо иметь паспорт.
                    </p>
                    <p>
                        Далее необходимо зарегистрировать договор аренды в Федеральной службе государственной
                        регистрации, кадастра и картографии (Росреестре). Проще всего это сделать в одном из
                        многофункциональных центров (МФЦ), обычно процедура занимает до 7 дней. При себе необходимо
                        иметь паспорт, решение уполномоченного органа о проведении аукциона, извещение о проведении
                        аукциона, протокол о результатах аукциона, выписку из ЕГРН, договор аренды со всеми
                        приложениями.
                    </p>
                    <p>
                        Государственная пошлина за регистрацию составляет 2 000 рублей для физических лиц и 22 000
                        рублей для юридических лиц.
                    </p>
                    <p>
                        После регистрации в договоре аренды будет поставлена печать прямоугольной формы с номером и
                        датой регистрации.
                    </p>
                    <h3>Срок действия договора аренды</h3>
                    <p>
                        В большинстве случаев договор аренды лесного участка заключается на срок от 10 до 49 лет. Этот
                        срок определяется в соответствии со сроком использования лесов, предусмотренным
                        лесохозяйственным регламентом.
                    </p>
                    <p>
                        Исключения составляют случаи, предусмотренные статьями 36, 43—46 и пунктом 3 части 3 статьи 73.1
                        Лесного кодекса РФ.
                    </p>
                    <h3>Дальнейшие действия</h3>
                    <p>
                        После заключения и государственной регистрации договора аренды лесного участка необходимо начать
                        разработку{" "}
                        <Link href="/services/proekt-osvoeniya-lesov" passHref>
                            <a className="post-a" href="">
                                проекта освоения лесов
                            </a>
                        </Link>{" "}
                        . За нарушение срока разработки и представления этого проекта для проведения экспертизы, а также
                        за использование лесного участка без проекта освоения лесов арендатор будет должен выплатить
                        неустойку в размере 50 тыс. рублей (для индивидуального предпринимателя) или 150 тыс. рублей
                        (для юридического лица) за каждый полный календарный месяц просрочки.
                    </p>
                    <p>
                        Не менее чем за 10 дней до начала предполагаемого срока использования лесов необходимо подать
                        лесную декларацию — заявление об использовании лесов в соответствии с проектом освоения лесов.
                        Срок действия лесной декларации составляет не более 12 месяцев, поэтому подавать её требуется
                        ежегодно.
                    </p>
                    <p>
                        После подачи лесной декларации можно начать выполнять все мероприятия, предусмотренные договором
                        аренды и проектом освоения лесов. Потребуется сдавать отчёты: ежеквартально — отчёт об охране
                        лесов от пожаров и отчёт о защите лесов, ежегодно — отчёт о воспроизводстве лесов и
                        лесоразведении и отчёт об использовании лесов. В скором времени может потребоваться сдавать и
                        отчёт об охране лесов от загрязнения и иного негативного воздействия, но по состоянию на апрель
                        2019 года форма и порядок представления такого отчёта ещё не утверждены Минприроды России.
                    </p>
                    <h3>Внесение изменений в договор аренды</h3>
                    <p>
                        Изменение условий договора аренды, заключённого по результатам аукциона, не допускается.
                        Исключения составляют следующие случаи:
                    </p>
                    <ul>
                        <li>изменение целевого назначения или разрешённого использования лесов;</li>
                        <li>
                            существенное изменение параметров использования лесов (возрасты рубок, расчётная лесосека,
                            сроки использования лесов);
                        </li>
                        <li>
                            существенное изменение обстоятельств, из которых стороны договора аренды лесного участка
                            исходили при его заключении, если такое изменение обстоятельств возникло вследствие
                            природных явлений (лесных пожаров, ветровалов, наводнений и других стихийных бедствий) и
                            стало основанием для внесения изменений в государственный лесной реестр.
                        </li>
                    </ul>
                    <p>
                        Все изменения к договору аренды оформляются в письменной форме (в виде дополнительного
                        соглашения) и подписываются сторонами.
                    </p>
                    <p>
                        Договор аренды лесного участка, заключённый по результатам торгов, может быть изменён по решению
                        суда в случае существенного изменения количественных и качественных характеристик такого лесного
                        участка.
                    </p>
                    <h3>Расторжение договора аренды</h3>
                    <p>
                        Арендодатель вправе отказаться от исполнения договора аренды в одностороннем порядке в случае
                        невнесения арендатором арендной платы 2 и более раз подряд по истечении установленного срока
                        платежа, уведомив об этом арендатора в письменной форме за 30 дней до даты расторжения договора.
                        Договор прекращает своё действие с даты, указанной в письменном уведомлении. В случае
                        одностороннего отказа арендодателя от исполнения договора он считается расторгнутым.
                    </p>
                    <p>
                        Арендатор вправе в одностороннем порядке расторгнуть договор аренды лесного участка, известив об
                        этом арендодателя в письменной форме за 90 дней до предполагаемой даты расторжения, при условии
                        отсутствия недоимки по арендной плате.
                    </p>
                    <p>
                        Все остальные случаи расторжения договора аренды обычно перечисляются в тексте самого договора.
                    </p>
                </div>
                <div className="post">
                    <em>
                        <h4>Другие наши услуги:</h4>
                    </em>
                </div>
                <Services withPagePadding={true} bg={true} items={servicesData.filter((item) => item.id !== itemId)} />
                <FeedbackForm
                    title="Остались вопросы?"
                    subTitle="Свяжитесь с нами — наши специалисты помогут Вам оформить участок леса в аренду."
                    backgroundImage="/images/4.webp"
                />
                <style jsx>{``}</style>
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
