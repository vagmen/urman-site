import React, { Component } from 'react';
import Link from 'next/link';
import { Button, Icon, Form, Input, Checkbox } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

class StartProjectForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="start-project-section">
                <h3>ЕСТЬ ВОПРОСЫ ИЛИ ЗАДАЧИ?</h3>
                <p>Оставьте заявку, чтобы узнать, сможем ли мы Вам помочь.</p>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem label="Представьтесь, пожалуйста">
                        {getFieldDecorator('userName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Введите, пожалуйста, свое имя!',
                                },
                            ],
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                placeholder="Ваше имя..."
                                size="large"
                            />
                        )}
                    </FormItem>
                    <FormItem label="Как с вами связаться?">
                        {getFieldDecorator('phone', {
                            rules: [
                                {
                                    required: true,
                                    message:
                                        'Введите, пожалуйста, номер вашего телефона!',
                                },
                            ],
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="phone"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                placeholder="Введите телефон"
                                size="large"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('email')(
                            <Input
                                prefix={
                                    <Icon
                                        type="mail"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                placeholder="Или E-mail"
                                size="large"
                            />
                        )}
                    </FormItem>
                    <FormItem label="Расскажите немного о вашей задаче:">
                        {getFieldDecorator('about-project')(
                            <TextArea
                                size="large"
                                autosize={{ minRows: 2, maxRows: 6 }}
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
                        })(
                            <Checkbox>
                                Согласен на обработку персональных данных
                            </Checkbox>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">
                            Отправить
                        </Button>
                    </FormItem>
                </Form>
                <style jsx>{`
                    .start-project-section {
                        padding: 50px 20px 20px;
                        width: 100%;
                        max-width: 750px;
                        margin: 0 auto;
                    }
                `}</style>
            </div>
        );
    }
}

const StartProject = Form.create()(StartProjectForm);

export default StartProject;
