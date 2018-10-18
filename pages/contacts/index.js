import Layout from "../../components/Layout";
import { FaVk, FaSkype, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const menuItem = "contacts";
const background = "#333";

const Index = () => (
    <Layout title="Контакты" menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <div className="contacts">
                    <div className="contacts__info">
                        <h1>Контактная информация и реквизиты</h1>
                        <p>Мы за открытую коммуникацию!</p>
                        <p>
                            В нашей команде — проверенные, грамотные и опытные
                            штатные сотрудники. Мы против мутных личностей,
                            выдающих себя за фрилансеров, рекомендующих других
                            фрилансеров, студентов и «преподавателей».
                        </p>
                        <p>
                            В Сибириксе всё общение с потенциальными клиентами
                            строится только через официальные каналы: телефоны,
                            опубликованные на сайте, скайп sibirix и
                            корпоративную почту сотрудников sibirix.ru.
                        </p>
                        <p>
                            Мы не отвечаем на заявки на фриланс-биржах, но
                            всегда готовы к общению по телефону или скайпу. Мы
                            работаем только официально, по договору, с оплатой
                            на расчетный счет. И мы категорически против
                            откатов.
                        </p>
                    </div>
                    <div className="contacts__sections">
                        <div className="section address">
                            <h2>Москва</h2>
                            <p>
                                143441, Московская область, Красногорский район,
                                72км МКАД, п/о Путилково, офисно-общественный
                                комплекс ЗАО "Гринвуд", строение 23, 1 этаж
                            </p>
                            <p>(Напротив Комитета лесного хозяйства МО)</p>
                            <p>+7 495 215-22-19?</p>
                            <a>На карте</a>
                        </div>
                        <div className="section address">
                            <h2>Уфа</h2>
                            <p>450047, Уфа, ул. Ленина 63</p>
                            <p>(Напротив министерства лесного хозяйства РБ)</p>
                            <p>+7 (347) 298-34-86</p>
                            <a>На карте</a>
                        </div>
                        <div className="section social">
                            <div>
                                <a href="mailto:proekt@urman.su">
                                    <p>
                                        <span>
                                            <MdEmail />
                                        </span>
                                        proekt@urman.su
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a href="skype:vagmen?chat">
                                    <p>
                                        <span>
                                            <FaSkype />
                                        </span>
                                        urman_su
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://vk.com/urman_su"
                                    target="_blank"
                                >
                                    <p>
                                        <span>
                                            <FaVk />
                                        </span>
                                        vk.com/urman_su
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://vk.com/urman_su"
                                    target="_blank"
                                >
                                    <p>
                                        <span>
                                            <FaInstagram />
                                        </span>
                                        urman.su
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="section requisites">
                            <h3>Реквизиты</h3>
                            <p>ООО "Гринландия"</p>
                            <p>ИНН 0274146925</p>
                            <p>КПП 027401001</p>
                            <p>р/сч 40702810210000046562</p>
                            <p>АО «Тинькофф Банк»</p>
                            <p>к/сч 30101810145250000974</p>
                            <p>БИК 044525974</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            h1,
            h2,
            h3,
            p {
                color: #fff;
            }
            a span {
                font-size: 35px;
                padding-right: 10px;
            }
            .page-background {
                background: #333333;
            }
            .contacts {
                display: flex;
                flex-wrap: wrap;
                margin: 0 -20px;
                align-items: flex-start;
                overflow-x: hidden;
            }
            .contacts__info {
                padding: 20px;
                display: none;
            }
            .contacts__sections {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                margin: 0 -20px;
                align-items: flex-start;
            }
            .section {
                padding: 20px;
                color: #fff;
                width: 100%;
                margin: 0 20px;
            }
            .address {
                 {
                    /* background: #515151; */
                }
            }
            .social {
                background: rgba(211, 158, 99, 0.8);
            }
            @media screen and (min-width: 750px) {
                .contacts__info {
                    display: block;
                    width: calc(50% - 40px);
                    margin: 0 20px;
                }
                .contacts__sections {
                    width: calc(50% - 40px);
                    margin: 0 20px;
                }
                .section {
                    margin: 0 0 20px;
                    width: 100%;
                }
            }
            @media screen and (min-width: 1024px) {
                 {
                    /* .contacts__sections {
                    width: calc(50% - 30px);
                } */
                }
                .section {
                    padding: 15px;
                }
            }
        `}</style>
    </Layout>
);

export default Index;
