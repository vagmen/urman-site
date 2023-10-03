import Layout from "components/Layout";
import PageHeader from "components/PageHeader/PageHeader";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { Field } from "components/Field/Field";
import Button from "components/Button/Button";
import { useRouter } from "next/router";
import { parsePhoneNumberFromString } from "libphonenumber-js";

// const isValidRussianPhoneNumber = (phoneNumber) => {
//     const russianPhoneRegex = /^(\+7|\+?\d{1,4})\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;

//     return russianPhoneRegex.test(phoneNumber);
// };

const Index = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState("");
    const [amountEditable, setAmountEditable] = useState(true);
    const rou = useRouter();
    const urlAmount = rou.query.amount as string;
    const [validated, setValidated] = useState(false);
    // const [valid, setValid] = useState(false);
    const [errors, setErrors] = useState<{ amount: string[]; name: string[]; phone: string[] }>({
        amount: [],
        name: [],
        phone: [],
    });

    useEffect(() => {
        if (urlAmount) {
            // Если есть значение amount в URL, установите его в состояние компонента
            handleAmountChange(urlAmount);
            // setAmount(urlAmount);
            setAmountEditable(false);
        }
    }, [urlAmount]);

    useEffect(() => {
        const initErrors = () => {
            handleAmountChange("");
            handleNameChange("");
            handlePhoneChange("");
        };

        initErrors();
    }, []);

    const handlePayment = (e) => {
        // Получаем элемент формы
        e.preventDefault(); // Предотвращение обновления страницы
        const form = formRef.current;
        if (!form) {
            return;
        }

        if (validated) {
            // Вызываем функцию pay из глобальной области видимости
            // @ts-ignore
            if (typeof window.pay === "function") {
                // @ts-ignore
                window.pay(form);
            }
        } else {
            setValidated(true);
        }
    };

    const handleAmountChange = (input) => {
        // Валидация ввода для поля "Сумма заказа" (только числа)
        setAmount(input);
        const newErr = [];
        if (input === "") {
            newErr.push("Обязательное поле");
        }
        if (!/^\d+$/.test(input)) {
            newErr.push("Должны быть только цифры");
        }
        setErrors((state) => ({ ...state, amount: newErr }));
    };

    const handleNameChange = (input) => {
        // Валидация ввода для поля "ФИО плательщика" (только буквы)
        setName(input);
        const newErr = [];
        if (input === "") {
            newErr.push("Обязательное поле");
        }
        if (!/^[A-Za-zА-Яа-яЁё\s]+$/.test(input)) {
            newErr.push("Должны быть только буквы");
        }
        setErrors((state) => ({ ...state, name: newErr }));
    };

    const handlePhoneChange = (input) => {
        // Валидация ввода для поля "Контактный телефон" (только телефон)
        setPhone(input);
        const newErr = [];
        if (input === "") {
            newErr.push("Обязательное поле");
        }
        // if (!isValidRussianPhoneNumber(input)) {
        //     // Валидация 10-значных номеров (измените, если нужны другие правила)
        //     newErr.push("Некорректный номер телефона");
        // }

        const phoneNumber = parsePhoneNumberFromString(input, "RU"); // Здесь 'RU' - код страны, замените на нужный вам
        if (!phoneNumber || !phoneNumber.isValid()) {
            newErr.push("Некорректный номер телефона");
        }

        setErrors((state) => ({ ...state, phone: newErr }));
    };

    const valid = errors.amount?.length === 0 && errors.name?.length === 0 && errors.phone?.length === 0;

    const getErrorText = (fieldName: string) => (validated && errors[fieldName]?.length ? errors[fieldName][0] : null);

    return (
        <Layout menuItem="oplata">
            <div>
                <PageHeader
                    className={styles.title}
                    title="Подготовка лесной декларации и отчетов"
                    //     subTitle="Мы предоставляем услугу по подготовке лесной декларации и отчетов. Наши специалисты гарантируют
                    // качественное выполнение работы и соблюдение всех необходимых норм и требований."
                    align="center"
                />
                <form name="payform-tinkoff" className={styles.form} ref={formRef} onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="payform-tinkoff-row"
                        type="hidden"
                        name="terminalkey"
                        value={process.env.TERMINAL_KEY}
                    />
                    <input className="payform-tinkoff-row" type="hidden" name="frame" value="false" />
                    <input className="payform-tinkoff-row" type="hidden" name="language" value="ru" />
                    {amountEditable ? (
                        <Field
                            placeholder="Сумма заказа"
                            name="amount"
                            value={amount}
                            onChange={handleAmountChange}
                            errorText={getErrorText("amount")}
                        />
                    ) : (
                        <input
                            className="payform-tinkoff-row"
                            type="hidden"
                            placeholder="Сумма заказа"
                            name="amount"
                            value={amount}
                            onChange={(event) => handleAmountChange(event.target.value)}
                        />
                    )}
                    <Field
                        placeholder="ФИО плательщика"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        errorText={getErrorText("name")}
                    />
                    <Field
                        placeholder="Контактный телефон"
                        name="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        errorText={getErrorText("phone")}
                    />
                    <Button
                        className="payform-tinkoff-row"
                        onClick={handlePayment}
                        color="primary"
                        fullWidth
                        disabled={validated && !valid}
                    >
                        Оплатить{amountEditable ? "" : ` ${amount} ₽`}
                    </Button>
                </form>
                <PageHeader
                    className={styles.description}
                    // title="Подготовка лесной декларации и отчетов"
                    subTitle="Мы предоставляем услугу по подготовке лесной декларации и отчетов. Наши специалисты гарантируют
                    качественное выполнение работы и соблюдение всех необходимых норм и требований."
                    align="center"
                />
            </div>
        </Layout>
    );
};

// Index.getInitialProps = async function () {
//     try {
//         const res = await fetch(API_URL + "/about");
//         const data = await res.json();
//         return { sections: data.sections };
//         // return { sections: data.sections };
//     } catch (error) {
//         console.log(error);
//     }
// };

export default Index;
