import React, { Component } from 'react';
import Link from 'next/link';
import { Button, Icon, Form, Input, Checkbox, message } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class StartProjectForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.sendFeedbackInfo(values);
            }
        });
    };

    sendFeedbackInfo = async (savedData) => {
        const res = await fetch('https://helpforest.azurewebsites.net/SendFeedbackInfo', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(savedData),
        });
        const data = await res.json();
        if (data) message.success('Мы отправили письмо с вложенной формой на вашу почту');
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="start-project-section">
                <h3>ЕСТЬ ВОПРОСЫ ИЛИ ЗАДАЧИ?</h3>
                <p>Оставьте заявку, чтобы узнать, сможем ли мы Вам помочь.</p>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Введите, пожалуйста, свое имя!',
                                },
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Ваше имя..."
                                size="large"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('phone', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Введите, пожалуйста, номер вашего телефона!',
                                },
                            ],
                        })(
                            <Input
                                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Номер телефона"
                                size="large"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('email')(
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="E-mail"
                                size="large"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('information')(
                            <TextArea
                                size="large"
                                autosize={{ minRows: 2, maxRows: 6 }}
                                placeholder="Расскажите немного о вашей задаче"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('checkbox', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Требуется ваше согласие',
                                },
                            ],
                        })(<Checkbox>Согласен на обработку персональных данных</Checkbox>)}
                    </FormItem>
                    <FormItem className="centered">
                        <Button type="primary" htmlType="submit">
                            Отправить
                        </Button>
                    </FormItem>
                </Form>
                <style jsx>{`
                    .start-project-section {
                        padding: 100px 20px 50px;
                        width: 100%;
                        max-width: 500px;
                        margin: 0 auto;
                    }
                `}</style>
            </div>
        );
    }
}

const StartProject = Form.create()(StartProjectForm);

export default StartProject;
