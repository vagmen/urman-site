import Layout from "components/Layout";
import { API_URL } from "constants/settings";
import PageHeader from "components/PageHeader/PageHeader";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { Field } from "components/Field/Field";
import Button from "components/Button/Button";
import { useRouter } from "next/router";

const Index = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState("");
    const [amountEditable, setAmountEditable] = useState(true);
    const rou = useRouter();
    const urlAmount = rou.query.amount as string;

    useEffect(() => {
        if (urlAmount) {
            // Если есть значение amount в URL, установите его в состояние компонента
            setAmount(urlAmount);
            setAmountEditable(false);
        }
    }, [urlAmount]);

    const handlePayment = (e) => {
        // Получаем элемент формы
        e.preventDefault(); // Предотвращение обновления страницы
        const form = formRef.current;
        if (!form) {
            return;
        }

        // Вызываем функцию pay из глобальной области видимости
        // @ts-ignore
        if (typeof window.pay === "function") {
            // @ts-ignore
            window.pay(form);
        }
    };

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
                    <input className="payform-tinkoff-row" type="hidden" name="terminalkey" value="1695965989431DEMO" />
                    <input className="payform-tinkoff-row" type="hidden" name="frame" value="false" />
                    <input className="payform-tinkoff-row" type="hidden" name="language" value="ru" />
                    {amountEditable ? (
                        <Field placeholder="Сумма заказа" name="amount" value={amount} onChange={setAmount} />
                    ) : (
                        <input
                            className="payform-tinkoff-row"
                            type="hidden"
                            placeholder="Сумма заказа"
                            name="amount"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                        />
                    )}
                    <Field placeholder="ФИО плательщика" name="name" value={name} onChange={setName} />
                    <Field placeholder="Контактный телефон" name="phone" value={phone} onChange={setPhone} />
                    <Button
                        className="payform-tinkoff-row"
                        onClick={handlePayment}
                        color="primary"
                        fullWidth
                        disabled={name.length === 0 || phone.length === 0}
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
