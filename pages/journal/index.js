import Layout from "components/Layout";
import { API_URL } from "constants/settings.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import styles from "./styles.module.css";
import Card from "components/Card/Card";

function Index({ articles }) {
    return (
        <Layout menuItem="journal">
            <div className={styles.container}>
                <PageHeader title="Статьи" />
                <div className={styles.grid}>
                    {articles?.map((item) => (
                        <Card
                            key={item.urlId}
                            title={item.title}
                            img={API_URL + item.posterSmall?.url}
                            href={"/journal/post?id=" + item.urlId}
                            as={"/journal/" + item.urlId}
                            extra={item.description}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    let articles = [];
    const articlesJson = await fetch(API_URL + "/articles?_sort=publishedAt:DESC");
    articles = await articlesJson.json();
    return {
        props: {
            articles,
        },
    };
}

export default Index;
