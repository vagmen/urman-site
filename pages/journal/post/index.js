// import Layout from "../../../components/Layout.js";
// import Error from "next/error";
// import { API_URL } from "../../../constants/settings.js";
// import ReactMarkdown from "react-markdown";
// import Link from "next/link";

// const imageRenderer = (props) => <img className="post-img" {...props} />;

// const linkRenderer = (props) => {
//     const parts = props.href.split("urman.su");
//     const isInsiteLink = parts.length > 1 && props.href.indexOf("urman.su") !== -1;
//     const title =
//         (props.children && props.children[0] && props.children[0].props && props.children[0].props.value) || "";
//     return isInsiteLink ? (
//         <Link href={parts.pop()} passHref>
//             <a className="post-a" href="">
//                 {title}
//             </a>
//         </Link>
//     ) : (
//         <a className="post-a" href={props.href} target="_blank" rel="noopener noreferrer">
//             {title}
//         </a>
//     );
// };

// const renderers = {
//     image: imageRenderer,
//     link: linkRenderer,
// };

// const Index = ({ postData, err }) =>
//     postData ? (
//         <Layout postData={postData}>
//             <div className="template-background">
//                 <div className="page-content">
//                     <div className="post">
//                         <h1>{postData.title}</h1>
//                         <img className="post-img" src={postData.image} alt={postData.title} />
//                         <ReactMarkdown source={postData.content} renderers={renderers} />
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     ) : (
//         <Error statusCode={err} />
//     );

// Index.getInitialProps = async function ({ query }) {
//     const id = query.id;

//     const res = await fetch(API_URL + "/articles?urlId=" + id);
//     const data = await res.json();
//     if (data && data[0]) {
//         const currentArticle = data[0];
//         const postData = {
//             id: currentArticle.urlId,
//             image: API_URL + currentArticle.image[0].url,
//             title: currentArticle.title,
//             date: currentArticle.publishedAt,
//             description: currentArticle.description,
//             content: currentArticle.content,
//         };
//         return {
//             postData,
//         };
//     } else {
//         return { err: 404 };
//     }
// };

// export default Index;

import Layout from "../../../components/Layout.js";
import Error from "next/error";
import { API_URL } from "../../../constants/settings.js";
import styles from "./styles.module.css";
import FeedbackForm from "components/FeedbackForm.js";
import Carousel from "components/Carousel/Carousel.js";
import Card from "components/Card/Card.js";
import CustomMarkdown from "components/CustomMarkdown/CustomMarkdown.js";
import PageHeader from "components/PageHeader/PageHeader.js";

const Index = ({ article, relatedServices, relatedArticles, err }) =>
    err ? (
        <Error statusCode={err} />
    ) : (
        <Layout postData={{ title: article?.title, description: "" }}>
            <div className={styles.container}>
                <div className={styles.posterWrapper}>
                    <img src={API_URL + article?.poster?.url} alt={article.title} className={styles.poster} />
                </div>
                <PageHeader title={article.title} />
                <div className={styles.content}>
                    <CustomMarkdown source={article.content} />
                </div>
                <Carousel
                    title="Другие статьи"
                    link="/journal"
                    className={styles.otherServices}
                    grid={{ mobile: "245px", tablet: "245px", m: 3, l: 3, xl: 4 }}
                    list={relatedArticles?.map((item) => ({
                        title: item.title,
                        img: API_URL + item.posterSmall?.url,
                        id: item.urlId,
                        as: `/journal/${item.urlId}`,
                        href: `/journal/${item.urlId}`,
                        date: item.publishedAt,
                    }))}
                    renderItem={({ title, img, as, href, date }) => (
                        <Card title={title} img={img} as={as} href={href} extra={date} />
                    )}
                />
                <Carousel
                    title="Связанные услуги"
                    link="/services"
                    className={styles.otherServices}
                    grid={{ mobile: "245px", tablet: "245px", m: 3, l: 3, xl: 4 }}
                    list={relatedServices?.map((item) => ({
                        title: item.name,
                        img: API_URL + item.posterSmall?.url,
                        id: item.slug,
                        as: `/services/${item.slug}`,
                        href: `/services/${item.slug}`,
                    }))}
                    renderItem={({ title, img, as, href }) => <Card title={title} img={img} as={as} href={href} />}
                />
                <FeedbackForm
                    title="Напишите свой вопрос"
                    subTitle="Мы бесплатно проконсультируем Вас по любому вопросу, связанному с оформлением и использованием лесного участка"
                    backgroundImage="/images/4.jpg"
                    withComment={true}
                />
            </div>
        </Layout>
    );

Index.getInitialProps = async function ({ query }) {
    const id = query.id;

    const res = await fetch(`${API_URL}/articles?urlId=${id}`);

    const article = await res.json();
    if (article && article[0]) {
        return {
            article: article[0],
            relatedServices: article[0].services,
            relatedArticles: article[0].relatedArticles,
        };
    } else {
        return { err: 404 };
    }
};

export default Index;
