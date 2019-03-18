import React, { Component } from "react";
import { Icon, Form, Input, Checkbox, message } from "antd";
import Link from "next/link";
import Button from "../components/ui/Button";

const FormItem = Form.Item;
const { TextArea } = Input;

class StartProjectForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.sendFeedbackInfo(values);
            }
        });
    };

    sendFeedbackInfo = async savedData => {
        const res = await fetch("https://helpforest.azurewebsites.net/SendFeedbackInfo", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(savedData)
        });
        const data = await res.json();
        if (data) message.success("Мы отправили письмо с вложенной формой на вашу почту");
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
                <Form onSubmit={this.handleSubmit}>
                    {/* <FormItem>
                        {getFieldDecorator("name", {
                            rules: [
                                {
                                    required: true,
                                    message: "Введите, пожалуйста, свое имя!"
                                }
                            ]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                placeholder="Ваше имя..."
                                size="large"
                            />
                        )}
                    </FormItem> */}
                    {/* <FormItem>
                        {getFieldDecorator("phone", {
                            rules: [
                                {
                                    required: true,
                                    message: "Введите, пожалуйста, номер вашего телефона!"
                                }
                            ]
                        })(
                            <Input
                                prefix={<Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />}
                                placeholder="Номер телефона"
                                size="large"
                            />
                        )}
                    </FormItem> */}
                    <FormItem>
                        {getFieldDecorator("email", {
                            rules: [
                                {
                                    required: true,
                                    message: "Введите, пожалуйста, адрес электронной почты!"
                                }
                            ]
                        })(
                            <Input
                                prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                                placeholder="Ваш E-mail"
                                size="large"
                            />
                        )}
                    </FormItem>
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
