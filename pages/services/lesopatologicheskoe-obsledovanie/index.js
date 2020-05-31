import { Component } from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PostHeader from "../../../components/post/PostHeader";
import FeedbackForm from "../../../components/FeedbackForm";
import Services from "../../../components/Services";
import { servicesData } from "../../../constants/menuData";

const itemId = "lesopatologicheskoe-obsledovanie";

class Index extends Component {
    render() {
        const { postData } = this.props;
        return (
            <Layout postData={postData} headerOpacity={true}>
                <PostHeader h1={postData.name} img={postData.img} />
                <div className="post">
                    <h3>Повреждения лесных насаждений</h3>
                    <p>
                        Деревья, растущие на лесном участке, могут быть повреждены или могут погибнуть в результате
                        воздействия различных неблагоприятных факторов. Поэтому важно своевременно проводить мероприятия
                        по защите лесов.
                    </p>
                    <p>Выделяют следующие неблагоприятные факторы:</p>
                    <ol>
                        <li>повреждения пожарами — усыхание деревьев, огневые повреждения крон, стволов и корней;</li>
                        <li>повреждения ветрами — механические повреждения деревьев (ветровал, бурелом, снеголом);</li>
                        <li>повреждения хвое-листогрызущими насекомыми — происходит объедание кроны деревьев;</li>
                        <li>
                            повреждения стволовыми вредителями — стволы деревьев заселяются вредителями, которые
                            разъедают древесину;
                        </li>
                        <li>
                            поражения болезнями леса — на деревьях появляются плодовые тела грибов-паразитов, язвы и
                            трещины.
                        </li>
                    </ol>
                    <p>Для выявления вышеперечисленных факторов и проводятся лесопатологические обследования.</p>
                    <p>
                        Из-за повреждений древесина становится неликвидной, то есть утрачивает потребительские свойства.
                    </p>
                    <p>
                        Если вы обнаружили признаки появления вредителей, болезней, неблагополучного состояния,
                        значительного или массового повреждения или поражения деревьев на вашем лесном участке, то вы
                        обязаны в пятидневный срок с даты обнаружения проинформировать об этом уполномоченные органы.
                    </p>
                    <h3>Что такое лесопатологическое обследование?</h3>
                    <p>
                        Лесопатологические обследования (ЛПО) — это одна из мер санитарной безопасности в лесах. ЛПО
                        проводятся в целях получения информации о текущем санитарном и лесопатологическом состоянии
                        лесных участков, а также для обоснования и назначения мероприятий по предупреждению
                        распространения вредных организмов.
                    </p>
                    <p>
                        Санитарное состояние лесного участка определяется по количеству деревьев разных категорий
                        состояния, а лесопатологическое — по количеству вредных организмов и степени повреждения ими
                        деревьев.
                    </p>
                    <p>
                        Порядок проведения ЛПО и форма акта ЛПО утверждены приказом Минприроды России от 16.09.2016 №
                        480.
                    </p>
                    <p>
                        В соответствии с Правилами санитарной безопасности в лесах, утверждёнными постановлением
                        Правительства РФ от 20.05.2017 № 607, проведение ЛПО на лесных участках, предоставленных в
                        аренду или постоянное (бессрочное) пользование, обеспечивается лицами, использующими леса на
                        основании проекта освоения лесов. Инженеры-лесопатологи{" "}
                        <Link href="/about" passHref>
                            <a className="post-a" href="">
                                команды URMAN
                            </a>
                        </Link>{" "}
                        — это специалисты с многолетним стажем, которые качественно и оперативно проведут
                        лесопатологическое обследование на вашем лесном участке в любом регионе России.
                    </p>
                    <FeedbackForm
                        title="Свяжитесь с нами"
                        subTitle="Наши специалисты с удовольствием ответят на все Ваши вопросы и проведут расчет стоимости ЛПО."
                        backgroundImage="/images/4.webp"
                    />
                    <h3>В чём заключается проведение ЛПО?</h3>
                    <p>В процессе ЛПО производятся:</p>
                    <ul>
                        <li>
                            определение причин повреждений (или гибели) лесных насаждений, а также выявление аварийных
                            деревьев;
                        </li>
                        <li>определение местоположения и границ повреждённых лесных участков;</li>
                        <li>определение текущего санитарного и лесопатологического состояния лесных участков;</li>
                        <li>
                            назначение мероприятий по предупреждению распространения вредных организмов, в том числе
                            профилактических мероприятий по защите лесов, а также агитационных мероприятий.
                        </li>
                    </ul>
                    <p>
                        В ходе ЛПО инструментальным способом также производится перечёт деревьев, а соответствующая
                        информация отражается в ведомости.
                    </p>
                    <p>
                        При проведении ЛПО выявляются и аварийные деревья — деревья со структурными изъянами (наличие
                        дупел, гнилей, обрыв корней, опасный наклон), способными привести к падению всего дерева или его
                        части и причинению ущерба населению или имуществу.
                    </p>
                    <p>
                        ЛПО осуществляется в соответствии с лесным планом субъекта РФ, лесохозяйственным регламентом
                        лесничества и{" "}
                        <Link href="/services/proekt-osvoeniya-lesov" passHref>
                            <a className="post-a" href="">
                                проектом освоения лесов
                            </a>
                        </Link>{" "}
                        . ЛПО проводится с учётом данных государственного лесопатологического мониторинга (ГЛПМ), а
                        также иной информации о санитарном и лесопатологическом состоянии лесов.
                    </p>
                    <h3>Когда проводятся ЛПО?</h3>
                    <p>
                        ЛПО проводятся во время вегетационного периода с момента распускания листвы (хвои) и до момента
                        начала сезонной дехромации. В чистых по составу вечнозелёных лесных насаждениях, а также лесных
                        насаждениях, повреждённых ветрами (ветровал, бурелом) и верховыми пожарами, ЛПО проводятся в
                        течение года.
                    </p>
                    <h3>Способы проведения ЛПО</h3>
                    <p>Выделяют два основных способа проведения ЛПО:</p>
                    <ol>
                        <li>
                            визуальный — глазомерная оценка санитарного и лесопатологического состояния. ЛПО визуальным
                            способом проводятся с использованием наземных и (или) дистанционных методов.
                        </li>
                        <li>
                            инструментальный — используется для точного определения границ повреждения лесных участков,
                            площадей погибших или повреждённых лесных насаждений и подготовки необходимой документации
                            для проведения мероприятий. ЛПО инструментальным способом проводятся только с использованием
                            наземного метода.
                        </li>
                    </ol>
                    <h3>Акт лесопатологического обследования</h3>
                    <p>
                        По результатам ЛПО составляется акт лесопатологического обследования, который утверждается
                        органом власти и в течение трёх рабочих дней со дня утверждения размещается на официальном
                        сайте.
                    </p>
                    <p>
                        По результатам ЛПО визуальным способом в акте лесопатологического обследования прогнозируется
                        развитие очагов вредных организмов, изменение площади ослабленных и усыхающих лесных насаждений,
                        указываются площади лесных насаждений с нарушенной и утраченной устойчивостью, а также
                        указываются назначенные профилактические мероприятия по защите лесов, агитационные мероприятия.
                    </p>
                    <p>
                        По результатам ЛПО инструментальным способом в акте лесопатологического обследования указываются
                        процент выборки деревьев по категориям состояния, назначения мероприятий, степень поражения
                        лесного насаждения, причины повреждения и гибели лесных насаждений.
                    </p>
                    <p>
                        Мероприятия по предупреждению распространения вредных организмов, назначаемые по результатам ЛПО
                        инструментальным способом, включают в себя, прежде всего, санитарно-оздоровительные мероприятия
                        (СОМ) — сплошные (ССР) и выборочные санитарные рубки (ВСР), уборку неликвидной древесины (УНД),
                        рубку аварийных деревьев (РАД).
                    </p>
                </div>
                <div className="post">
                    <em>
                        <h4>Другие наши услуги:</h4>
                    </em>
                </div>
                <Services withPagePadding={true} bg={true} items={servicesData.filter((item) => item.id !== itemId)} />
                <FeedbackForm
                    title="Позвоните или оставьте заявку"
                    subTitle="Наши специалисты с удовольствием ответят на все Ваши вопросы и проведут расчет стоимости ЛПО."
                    backgroundImage="/images/4.webp"
                />
                <style jsx>{``}</style>
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
