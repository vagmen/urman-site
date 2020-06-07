import Layout from "../components/Layout.js";
import FeedbackForm from "../components/FeedbackForm";
import { servicesData } from "../constants/menuData";
import styles from "./styles.module.css";
import We from "../components/We/We.js";
import Carousel from "components/Carousel/Carousel";
import Card from "components/Card/Card";
import { API_URL } from "../constants/settings.js";
import { feedback } from "constants/feedback.js";
import FeedbackCard from "components/FeedbackCard/FeedbackCard.js";

const postData = {
    title: "URMAN - Лесные решения",
    description:
        "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка.",
};

const Index = ({ statistics, whoAreWe, benefits, articles, feedbacks, feedbackVideos, feedbackTexts }) => (
    <Layout postData={postData} headerOpacity={true} isMainPage={true} menuItem={""}>
        <div className={styles.mainContainer}>
            <section className={styles.bg}></section>
            <We statistics={statistics} whoAreWe={whoAreWe} benefits={benefits} className={styles.we} />
            <Carousel
                title="Услуги"
                link="/services"
                className={styles.services}
                grid={{ s: "240px", m: 3, l: 3, xl: 4 }}
                list={servicesData.map((item) => ({
                    title: item.name,
                    img: item.img,
                    id: item.id,
                    as: `/services/${item.id}`,
                    href: `/services/${item.id}`,
                    extra: item.extra,
                }))}
                renderItem={({ title, img, as, href, extra }) => (
                    <Card title={title} img={img} as={as} href={href} extra={extra} />
                )}
            />
            <Carousel
                title="Рекомендательные письма"
                className={styles.feedback}
                grid={{ s: 1, m: 2, l: 3, xl: 4 }}
                list={feedbacks}
                renderItem={(props) => <FeedbackCard {...props} />}
            />
            <Carousel
                title="Видео от клиентов"
                className={styles.feedbackVideos}
                grid={{ s: 1, m: 1, l: 1, xl: 1 }}
                list={feedbackVideos}
                renderItem={(props) => <FeedbackCard {...props} />}
            />
            <Carousel
                title="Отзывы"
                className={styles.feedbackTexts}
                grid={{ s: 1, m: 2, l: 2, xl: 3 }}
                list={feedbackTexts}
                renderItem={(props) => <FeedbackCard {...props} />}
            />
            <Carousel
                title="Статьи"
                link="/journal"
                className={styles.journal}
                grid={{ s: "240px", m: 2, l: 2, xl: 3 }}
                list={articles}
                renderItem={({ title, img, as, href, extra }) => (
                    <Card title={title} img={img} as={as} href={href} extra={extra} />
                )}
            />
            <section className={styles.feedbackForm}>
                <FeedbackForm
                    title="Напишите свой вопрос"
                    subTitle="Мы бесплатно проконсультируем Вас по любому вопросу, связанному с оформлением и использованием лесного участка"
                    backgroundImage="/images/4.jpg"
                    withComment={true}
                />
            </section>
        </div>
    </Layout>
);

Index.getInitialProps = async function () {
    let statistics = [];
    let whoAreWe = "";
    let benefits = [];
    let articles = [];
    let feedbacks = [];
    let feedbackVideos = [];
    let feedbackTexts = [];
    try {
        const res = await fetch(API_URL + "/statistics?isShowInMainPage=true");
        const data = await res.json();

        statistics = data.map((item) => ({
            id: item.id,
            count: item.count,
            description: item.description,
        }));

        const mainJson = await fetch(API_URL + "/main");
        const main = await mainJson.json();
        whoAreWe = main.whoAreWe;

        const benefitsJson = await fetch(API_URL + "/benefits");
        benefits = await benefitsJson.json();

        const articlesJson = await fetch(API_URL + "/articles?showInMainPage=true");
        const arts = await articlesJson.json();
        articles = arts.map((item) => ({
            id: item.urlId,
            img: API_URL + item.image[0].url,
            title: item.title,
            date: item.publishedAt,
            description: item.description,
            // url: "/journal/" + item.urlId,
            as: `/journal/${item.urlId}`,
            href: `/journal/post?id=${item.urlId}`,
            extra: item.publishedAt,
        }));

        const allFeedbacks = await fetchFeedbacks();
        feedbacks = allFeedbacks.filter((item) => item.type === "recommendation");
        feedbackVideos = allFeedbacks.filter((item) => item.type === "video");
        feedbackTexts = allFeedbacks.filter((item) => item.type === "text");
        // feedbackTexts = feedback.map((item) => ({ ...item, title: item.header, type: "text" }));
    } catch (error) {
        console.log(error);
    }
    return {
        statistics,
        whoAreWe,
        benefits,
        articles,
        feedbacks,
        feedbackVideos,
        feedbackTexts,
    };
};

const fetchFeedbacks = async () => {
    const feedbacksJson = await fetch(API_URL + "/feedbacks?showInMainPage=true");
    const notPreparedFeedbacks = await feedbacksJson.json();
    return notPreparedFeedbacks.map((item) => ({
        ...item,
        title: item.quote,
        img: item.scan ? API_URL + item.scan.url : null,
        avatar: item.avatar ? API_URL + item.avatar.url : null,
        logo: item.logo ? API_URL + item.logo.url : null,
    }));
};

export default Index;
