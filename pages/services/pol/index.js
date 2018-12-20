import { Component } from "react";
import fetch from "isomorphic-unfetch";
import { message } from "antd";
import Layout from "../../../components/Layout";

const menuItem = "services";

class Index extends Component {
    state = {
        email: ""
    };
    sendServiceDocTemplate = async () => {
        const res = await fetch("https://helpforest.azurewebsites.net/SendServiceDocTemplate", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                To: this.state.email,
                ServiceCode: "pol"
            })
        });
        const data = await res.json();
        if (data) message.success("Мы отправили письмо с вложенной формой на вашу почту");
    };

    render() {
        const { email } = this.state;
        const { postData } = this.props;
        return (
            <Layout postData={postData}>
                <div className="template-background">
                    <div className="page-content">
                        <div className="post">
                            <header>
                                <h1>{postData.title}</h1>
                                <img src="../../../static/forest.jpg" className="post-img" alt=" " />
                            </header>
                            <h3>Что это такое? Кому это нужно? </h3>
                            <p>
                                Поздравляем, Вы получили лесной участок в пользование или в аренду, но чтобы начать
                                использовать его необходимо разработать и согласовать проект освоения лесов (в
                                простонародье «ПОЛ»). Отсутствие такового является основанием для досрочного расторжения
                                договора аренды лесного участка, а также принудительного прекращения права постоянного
                                (бессрочного) пользования лесным участком.
                            </p>
                            <h3>Какими НПА регламентируется?</h3>
                            <p>
                                Статья 88 Лесного кодекса РФ. Приказ Рослесхоза от 29.02.2012 № 69 «Об утверждении
                                состава проекта освоения лесов и порядка его разработки».
                            </p>
                            <h3>Из чего состоит?</h3>
                            <p>ПОЛ описывает такие аспекты как:</p>
                            <ul>
                                <li>разрешенные виды и проектируемые объемы использования лесов;</li>
                                <li>мероприятия по охране, защите и воспроизводству лесов;</li>
                                <li>мероприятия по созданию объектов лесной и лесоперерабатывающей инфраструктуры;</li>
                                <li>мероприятия по охране объектов животного мира и водных объектов;</li>
                                <li>
                                    мероприятия по строительству, реконструкции и эксплуатации объектов, не связанных с
                                    созданием лесной инфраструктуры.
                                </li>
                            </ul>
                            <p>
                                Делится на общую и специальную часть. Общая часть проекта составляется для всех видов
                                использования лесов, специальная часть проекта освоения лесов называется "Организация
                                использования лесов" и включает в себя подразделы, соответствующие видам разрешенного
                                использования лесов. В зависимости от вида разрешенного использования к проекту
                                Изготавливаются тематические лесные карты в масштабах, предусмотренных действующей
                                лесоустроительной инструкцией. Так же к тексту и картам необходимо прикладывать копии
                                правоустанавливающих документов.
                            </p>
                            <h3>Как выглядит?</h3>
                            <div className="img-container">
                                <div className="img-item">
                                    <img src="../../../static/images/services/pol1.jpg" alt="" />
                                </div>
                                <div className="img-item">
                                    <img src="../../../static/images/services/pol2.jpg" alt="" />
                                </div>
                                <div className="img-item">
                                    <img src="../../../static/images/services/pol3.jpg" alt="" />
                                </div>
                            </div>
                            <h3>Как получить форму?</h3>
                            <p>
                                Если вы хотите самостоятельно подготовить проект освоения лесов, можем вам отправить
                                форму проекта на электронную почту.
                            </p>
                            <div className="input-with-button">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Ваша почта"
                                    value={email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                />
                                <button onClick={this.sendServiceDocTemplate}>Получить форму</button>
                            </div>
                            <h3>Нужно согласовывать?</h3>
                            <p>
                                Для оценки соответствия проекта освоения лесов нормам законодательства Российской
                                Федерации, целям и видам освоения лесов, предусмотренных проектом освоения лесов,
                                договору аренды лесного участка, лесохозяйственному регламенту лесничества, лесопарка,
                                лесному плану субъекта Российской Федерации проводят государственную или муниципальную
                                экспертизу проекта по Приказу Минприроды России от 26.09.2016 № 496 «Об утверждении
                                порядка государственной или муниципальной экспертизы проекта освоения лесов».
                            </p>
                            <p>
                                Законодательством предусмотрена возможность подачи на экспертизу в виде электронного
                                документа, но практике это не реализовано, поэтому нужно подавать 2 экземпляра в
                                бумажном виде и 1 – в электронном с сопроводительным письмом.
                            </p>
                            <p>В письме указываются:</p>
                            <ul>
                                <li>сведения о лице, использующем леса;</li>
                                <li>
                                    дата, номер регистрации договора аренды или права постоянного (бессрочного)
                                    пользования лесным участком;
                                </li>
                                <li>кадастровый номер участка;</li>
                                <li>местоположение, площадь лесного участка;</li>
                                <li>вид и срок использования лесов.</li>
                            </ul>
                            <p>
                                Если требования не соблюдены, проекты возвращаются в течении 3х дней. Не более 30
                                календарных дней проводится экспертиза проекта по умолчанию. Не более 10 календарных
                                дней проводится экспертиза изменений проекта на основании актов лесопатологического
                                обследования, сделано это для оперативного реагирования на очаги вредителей.
                            </p>
                            <h3>Почему могут отказать?</h3>
                            <p>
                                Результат Экспертизы оформляется в виде заключения положительного или отрицательного.
                                Если положительное, значит у вас всё хорошо. Отрицательное заключение Экспертизы проекта
                                освоения лесов возможно в следующих случаях:
                            </p>
                            <ul>
                                <li>
                                    несоответствие требованиям законодательства Российской Федерации, регулирующего
                                    лесные отношения;
                                </li>
                                <li>
                                    несоответствие мероприятий по использованию, охране, защите и воспроизводству лесов
                                    целям и видам освоения лесов, предусмотренных проектом освоения лесов;
                                </li>
                                <li>несоответствия договору аренды лесного участка;</li>
                                <li>несоответствия лесохозяйственному регламенту лесничества, лесопарка;</li>
                                <li>несоответствия лесному плану субъекта Российской Федерации.</li>
                            </ul>
                            <h3>Какие особенности есть?</h3>
                            <p>
                                Не более чем в течение 10 рабочих дней со дня поступления осуществляется повторная
                                Экспертиза проекта освоения лесов доработанного с учетом замечаний, изложенных в
                                отрицательном заключении Экспертизы.
                            </p>
                            <p>
                                Положительное заключение Экспертизы действует на срок действия проекта освоения лесов.
                            </p>
                            <p>
                                Проекты освоения лесов составляются на срок действия договора аренды по видам
                                пользования:
                            </p>
                            <ul>
                                <li>геологическое изучение недр, разработка месторождений полезных ископаемых;</li>
                                <li>
                                    строительства и эксплуатации водохранилищ, иных искусственных водных объектов, а
                                    также гидротехнических сооружений, морских портов, морских терминалов, речных
                                    портов, причалов;
                                </li>
                                <li>строительства, реконструкции, эксплуатации линейных объектов</li>
                            </ul>
                            <p>
                                По остальным видам использования лесов проект освоения лесов разрабатывается на срок не
                                более 10 лет, но не должен превышать срок действия договора аренды и лесохозяйственного
                                регламента лесничества (лесопарка).
                            </p>
                            <p>
                                При разработке необходимо максимально учесть все «хотелки» так как внесение изменений в
                                проект освоения лесов допускается только в 2 х случаях:
                            </p>
                            <ul>
                                <li>при изменении лесохозяйственного регламента лесничества, лесопарка</li>
                                <li>при изменении условий договора аренды.</li>
                            </ul>
                            <h3>Что получаем в итоге?</h3>
                            <p>
                                Проект освоения лесов представляется в уполномоченный орган государственной власти или
                                орган местного самоуправления в 3 х экземплярах на бумажных носителях один из которых
                                остается заявителю, один - лесничеству (лесопарку) и один органу государственной власти
                                (органу местного самоуправления).
                            </p>
                            <p>
                                Проектная документация изготавливается в количестве 3 экземпляров в бумажном виде и
                                электронном виде (в виде файлов в одном из следующих форматов: XML, XLS, PDF).
                            </p>
                            <h3>Что будет если не делать?</h3>
                            <p>
                                Вы не сможете начать какую бы то ни было деятельность на лесном участке без проекта
                                освоения лесов, а если начнёт можете попасть под штраф.
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
            title: "Проект освоения лесов (ПОЛ)",
            description:
                "Если хотите взять лесной участок в пользование или поставить на кадастровый учет лесной участок которым уже пользуетесь, то Вам необходимо будет разработать и согласовать проектную документацию лесного участка."
        }
    };
};

export default Index;
