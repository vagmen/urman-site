import React, { Component, Fragment } from "react";
import { MdLocationOn, MdEmail, MdLocalPhone } from "react-icons/md";
import { FaVk, FaSkype, FaInstagram } from "react-icons/fa";
import { mainColorMid, mainColorDark, mainColorLight, grey, greyDark } from "../constants/colors";

class FooterWithMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUfaSelected: true
        };
    }

    componentDidMount() {
        this.setState({
            isUfaSelected: !(localStorage.getItem("city") === "moscow")
        });
    }

    changeSelectedCity = isUfa => {
        localStorage.setItem("city", isUfa ? "ufa" : "moscow");
        this.setState({ isUfaSelected: isUfa });
    };

    render() {
        const { isUfaSelected } = this.state;
        const { isContacts } = this.props;
        return (
            <footer className={isContacts ? "is-contacts" : ""}>
                <div className="footer-column text">
                    <div className="footer-header">
                        <h2 className={isUfaSelected ? "selected" : ""} onClick={() => this.changeSelectedCity(true)}>
                            Уфа
                        </h2>
                        <h2 className={isUfaSelected ? "" : "selected"} onClick={() => this.changeSelectedCity(false)}>
                            Москва
                        </h2>
                    </div>
                    <p>
                        {isUfaSelected ? (
                            <Fragment>
                                <a
                                    href="https://yandex.ru/maps/172/ufa/?ll=55.953013%2C54.736974&mode=routes&pt=72.878889E%2C54.484167N%2Cpmwtm1&rtext=~54.736873%2C55.952259&rtt=auto&z=18"
                                    target="_blank"
                                >
                                    <span>
                                        <MdLocationOn />
                                    </span>
                                    450047, Уфа, ул. Ленина 63
                                </a>
                                <br />
                                <span className="extra">(Напротив Министерства лесного хозяйства РБ)</span>
                                <br />
                                <a href="tel:+79631363486" onClick={() => ym(51360247, "reachGoal", "tel1")}>
                                    <span>
                                        <MdLocalPhone />
                                    </span>
                                    +7 (963) 136-34-86
                                </a>
                                <br />
                                <a href="tel:+73472983486" onClick={() => ym(51360247, "reachGoal", "tel2")}>
                                    <span>
                                        <MdLocalPhone />
                                    </span>
                                    +7 (347) 298-34-86
                                </a>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <a
                                    href="https://yandex.ru/maps/?ll=37.402722%2C55.867834&mode=routes&pt=72.878889E%2C54.484167N%2Cpmwtm1&rtext=~55.868739%2C37.404782&rtt=auto&z=17"
                                    target="_blank"
                                >
                                    <span>
                                        <MdLocationOn />
                                    </span>
                                    МКАД, 69-й километр, внешняя сторона, к23
                                </a>
                                <br />
                                <span className="extra">(Соседнее здание с Комитетом лесного хозяйства МО)</span>
                                <br />
                                <a href="tel:+79039683486" onClick={() => ym(51360247, "reachGoal", "telmsk1")}>
                                    <span>
                                        <MdLocalPhone />
                                    </span>
                                    +7 (903) 968-34-86
                                </a>
                                <br />
                                <a href="tel:+74959683486" onClick={() => ym(51360247, "reachGoal", "telmsk2")}>
                                    <span>
                                        <MdLocalPhone />
                                    </span>
                                    +7 (495) 968-34-86
                                </a>
                            </Fragment>
                        )}
                    </p>
                    <br />
                    <p>
                        <a href="mailto:proekt@urman.su">
                            <span>
                                <MdEmail />
                            </span>
                            proekt@urman.su
                        </a>
                        <br />
                        <a href="https://www.instagram.com/urman.su" target="_blank">
                            <span>
                                <FaInstagram />
                            </span>
                        </a>
                        <a href="https://vk.com/urman_su" target="_blank">
                            <span>
                                <FaVk />
                            </span>
                        </a>
                        <a href="skype:vagmen?chat">
                            <span>
                                <FaSkype />
                            </span>
                        </a>
                    </p>
                </div>
                <div className="footer-column">
                    <div className="map map-ufa">
                        <img src="/static/images/map/ufa.png" alt="" />
                        {/* <script
                            type="text/javascript"
                            charSet="utf-8"
                            async
                            src={`https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A798c47d6ec9476b31bd77261de226b79cba73cc2c67641b1dbdb05e4c13329dc&amp;width=100%25&amp;height=100%25&amp;lang=ru_RU&amp;scroll=false`}
                        /> */}
                    </div>
                    <div className="map map-msk">
                        <img src="/static/images/map/msk.png" alt="" />
                        {/* <script
                            type="text/javascript"
                            charSet="utf-8"
                            async
                            src={`https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af39f5c57e0aeb31b431d2c3e1f91023f80682984615447bc9fe7e3eaf3b0d13b&amp;width=100%25&amp;height=100%25&amp;lang=ru_RU&amp;scroll=false`}
                        /> */}
                    </div>
                    <a
                        className="link"
                        href={
                            isUfaSelected
                                ? `https://yandex.ru/maps/172/ufa/?ll=55.953013%2C54.736974&mode=routes&pt=72.878889E%2C54.484167N%2Cpmwtm1&rtext=~54.736873%2C55.952259&rtt=auto&z=18`
                                : `https://yandex.ru/maps/?ll=37.402722%2C55.867834&mode=routes&pt=72.878889E%2C54.484167N%2Cpmwtm1&rtext=~55.868739%2C37.404782&rtt=auto&z=17`
                        }
                        target="_blank"
                    />
                </div>
                <style jsx>{`
                    p span {
                        font-size: 40px;
                        padding-right: 20px;
                    }
                    p a {
                        text-decoration: underline;
                    }

                    footer {
                        display: grid;
                        background: ${greyDark};
                        color: #fff;
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr calc(50vh);
                    }
                    .footer-column {
                        position: relative;
                        overflow: hidden;
                    }
                    .footer-column.text {
                        padding: 16px;
                    }
                    .footer-column p {
                        padding: 0;
                    }
                    .footer-column span.extra {
                        font-size: 16px;
                        opacity: 0.7;
                    }
                    .footer-column .link {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                    }
                    .footer-header {
                        display: flex;
                    }
                    .footer-header h2 {
                        flex: 2;
                        cursor: pointer;
                        text-align: center;
                        margin: 0;
                        padding: 32px;
                        transition: all 0.4s ease-in-out;
                        font-size: 20px;
                        opacity: 0.7;
                    }
                    .footer-header h2.selected {
                        flex: 3;
                        font-size: 32px;
                        opacity: 1;
                    }

                    .map {
                        position: absolute;
                        top: 0;
                        height: 100%;
                        width: 100%;
                        transition: left 0.4s ease-in-out;
                        overflow: hidden;
                    }
                    .map img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        transform: scale(2);
                    }
                    .map-ufa {
                        left: ${isUfaSelected ? 0 : "-100%"};
                    }
                    .map-msk {
                        left: ${isUfaSelected ? "100%" : 0};
                    }
                    @media (min-width: 960px) {
                        footer {
                            grid-template-columns: 1fr 1fr;
                            grid-template-rows: auto;
                        }
                        .is-contacts {
                            grid-template-rows: calc(100vh - 80px);
                        }
                        .footer-column.text {
                            padding: 32px;
                        }
                        .map img {
                            transform: scale(1);
                        }
                    }
                `}</style>
            </footer>
        );
    }
}

export default FooterWithMap;
