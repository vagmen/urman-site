import React, { Component } from "react";
import { Icon, Form, Input, Checkbox, message, notification } from "antd";
import Link from "next/link";
// import fetch from "isomorphic-unfetch";
import Button from "../components/ui/Button";

const FormItem = Form.Item;
const { TextArea } = Input;

class StartProjectForm extends Component {
    // componentDidMount() {
    //     let amo_forms_params = { id: 463588, hash: "e439ea73ef0e7821a6c70f376be2b142", locale: "ru" };
    //     const script = document.createElement("script");
    //     script.id = "amoforms_script";
    //     script.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js";
    //     script.async = "async";
    //     script.charSet = "utf-8";

    //     document.body.appendChild(script);
    // }
    // componentDidMount() {
    //     (function(d, w, c) {
    //         w.id = 463588;
    //         w.hash = "e439ea73ef0e7821a6c70f376be2b142";
    //         w.locale = "ru";
    //         var s = d.createElement("script");
    //         w[c] =
    //             w[c] ||
    //             function() {
    //                 (w[c].q = w[c].q || []).push(arguments);
    //             };
    //         s.id = "amoforms_script";
    //         s.async = "async";
    //         s.charset = "utf-8";
    //         s.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js";
    //         if (d.body) d.body.appendChild(s);
    //     })(document, window, "AMO");
    // }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log("values", values);

            console.log(/[0123456789]/.test("in 1992"));

            if (!err) {
                this.sendFeedbackInfo(values);
            }
        });
    };

    sendFeedbackInfo = async values => {
        const res = await fetch(
            `http://vagmen.ru/urman/new_lead.php?name=${values.name}&contact=${values.phone}&comment=${
                values.information
            }`,
            {
                method: "get"
            }
        );
        notification.success({
            message: `Рады знакомству, ${values.name}!`,
            description: "В ближайшее время свяжемся с Вами."
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="start-project-section">
                <h3>Напишите свой вопрос</h3>
                <p>
                    Мы бесплатно проконсультируем Вас по любому вопросу, свазянному с оформлением и использованием
                    лесного участка
                </p>
                {/* <div ref={el => (this.instance = el)} /> */}
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator("name", {
                            rules: [
                                {
                                    required: true,
                                    message: "Представьтесь, пожалуйста!"
                                }
                            ]
                        })(
                            <Input
                                // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Ваше имя..."
                                size="large"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator("phone", {
                            rules: [
                                {
                                    required: true,
                                    message: "Заполните, пожалуйста, контактные данные!"
                                },
                                {
                                    pattern: new RegExp(
                                        "^(((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10})|([-a-z0-9!#$%&'*+/=?^_`{|}~]+(.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z]))$"
                                    ),
                                    message: "Исправьте, пожалуйста, контактные данные!"
                                }
                            ]
                        })(
                            <Input
                                // prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Телефон или email"
                                size="large"
                            />
                        )}
                    </FormItem>
                    {/* <FormItem>
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Введите, пожалуйста, адрес электронной почты!',
                                },
                            ],
                        })(
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Ваш E-mail"
                                size="large"
                            />
                        )}
                    </FormItem> */}
                    <FormItem>
                        {getFieldDecorator("information")(
                            <TextArea
                                size="large"
                                autosize={{ minRows: 2, maxRows: 6 }}
                                placeholder="Расскажите немного о вашей задаче"
                            />
                        )}
                    </FormItem>
                    <p className="consent">
                        Нажимая на кнопку ОТПРАВИТЬ, я даю{" "}
                        <Link href="/agreement">
                            <a className="post-a" href="">
                                согласие
                            </a>
                        </Link>{" "}
                        на обработку персональных данных
                    </p>
                    <div className="centered">
                        <Button html="submit">ОТПРАВИТЬ</Button>
                    </div>
                </Form>
                <style jsx>{`
                    .start-project-section {
                        padding: 100px 20px 50px;
                        width: 100%;
                        max-width: 500px;
                        margin: 0 auto;
                    }
                    .centered {
                        margin-bottom: 50px;
                    }
                    .consent {
                        font-size: 11px;
                    }
                    .post-a {
                        font-size: 11px;
                    }
                `}</style>
            </div>
        );
    }
}

const StartProject = Form.create()(StartProjectForm);

export default StartProject;
