import React, { useState } from "react";
import styles from "./MultiStepForm.module.css";
import classNames from "classnames";
import SectionHeader from "components/SectionHeader/SectionHeader";
import Button from "components/Button/Button";
import Steps from "components/Steps/Steps";

const MultiStepForm = ({ className }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [question, setQuestion] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [messages, setMessages] = useState([]);

    const handlerSetCurrentStep1 = () => {
        setCurrentStep(1);
    };

    const handlerSetCurrentStep2 = () => {
        setCurrentStep(2);
    };

    const handlerSendQuestion = () => {
        setCurrentStep(0);
        setQuestion("");
        setPhone("");
        setEmail("");
        setName("");
        const successMessage = { type: "success", text: "Ваше сообщение отправлено. Скоро мы свяжемся с Вами." };
        setMessages([...messages, successMessage]);

        setTimeout(() => {
            const otherMessages = messages.filter((item) => item.type !== "success");
            setMessages(otherMessages);
        }, 5000);
    };

    const successMessages = messages.filter((item) => item.type === "success");
    const errorMessages = messages.filter((item) => item.type === "error");

    return (
        <div className={classNames(className, styles.container)}>
            <SectionHeader title="Есть вопрос?" />
            <div className={styles.content}>
                <Steps
                    list={[{ title: "Вопрос" }, { title: "Контакты" }, { title: "Имя" }]}
                    current={currentStep}
                    className={styles.mobileSteps}
                />
                {currentStep === 0 && (
                    <>
                        <p>Задайте здесь Ваш вопрос и мы на него обязательно ответим:</p>
                        <textarea
                            type="text"
                            name="question"
                            className={styles.question}
                            value={question}
                            onChange={(event) => setQuestion(event.target.value)}
                        />
                    </>
                )}
                {currentStep === 1 && (
                    <>
                        <p>
                            Введите номер Вашего телефона или адрес электронной почты, чтобы мы могли с Вами связаться:
                        </p>
                        <div className={styles.inputs}>
                            <input
                                type="tel"
                                name="phone"
                                className={styles.input}
                                placeholder="+7 (xxx) xxx-xx-xx"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                            <input
                                type="email"
                                name="email"
                                className={styles.input}
                                placeholder="E-mail"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                    </>
                )}
                {currentStep === 2 && (
                    <>
                        <p>Как к Вам обращаться?</p>
                        <input
                            type="text"
                            name="name"
                            className={styles.name}
                            placeholder="Введите Ваше имя"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </>
                )}
                <div className={styles.buttonWrapper}>
                    {currentStep === 0 && (
                        <Button
                            title="Дальше"
                            className={styles.button}
                            onClick={handlerSetCurrentStep1}
                            color="primary"
                        />
                    )}
                    {currentStep === 1 && (
                        <Button
                            title="Дальше"
                            className={styles.button}
                            onClick={handlerSetCurrentStep2}
                            color="primary"
                        />
                    )}
                    {currentStep === 2 && (
                        <Button
                            title="Отправить"
                            className={styles.button}
                            onClick={handlerSendQuestion}
                            color="primary"
                        />
                    )}
                    <Steps
                        list={[{ title: "Вопрос" }, { title: "Контакты" }, { title: "Имя" }]}
                        current={currentStep}
                        className={styles.desktopSteps}
                    />
                </div>
                {successMessages?.length > 0 && (
                    <div className={styles.successMessages}>
                        {successMessages.map((item) => (
                            <p key={item.text}>{item.text}</p>
                        ))}
                    </div>
                )}
                {errorMessages?.length > 0 && (
                    <div className={styles.errorMessages}>
                        {errorMessages.map((item) => (
                            <p key={item.text}>{item.text}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiStepForm;