import Layout from "components/Layout";
import { API_URL } from "constants/settings";
import PageHeader from "components/PageHeader/PageHeader";
import styles from "./styles.module.css";
import Card from "components/Card/Card";
import { fetchAPI } from "lib/api";

const Index = ({ articles }) => (
    <Layout menuItem="journal" postData={{ title: "Статьи | URMAN.SU", description: "Статьи | URMAN.SU" }}>
        <div className={styles.container}>
            <PageHeader title="Статьи" />
            <div className={styles.grid}>
                {articles?.map((item) => (
                    <Card
                        key={item.urlId}
                        title={item.title}
                        img={API_URL + item.poster?.url}
                        href={"/journal/post?id=" + item.urlId}
                        as={"/journal/" + item.urlId}
                        extra={item.description}
                    />
                ))}
            </div>
        </div>
    </Layout>
);

Index.getInitialProps = async function () {
    const articles = await fetchAPI("/articles?_sort=publishedAt:DESC");
    return {
        articles,
    };
};

export default Index;
