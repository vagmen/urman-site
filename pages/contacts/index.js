import { FaVk, FaSkype, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Layout from "../../components/Layout";
import { mainColorMid, greyDark } from "../../constants/colors";

const Index = () => (
    <Layout menuItem="contacts">
        <div className="page-background">
            <div className="page-content">
                <div className="contacts">
                    <div className="info">
                        <h1>Контактная информация и реквизиты</h1>
                        <p>У нас команда проверенных, грамотных и опытных штатных сотрудников.</p>
                        <p>
                            <strong>Мы за открытую коммуникацию</strong>
                        </p>
                        <p>
                            Мы против «мутных» личностей, выполняющих «шабашки» которые не отвечают за результат и
                            сроки.
                        </p>
                        <p>Пишите и звоните нам, будем рады!</p>
                    </div>
                    <div className="address moscow">
                        <h2>Москва</h2>
                        <p>143441, Московская область, 72км МКАД, строение 23</p>
                        <p>(Соседнее здание с Комитетом лесного хозяйства МО)</p>
                        <p>+7 (903) 968-34-86</p>
                        <p>+7 (495) 968-34-86</p>
                        <a>На карте</a>
                    </div>
                    <div className="address ufa">
                        <h2>Уфа</h2>
                        <p>450047, Уфа, ул. Ленина 63</p>
                        <p>(Напротив министерства лесного хозяйства РБ)</p>
                        <p>+7 (963) 136-34-86</p>
                        <p>+7 (347) 298-34-86</p>
                        <a>На карте</a>
                    </div>
                    <div className="social">
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
                            <a href="https://vk.com/urman_su" target="_blank">
                                <p>
                                    <span>
                                        <FaVk />
                                    </span>
                                    vk.com/urman_su
                                </p>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/urman.su" target="_blank">
                                <p>
                                    <span>
                                        <FaInstagram />
                                    </span>
                                    urman.su
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="requisites">
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
        <style jsx>{`
            h1,
            h2,
            h3,
            p,
            a {
                color: #fff;
            }
            a span {
                font-size: 30px;
                padding-right: 10px;
            }
            .page-background {
                background: ${greyDark};
            }
            .contacts {
                display: grid;
                grid-template-areas:
                    "i"
                    "m"
                    "u"
                    "s"
                    "r";
                margin-bottom: 1rem;
                grid-gap: 3rem;
            }
            .info {
                grid-area: i;
            }
            .address moscow {
                grid-area: m;
            }
            .address ufa {
                grid-area: u;
            }
            .social {
                grid-area: s;
                background: ${mainColorMid};
                padding: 1rem;
            }
            .requisites {
                grid-area: r;
            }
            @media (min-width: 640px) {
                .contacts {
                    grid-template-areas:
                        "i i"
                        "m u"
                        "r s";
                    margin: 20px 0;
                }
            }
            @media (min-width: 960px) {
                .contacts {
                    grid-template-areas:
                        "i m u"
                        "i r s";
                    margin: 50px 0;
                }
            }
        `}</style>
    </Layout>
);

export default Index;
