import Link from "next/link";
import Layout from "../../components/Layout";
import Services from "../../components/Services";
import FeedbackForm from "components/FeedbackForm";
import { API_URL } from "../../constants/settings.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import styles from "./styles.module.css";
import Card from "components/Card/Card";

const Index = ({ services }) => (
    <Layout menuItem="services">
        <div className={styles.container}>
            <PageHeader title="Услуги" />
            <div className={styles.grid}>
                {services?.map((item) => (
                    <Card
                        key={item.slug}
                        title={item.name}
                        img={API_URL + item.posterSmall?.url}
                        as={"/services/" + item.slug}
                        href={"/services/" + item.slug}
                    />
                ))}
            </div>
            <FeedbackForm
                title="Оставьте заявку"
                subTitle="Мы бесплатно проконсультируем Вас по любому вопросу, связанному с оформлением и использованием лесного участка"
                backgroundImage="/images/4.jpg"
                withComment={true}
            />
        </div>
    </Layout>
);

Index.getInitialProps = async function () {
    let services = [];
    try {
        const servicesJson = await fetch(API_URL + "/services");
        services = await servicesJson.json();
    } catch (error) {
        console.log(error);
    }
    return {
        services,
    };
};

export default Index;
