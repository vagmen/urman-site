import Layout from "../../../components/Layout.js";
import Custom404 from "pages/404";
import { API_URL } from "../../../constants/settings.js";
import styles from "./styles.module.css";
import Carousel from "components/Carousel/Carousel.js";
import Card from "components/Card/Card.js";
import CustomMarkdown from "components/CustomMarkdown/CustomMarkdown.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import { useWindowSize } from "utils/hooks.js";
import Author from "components/Author/Author.js";
import classNames from "classnames";
import { fetchAPI } from "lib/api.js";

const Index = ({ article, relatedServices, relatedArticles, err }) => {
    if (err) {
        return <Custom404 statusCode={err} />;
    }
    const { author } = article;
    const { width } = useWindowSize();
    return (
        <Layout postData={{ title: article?.title, description: article.description }} menuItem="journal">
            <div className={styles.container}>
                <div className={styles.posterWrapper}>
                    <img
                        src={API_URL + article?.poster?.url}
                        alt={article.title}
                        className={styles.poster}
                        loading="lazy"
                    />
                </div>
                <PageHeader title={article.title} />
                <div className={styles.content}>
                    <div className={styles.columns}>
                        <CustomMarkdown source={article.content} />
                        {width >= 1050 && (
                            <div>
                                {relatedArticles && relatedArticles[0] && (
                                    <>
                                        <h3>Другие статьи</h3>
                                        <div className={styles.sidebarList}>
                                            {relatedArticles.map((item) => (
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
                                    </>
                                )}
                                {relatedServices && relatedServices[0] && (
                                    <>
                                        <h3>Связанные услуги</h3>
                                        <div className={styles.sidebarList}>
                                            {relatedServices?.map((item) => (
                                                <Card
                                                    key={item.slug}
                                                    title={item.name}
                                                    img={API_URL + item.poster?.url}
                                                    href={`/services/service?id=${item.slug}`}
                                                    as={`/services/${item.slug}`}
                                                    extra={item.description}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                {width < 1050 && (
                    <>
                        <Carousel
                            title="Другие статьи"
                            link="/journal"
                            className={styles.otherServices}
                            grid={{ mobile: "245px", tablet: "245px", m: 3, l: 3, xl: 4 }}
                            list={relatedArticles?.map((item) => ({
                                title: item.title,
                                img: API_URL + item.poster?.url,
                                id: item.urlId,
                                href: `/journal/post?id=${item.urlId}`,
                                as: `/journal/${item.urlId}`,
                                description: item.description,
                            }))}
                            renderItem={({ title, img, as, href, description }) => (
                                <Card title={title} img={img} as={as} href={href} extra={description} />
                            )}
                        />
                        <Carousel
                            title="Связанные услуги"
                            link="/services"
                            className={styles.otherServices}
                            grid={{ mobile: "245px", tablet: "245px", m: 3, l: 3, xl: 4 }}
                            list={relatedServices?.map((item) => ({
                                title: item.name,
                                img: API_URL + item.poster?.url,
                                id: item.slug,
                                href: `/services/service?id=${item.slug}`,
                                as: `/services/${item.slug}`,
                            }))}
                            renderItem={({ title, img, as, href }) => (
                                <Card title={title} img={img} as={as} href={href} />
                            )}
                        />
                    </>
                )}
                {author && (
                    <div className={classNames(styles.content, styles.container)}>
                        <Author name={author.name} company={author.position} avatar={API_URL + author.avatar.url} />
                    </div>
                )}
            </div>
        </Layout>
    );
};

Index.getInitialProps = async function ({ query }) {
    const article = await fetchAPI("/articles?urlId=" + query.id);

    if (article && article[0]) {
        return {
            article: article[0],
            relatedServices: article[0].relatedServices,
            relatedArticles: article[0].relatedArticles,
        };
    } else {
        return { err: 404 };
    }
};

export default Index;
