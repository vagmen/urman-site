import Layout from "../components/Layout";
import styles from "./styles.module.css";
import We from "../components/We/We";
import Carousel from "components/Carousel/Carousel";
import Card from "components/Card/Card";
import { API_URL } from "../constants/settings";
import FeedbackCard from "components/FeedbackCard/FeedbackCard";
import FaqSection from "components/FaqSection/FaqSection";
import VideoCard from "components/VideoCard/VideoCard";
import { fetchAPI } from "lib/api";
import Section from "components/Section/Section";

const postData = {
    title: "URMAN - Лесные решения",
    description:
        "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка.",
};

const Index = ({
    statistics,
    whoAreWe,
    video,
    videoList,
    benefits,
    articles,
    feedbacks,
    feedbackVideos,
    feedbackTexts,
    faqs,
    services,
}) => (
    <Layout postData={postData} menuItem={""}>
        <div className={styles.mainContainer}>
            {/* <section className={styles.bg}></section> */}
            <Section
                isPageHeader={true}
                title="URMAN - лесные решения"
                content="Помогаем арендаторам лесных участков с оформлением документов. Делаем вашу жизнь проще"
                image={"/images/logo_384x384.png"}
                // image={"../public/images/logo_384x384.png"}
                buttonTitle="Получить консультацию бесплатно"
            />
            <We statistics={statistics} whoAreWe={whoAreWe} benefits={benefits} video={video} />
            <Carousel
                title="Услуги"
                link="/services"
                grid={{ mobile: "245px", tablet: "245px", m: 3, l: 3, xl: 4 }}
                list={services?.map((item) => ({
                    title: item.name,
                    img: API_URL + item.poster?.url,
                    id: item.slug,
                    href: `/services/service?id=${item.slug}`,
                    as: `/services/${item.slug}`,
                }))}
                renderItem={({ title, img, as, href }) => <Card title={title} img={img} as={as} href={href} />}
                // renderItem={({ title, img, as, href }) => <CardNew title={title} img={img} as={as} href={href} />}
            />
            <Carousel
                title="Рекомендательные письма"
                grid={{ mobile: 1, tablet: 3, m: 4, l: 3, xl: 4 }}
                list={feedbacks}
                renderItem={(props) => <FeedbackCard {...props} />}
            />
            {/* <Carousel
                title=""
                className={styles.segments}
                grid={{ mobile: 1, tablet: 3, m: 3, l: 3, xl: 4 }}
                list={segments}
                renderItem={(props) => <Segment {...props} />}
            /> */}
            {/* <Categories categories={categories} className={styles.categories} /> */}
            <Carousel
                title="Видео от клиентов"
                grid={{ mobile: 1, m: 2, l: 2, xl: 2 }}
                list={feedbackVideos}
                renderItem={(props) => <FeedbackCard {...props} />}
            />
            <Carousel
                title="Отзывы"
                grid={{ mobile: 1, m: 2, l: 2, xl: 3 }}
                list={feedbackTexts}
                renderItem={(props) => <FeedbackCard {...props} />}
            />
            <Carousel
                title="Статьи"
                link="/journal"
                grid={{ mobile: "240px", tablet: "240px", m: 3, l: 3, xl: 3 }}
                list={articles}
                renderItem={({ title, img, as, href, extra }) => (
                    <Card title={title} img={img} as={as} href={href} extra={extra} />
                )}
            />
            <Carousel
                title="Видео с нашего канала"
                link="https://www.youtube.com/channel/UCsXvoen-yfZy3fiAPJpBqig/featured"
                grid={{ mobile: 1, tablet: 2, m: 2, l: 2, xl: 3 }}
                list={videoList}
                renderItem={(props) => <VideoCard {...props} />}
            />
            <FaqSection list={faqs} />
            {/* <SectionHeader title="Связаться" />
            <Contacts className={styles.marginTop} /> */}
            {/* <MultiStepForm className={styles.feedbackForm} /> */}
        </div>
    </Layout>
);

Index.getInitialProps = async function () {
    const [statisticsRaw, main, benefits, articlesRaw, categories, faqs, services, feedbacksRaw] = await Promise.all([
        fetchAPI("/statistics?isShowInMainPage=true"),
        fetchAPI("/main"),
        fetchAPI("/benefits"),
        fetchAPI("/articles?showInMainPage=true&_sort=publishedAt:DESC"),
        fetchAPI("/categories"),
        fetchAPI("/faqs?showInMainPage=true"),
        fetchAPI("/services"),
        fetchAPI("/feedbacks?showInMainPage=true"),
    ]);

    const statistics = statisticsRaw.map((item) => ({
        id: item.id,
        count: item.count,
        description: item.description,
    }));
    const { whoAreWe, video, videoList } = main;
    const articles = articlesRaw.map((item) => ({
        id: item.urlId,
        img: API_URL + item.poster.url,
        title: item.title,
        date: item.publishedAt,
        description: item.description,
        as: `/journal/${item.urlId}`,
        href: `/journal/post?id=${item.urlId}`,
        extra: item.description,
    }));
    const allFeedbacks = feedbacksRaw.map((item) => ({
        ...item,
        title: item.quote,
        img: item.scan ? API_URL + item.scan.url : null,
        avatar: item.avatar ? API_URL + item.avatar.url : null,
        logo: item.logo ? API_URL + item.logo.url : null,
    }));
    const feedbacks = allFeedbacks.filter((item) => item.type === "recommendation");
    const feedbackVideos = allFeedbacks.filter((item) => item.type === "video");
    const feedbackTexts = allFeedbacks.filter((item) => item.type === "text");

    return {
        statistics,
        whoAreWe,
        video,
        videoList,
        benefits,
        articles,
        feedbacks,
        feedbackVideos,
        feedbackTexts,
        categories,
        faqs,
        services,
    };
};

export default Index;
