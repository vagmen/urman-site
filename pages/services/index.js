import Layout from "../../components/Layout";
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
                        href={"/services/service?id=" + item.slug}
                        as={"/services/" + item.slug}
                    />
                ))}
            </div>
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
