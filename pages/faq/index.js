import Layout from "components/Layout";
import { API_URL } from "../../constants/settings.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import styles from "./styles.module.css";
import FaqList from "components/FaqList/FaqList.js";

const Index = ({ faqs }) => (
    <Layout>
        <div className={styles.container}>
            <PageHeader title="Вопросы и ответы" />
            <FaqList list={faqs} className={styles.content} />
        </div>
    </Layout>
);

Index.getInitialProps = async function () {
    let faqs = [];
    try {
        const faqsJson = await fetch(API_URL + "/faqs");
        faqs = await faqsJson.json();
    } catch (error) {
        console.log(error);
    }
    return {
        faqs,
    };
};

export default Index;
