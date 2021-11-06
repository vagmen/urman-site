import { useContext, useState } from "react";
import styles from "./RequestModal.module.css";
import classNames from "classnames";
import Button from "components/Button/Button";
import { sendLeadNew } from "utils/api";
import { MdClose } from "react-icons/md";
import * as gtag from "lib/gtag";
import HeaderContext from "contexts/HeaderContext";
import PrivacyCheckbox from "components/PrivacyCheckbox/PrivacyCheckbox";

const RequestModal = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [question, setQuestion] = useState("");
    const [phone, setPhone] = useState("");
    const [email] = useState("");
    const [name, setName] = useState("");
    const [messages, setMessages] = useState([]);
    const { visible, setVisible } = useContext(HeaderContext);

    const handlerSetCurrentStep1 = () => {
        // eslint-disable-next-line no-undef
        ym(51360247, "reachGoal", "formCallBackFromModal");
        gtag.event({
            category: "forms",
            action: "callBackFromModal",
        });
        sendLeadNew({ name, phone, email, comment: question });
        setCurrentStep(3);
        setVisible(false);
        // notification.success({
        //     message: `Получили Вашу заявку`,
        //     description: "В ближайшее время ответим Вам.",
        //     top: 80,
        // });
    };

    const handlerSetCurrentStep2 = () => {
        sendLeadNew({ name, phone, email, comment: question });
        setCurrentStep(2);
    };

    const handlerSendQuestion = async () => {
        sendLeadNew({ name, phone, email, comment: question });

        // await fetch("/api/user", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ name, email }),
        // });

        setCurrentStep(3);
        // setQuestion("");
        // setPhone("");
        // setEmail("");
        // setName("");

        // const successMessage = { type: "success", text: "Ваше сообщение отправлено. Скоро мы свяжемся с Вами." };
        // setMessages([...messages, successMessage]);

        setTimeout(() => {
            const otherMessages = messages.filter((item) => item.type !== "success");
            setMessages(otherMessages);
        }, 5000);
    };

    const successMessages = messages.filter((item) => item.type === "success");
    const errorMessages = messages.filter((item) => item.type === "error");

    return (
        <div className={classNames(styles.container, { [styles.visible]: visible })}>
            <div className={styles.content}>
                <p className={styles.header}>Оставить заявку</p>
                <MdClose color="#333" className={styles.close} onClick={() => setVisible(false)} />
                {currentStep === 0 && (
                    <>
                        <p>Мы перезвоним вам и бесплатно проконсультируем:</p>
                        <div className={styles.inputs}>
                            <input
                                type="tel"
                                name="phone"
                                className={styles.input}
                                placeholder="+7 (xxx) xxx-xx-xx"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                            {/* <input
                                type="email"
                                name="email"
                                className={styles.input}
                                placeholder="E-mail"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            /> */}
                        </div>
                    </>
                )}
                {currentStep === 1 && (
                    <>
                        <p>Получили Вашу заявку. Скоро перезвоним.</p>
                        <p>Дополнительно сообщите, пожалуйста, как к Вам обращаться?</p>
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
                {currentStep === 2 && (
                    <>
                        <p>Очень приятно, {name}!</p>
                        <p>
                            Если не сложно, напишите Ваш вопрос, мы заранее подготовимся к разговору. Так мы быстрее
                            сможем помочь Вам.
                        </p>
                        <textarea
                            name="question"
                            className={styles.question}
                            value={question}
                            onChange={(event) => setQuestion(event.target.value)}
                        />
                    </>
                )}
                {currentStep === 3 && (
                    <>
                        <p>Спасибо за Ваше обращение.</p>
                        <p>В ближайшее время перезвоним Вам. Надеемся на продуктивное сотрудничество.</p>
                    </>
                )}
                <div className={styles.buttonWrapper}>
                    {currentStep === 0 && (
                        <Button
                            className={styles.button}
                            onClick={handlerSetCurrentStep1}
                            color="primary"
                            disabled={phone.length === 0}
                        >
                            Заказать звонок
                        </Button>
                    )}
                    {currentStep === 1 && (
                        <Button
                            className={styles.button}
                            onClick={handlerSetCurrentStep2}
                            color="primary"
                            disabled={name.length === 0}
                        >
                            Представиться
                        </Button>
                    )}
                    {currentStep === 2 && (
                        <Button
                            className={styles.button}
                            onClick={handlerSendQuestion}
                            color="primary"
                            disabled={question.length === 0}
                        >
                            Отправить
                        </Button>
                    )}
                </div>
                <PrivacyCheckbox />
                {successMessages?.length > 0 && (
                    <div className={styles.successMessages}>
                        {successMessages.map((item) => (
                            <p key={item.text}>{item.text}</p>
                        ))}
                    </div>
                )}
                {errorMessages?.length > 0 && (
                    <div>
                        {errorMessages.map((item) => (
                            <p key={item.text}>{item.text}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RequestModal;
