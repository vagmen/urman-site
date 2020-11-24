import Layout from "../../components/Layout";
import { API_URL } from "../../constants/settings.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import styles from "./styles.module.css";
import Card from "components/Card/Card";
import Error from "pages/_error";

const Index = ({ services, errorCode, errorText }) => {
    if (errorCode) {
        return <Error statusCode={errorCode} title={errorText} />;
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
    const servicesJson = await fetch(API_URL + "/services");
    const services = await servicesJson.json();
    const errorCode = servicesJson.status > 200 ? servicesJson.status : false;
    const errorText = servicesJson.statusText || false;
    return {
        services: services || [],
        errorCode,
        errorText,
    };
};

export default Index;
