import Layout from "components/Layout";
import { API_URL } from "../../constants/settings.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import styles from "./styles.module.css";
import FaqList from "components/FaqList/FaqList.js";
import Error from "pages/_error";

const Index = ({ faqs, errorCode, errorText }) => {
    if (errorCode) {
        return <Error statusCode={errorCode} title={errorText} />;
    }
    return (
        <Layout>
            <div className={styles.container}>
                <PageHeader title="Вопросы и ответы" />
                <FaqList list={faqs} className={styles.content} />
            </div>
        </Layout>
    );
};

Index.getInitialProps = async function () {
    const faqsJson = await fetch(API_URL + "/faqs");
    const faqs = await faqsJson.json();
    const errorCode = faqsJson.status > 200 ? faqsJson.status : false;
    const errorText = faqsJson.statusText || false;
    return {
        faqs: faqs || [],
        errorCode,
        errorText,
    };
};

export default Index;
