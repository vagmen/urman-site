import React, { Component } from "react";
import { notification } from "antd";
import Link from "next/link";
import ButtonViolet from "./ui/ButtonViolet";
import Input from "./ui/Input";

class FeedbackForm extends Component {
    state = {
        formHidden: true,
        name: "",
        phone: "",
        comment: ""
    };

    onChange = ({ name, value }) => {
        this.setState({ [name]: value });
    };

    formHandler = e => {
        e.preventDefault();
        const { formHidden, name, phone } = this.state;
        const { isHidable } = this.props;

        if (formHidden && isHidable) {
            this.setState({ formHidden: false });
        } else if (name === "" || phone === "") {
            notification.warning({
                message: `Внимание`,
                description: "Заполните, пожалуйста, поля"
            });
        } else {
            this.sendFeedbackInfo();
            this.setState({ name: "", phone: "", comment: "" });
        }
    };

    sendFeedbackInfo = async () => {
        const { formHidden, name, phone, comment } = this.state;
        const res = await fetch(
            `http://vagmen.ru/urman/send.php?email=${phone}&name=${name}&comment=${comment}&pathname=${
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
        const { formHidden, name, phone, comment } = this.state;
        const { isHidable, title, subTitle, backgroundImage, withComment, withFocus, hideTitleInMobile } = this.props;
        return (
            <form className="post-header__form">
                <div className="bg" />
                <div className={`inner ${formHidden && isHidable ? "form-hidden" : "form-visible"}`}>
                    {title && <p className={`title ${hideTitleInMobile && "for-desktop"}`}>{title}</p>}
                    {subTitle && <p className={`sub-title ${hideTitleInMobile && "for-desktop"}`}>{subTitle}</p>}
                    <Input name="name" className="full-width" value={name} placeholder="Имя" onChange={this.onChange} />
                    <Input
                        name="phone"
                        className="full-width"
                        value={phone}
                        placeholder="Телефон"
                        onChange={this.onChange}
                        type="tel"
                    />
                    {withComment && (
                        <Input
                            name="comment"
                            className="full-width"
                            value={comment}
                            placeholder="Расскажите немного о Вашей задаче"
                            onChange={this.onChange}
                            type="text"
                        />
                    )}
                    <ButtonViolet size="l" onClick={e => this.formHandler(e)}>
                        {formHidden && isHidable ? "Бесплатная консультация" : "Отправить"}
                    </ButtonViolet>
                </div>
                <style jsx>{`
                    .post-header__form {
                        color: rgba(255, 255, 255, 0.9);
                        overflow: hidden;
                        width: 100%;
                        position: relative;
                         {
                            /* filter: brightness(0.4); */
                        }
                        padding: 32px 8px 8px;
                    }
                    .bg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: url(${backgroundImage}) 100% 100% no-repeat; /* Добавляем фон */
                        background-position: center center;
                        background-size: cover;
                        filter: brightness(0.7);
                    }
                    .inner {
                        transition: all 1s;
                        max-width: 400px;
                        margin: 0 auto;
                        text-align: center;
                    }
                    .inner p {
                        text-align: center;
                    }
                    .inner .title {
                        font-size: 32px;
                    }
                    .form-hidden {
                        transform: translateY(calc(-1 * (100% - 80px)));
                    }
                    .form-visible {
                        transform: translateY(0);
                    }
                `}</style>
            </form>
        );
    }
}

export default FeedbackForm;
