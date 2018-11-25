import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { message } from 'antd';
import Layout from '../../../components/Layout';

const menuItem = 'services';

class Index extends Component {
    state = {
        email: '',
    };
    sendServiceDocTemplate = async () => {
        const res = await fetch('https://helpforest.azurewebsites.net/SendServiceDocTemplate', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                To: this.state.email,
                ServiceCode: 'pdlu',
            }),
        });
        const data = await res.json();
        if (data) message.success('Мы отправили письмо с вложенной формой на вашу почту');
    };
    render() {
        const { email } = this.state;
        const { postData } = this.props;
        return (
            <Layout title={postData.title}>
                <div className="page-background">
                    <div className="page-content">
                        <div className="post">
                            <header>
                                <h1>{postData.title}</h1>
                                <img src="../../../static/forest2.jpg" alt=" " />
                            </header>
                            <h3>Что это такое? Кому это нужно? </h3>
                            <p>
                                Если хотите взять лесной участок в пользование или поставить на кадастровый учет лесной
                                участок которым уже пользуетесь, то Вам необходимо будет разработать и согласовать
                                проектную документацию лесного участка.
                            </p>
                            <h3>Какими НПА регламентируется?</h3>
                            <p>
                                Приказ Минприроды России от 03.02.2017 № 54 Об утверждении Требований к составу и к
                                содержанию проектной документации лесного участка, порядка ее подготовки.
                            </p>
                            <h3>Из чего состоит?</h3>
                            <p>
                                Представляет собой единый документ состоящий из текстовой и графической частей.
                                Текстовая часть описывает количественные и качественные характеристики участка, наличие
                                обременений, виды разрешенного и проектируемого использования лесов. Схема
                                подготавливается с учетом данных государственного лесного реестра, картографических
                                материалов лесоустройства и иных документов. На схеме указываются сведения о
                                местоположении и границах проектируемого лесного участка в том числе геоданные и каталог
                                координат.
                            </p>
                            <h3>Как выглядит?</h3>
                            <div className="img-container">
                                <div className="img-item">
                                    <img src="../../../static/images/services/pdlu1.jpg" alt="" />
                                </div>
                                <div className="img-item">
                                    <img src="../../../static/images/services/pdlu2.jpg" alt="" />
                                </div>
                            </div>
                            <h3>Как получить форму?</h3>
                            <p>
                                Если вы хотите самостоятельно подготовить проектную документацию лесного участка, можем
                                вам отправить форму документации на электронную почту.
                            </p>
                            <div className="input-with-button">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Ваша почта"
                                    value={email}
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                />
                                <button onClick={this.sendServiceDocTemplate}>Получить форму</button>
                            </div>
                            <h3>Нужно согласовывать?</h3>
                            <p>
                                Проектная документация согласовывается с лесничеством (лесопарком) и утверждается
                                органом государственной власти (органом местного самоуправления).
                            </p>
                            <p>
                                Срок действия решения об утверждении проектной документации лесного участка составляет
                                два года.
                            </p>
                            <h3>Почему могут отказать?</h3>
                            <p>Основаниями для отказа в утверждении проектной документации лесного участка являются:</p>
                            <ul>
                                <li>
                                    несоответствие проектной документации лесного участка требованиям к составу и
                                    содержанию проектной документации лесного участка;
                                </li>
                                <li>
                                    несоответствие проектной документации лесного участка утвержденному лесному плану
                                    субъекта Российской Федерации, лесохозяйственному регламенту лесничества, лесопарка.
                                </li>
                            </ul>
                            <h3>Какие особенности есть?</h3>
                            <p>
                                Характеристика проектируемого лесного участка должна составляться на основании данных
                                государственного лесного реестра, а также натурного обследования проектируемого лесного
                                участка (при необходимости).
                            </p>
                            <p>
                                В случае несоответствия натурного обследования проектируемого лесного участка данным
                                государственного лесного реестра составляется акт несоответствия данных государственного
                                лесного реестра натурному обследованию в соответствии с приказом Минприроды России от 11
                                ноября 2013 г. № 496 "Об утверждении Перечня, форм и порядка подготовки документов, на
                                основании которых осуществляется внесение документированной информации в государственный
                                лесной реестр и ее изменение".
                            </p>
                            <p>
                                При проектировании лесных участков для использования в целях проведения работ по
                                геологическому изучению недр, разработки месторождений полезных ископаемых, размещения
                                линейных объектов, гидротехнических сооружений, а также водохранилищ, иных искусственных
                                водных объектов, допускается пересечение границ лесничеств, лесопарков.
                            </p>
                            <p>
                                Для заготовки древесины (за исключением случаев заготовки древесины на лесных участках,
                                предоставленных юридическим лицам, индивидуальным предпринимателям в соответствии со
                                статьями 43-45Лесного кодекса), заготовки живицы минимально можно запроектировать лесной
                                квартал;
                            </p>
                            <p>
                                Для заготовки и сбора недревесных лесных ресурсов, заготовки пищевых лесных ресурсов и
                                сбора лекарственных растений, для осуществления научно-исследовательской деятельности,
                                образовательной деятельности, для создания лесных плантаций и их эксплуатации минимально
                                можно запроектировать лесотаксационный выдел;
                            </p>
                            <p>
                                Для осуществления рекреационной деятельности, для осуществления видов деятельности в
                                сфере охотничьего хозяйства, для ведения сельского хозяйства, для выращивания лесных
                                плодовых, ягодных, декоративных растений, лекарственных растений, для выращивания
                                посадочного материала лесных растений (саженцев, сеянцев), для выполнения работ по
                                геологическому изучению недр, для разработки месторождений полезных ископаемых,
                                выполнения изыскательских работ, строительства, реконструкции, эксплуатации линейных
                                объектов, строительства и эксплуатации водохранилищ и иных искусственных водных
                                объектов, а также гидротехнических сооружений, морских портов, морских терминалов,
                                речных портов, причалов, переработки древесины и иных лесных ресурсов, осуществления
                                религиозной деятельности, для заготовки древесины налесных участках, предоставленных
                                юридическим лицам, индивидуальным предпринимателям в соответствии со статьями 43-45
                                Лесного кодекса минимально можно запроектировать часть лесотаксационного выдела.
                            </p>
                            <p>
                                Для вычерчивания карты-схемы расположения лесного участка используются фрагменты
                                картографических материалов лесоустройства: планшеты масштабом М 1:10000 или М 1:25000,
                                планы лесных насаждений масштабом М 1:25000 или М 1:50000, карты-схемы лесничества или
                                лесопарка масштабом М 1:100000.
                            </p>
                            <h3>Что получаем в итоге?</h3>
                            <p>
                                Проектная документация изготавливается в количестве 3 экземпляров в бумажном виде и
                                электронном виде (в виде файлов в одном из следующих форматов: XML, XLS, PDF). Один из
                                которых передается заявителю, один - лесничеству (лесопарку) и один органу
                                государственной власти (органу местного самоуправления).
                            </p>
                            <h3>Что будет если не делать?</h3>
                            <p>Не сможете оформить лесной участок, другой процедуры просто не предусмотрено.</p>
                            {/* <h3>Скачать форму</h3>
                    <p>Ссылка на скачивание формы.</p> */}
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    header img {
                        width: 100%;
                        height: 400px;
                        object-fit: cover;
                        margin-bottom: 20px;
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
        postData: { title: 'Проектная документация лесного участка' },
    };
};

export default Index;
