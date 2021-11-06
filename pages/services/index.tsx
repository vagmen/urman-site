import Layout from "../../components/Layout";
import { API_URL } from "../../constants/settings.js";
import PageHeader from "components/PageHeader/PageHeader.tsx";
import styles from "./styles.module.css";
import Card from "components/Card/Card";
import { fetchAPI } from "lib/api";
import { errorHandler } from "utils";

const Index = ({ services, statusCode }) => {
    if (statusCode) {
        return errorHandler;
    }
    return (
        <Layout menuItem="services">
            <div className={styles.container}>
                <PageHeader title="Услуги" />
                <div className={styles.grid}>
                    {services?.map((item) => (
                        <Card
                            key={item.slug}
                            title={item.name}
                            img={API_URL + item.poster?.url}
                            href={"/services/service?id=" + item.slug}
                            as={"/services/" + item.slug}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

Index.getInitialProps = async function () {
    const result = await fetchAPI("/services");
    return {
        services: result || [],
    };
};

export default Index;
