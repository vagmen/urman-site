import React, { Component } from "react";
import Link from "next/link";
import { notification } from "antd";
import Input from "../../components/ui/Input";
import ButtonBorder from "../../components/ui/ButtonBorder";
import ButtonViolet from "../../components/ui/ButtonViolet";
import { mainColorMid, mainColorLight, mainColorDark } from "../../constants/colors";

class PostHeader extends Component {
    state = {
        formHidden: true,
        name: "",
        phone: ""
    };

    onChange = ({ name, value }) => {
        this.setState({ [name]: value });
    };

    formHandler = e => {
        e.preventDefault();
        const { formHidden, name, phone } = this.state;
        if (formHidden) {
            this.setState({ formHidden: false });
        } else if (name === "" || phone === "") {
            notification.warning({
                message: `Внимание`,
                description: "Заполните, пожалуйста, поля"
            });
        } else {
            this.sendFeedbackInfo();
            this.setState({ name: "", phone: "" });
        }
    };

    sendFeedbackInfo = async () => {
        console.log("window.location.pathname", window.location.pathname);
        const res = await fetch(
            `http://vagmen.ru/urman/new_lead.php?contact=${this.state.phone}&name=${this.state.name}&pathname=${
                window.location.pathname
            }`,
            {
                method: "get"
            }
        );
        notification.success({
            message: `Получили Вашу заявку`,
            description: "В ближайшее время ответим Вам."
        });
    };

    render() {
        const { h1, img, className = "", children, ...props } = this.props;
        const { formHidden, name, phone } = this.state;
        return (
            <header>
                <div className="post-header__bg" />
                <div className="post-header__inner">
                    <h1>{h1}</h1>
                    <form className="for-desktop post-header__form">
                        <div className={`inner ${formHidden ? "form-hidden" : "form-visible"}`}>
                            <p>Хотите получить консультацию?</p>
                            <p>Оставьте заявку, и мы с Вами свяжемся</p>
                            <Input
                                name="name"
                                className="full-width"
                                value={name}
                                placeholder="Имя"
                                onChange={this.onChange}
                            />
                            <Input
                                name="phone"
                                className="full-width"
                                value={phone}
                                placeholder="Телефон"
                                onChange={this.onChange}
                                type="tel"
                            />
                            <ButtonViolet size="l" onClick={e => this.formHandler(e)}>
                                {formHidden ? "Бесплатная консультация" : "Отправить"}
                            </ButtonViolet>
                        </div>
                    </form>
                </div>
                <style jsx>{`
                    @keyframes scale-img {
                        from {
                            transform: scale(1);
                        }
                        to {
                            transform: scale(1.2);
                        }
                    }
                    header {
                        height: 100vh;
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        text-align: center;
                        overflow: hidden;
                    }
                    .post-header__bg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        background-image: url(${img});
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        filter: brightness(0.4);
                        z-index: -1;
                        animation: scale-img 30s infinite alternate;
                    }
                    h1 {
                        font-size: 40px;
                        color: #fff;
                        margin: 100px 0;
                    }
                    .post-header__form {
                        color: rgba(255, 255, 255, 0.7);
                        overflow: hidden;
                        max-width: 400px;
                    }
                    .inner {
                        transition: all 1s;
                    }
                    .form-hidden {
                        transform: translateY(calc(-1 * (100% - 90px)));
                    }
                    .form-visible {
                        transform: translateY(0);
                    }
                    @media (min-width: 640px) {
                        h1 {
                            font-size: 44px;
                            line-height: 44px;
                        }
                        h2 {
                            font-size: 33px;
                            line-height: 33px;
                        }
                        h3 {
                            font-size: 22px;
                            line-height: 24px;
                        }
                    }

                    @media (min-width: 960px) {
                        h1 {
                            font-size: 48px;
                            line-height: 48px;
                        }
                        h2 {
                            font-size: 36px;
                            line-height: 36px;
                        }
                        h3 {
                            font-size: 24px;
                            line-height: 28px;
                        }
                    }
                    @media (min-width: 1200px) {
                        h1 {
                            font-size: 52px;
                            line-height: 52px;
                        }
                        h2 {
                            font-size: 39px;
                            line-height: 39px;
                        }
                        h3 {
                            font-size: 26px;
                            line-height: 32px;
                        }
                    }
                    @media (min-width: 1366px) {
                        h1 {
                            font-size: 56px;
                            line-height: 56px;
                            margin: 150px 0 100px;
                        }
                        h2 {
                            font-size: 42px;
                            line-height: 42px;
                        }
                        h3 {
                            font-size: 28px;
                            line-height: 36px;
                        }
                    }
                    @media (min-width: 1600px) {
                        h1 {
                            font-size: 60px;
                            line-height: 60px;
                            margin: 200px 0 150px;
                        }
                        h2 {
                            font-size: 45px;
                            line-height: 45px;
                        }
                        h3 {
                            font-size: 30px;
                            line-height: 40px;
                        }
                    }
                    @media (min-width: 1920px) {
                        h1 {
                            font-size: 64px;
                            line-height: 64px;
                            margin: 250px 0 200px;
                        }
                        h2 {
                            font-size: 48px;
                            line-height: 48px;
                        }
                        h3 {
                            font-size: 32px;
                            line-height: 44px;
                        }
                    }
                `}</style>
            </header>
        );
    }
}

export default PostHeader;
