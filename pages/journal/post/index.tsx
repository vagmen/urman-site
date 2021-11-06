import Layout from "components/Layout";
import Custom404 from "pages/404";
import { API_URL } from "constants/settings";
import styles from "./styles.module.css";
import Carousel from "components/Carousel/Carousel";
import Card from "components/Card/Card.js";
import CustomMarkdown from "components/CustomMarkdown/CustomMarkdown";
import PageHeader from "components/PageHeader/PageHeader";
import { useWindowSize } from "utils/hooks.js";
import Author from "components/Author/Author";
import classNames from "classnames";
import { fetchAPI } from "lib/api.js";
import Image from "next/image";
import { IResponseArticle } from "interfaces/response";
import { NextPage } from "next";

interface Props {
    article: IResponseArticle;
    err?: number;
}

const Index: NextPage<Props> = ({ article, err }) => {
    const { width } = useWindowSize();
    if (err) {
        return <Custom404 />;
    }
    const {
        author,
        relatedArticles,
        relatedServices,
        title,
        content,
        description,
        id,
        poster,
        publishedAt,
        showInMainPage,
        urlId,
    } = article;
    return (
        <Layout postData={{ title: title, description: description }} menuItem="journal">
            <div className={styles.container}>
                <div className={styles.posterWrapper}>
                    <Image
                        src={API_URL + poster?.url}
                        alt={title}
                        className={styles.poster}
                        loading="lazy"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={API_URL + poster?.url}
                    />
                </div>
                <PageHeader title={title} />
                <div className={styles.content}>
                    <div className={styles.columns}>
                        <CustomMarkdown source={content} />
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
                                            {relatedServices.map((item) => (
                                                <Card
                                                    key={item.slug}
                                                    title={item.name}
                                                    img={API_URL + item.poster?.url}
                                                    href={`/services/service?id=${item.slug}`}
                                                    as={`/services/${item.slug}`}
                                                    extra={item.content}
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
                            list={
                                relatedArticles
                                    ? relatedArticles.map((item) => ({
                                          title: item.title,
                                          img: API_URL + item.poster?.url,
                                          id: item.urlId,
                                          href: `/journal/post?id=${item.urlId}`,
                                          as: `/journal/${item.urlId}`,
                                          extra: item.description,
                                      }))
                                    : []
                            }
                            renderItem={(props) => <Card {...props} />}
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
    const article: IResponseArticle[] = await fetchAPI("/articles?urlId=" + query.id);

    return { article: article && article[0], err: 404 };
};

export default Index;
