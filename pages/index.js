import Layout from "../components/Layout.js";
import styles from "./styles.module.css";
import We from "../components/We/We.js";
import Carousel from "components/Carousel/Carousel";
import Card from "components/Card/Card";
import CardNew from "components/CardNew/CardNew";
import { API_URL } from "../constants/settings.js";
import FeedbackCard from "components/FeedbackCard/FeedbackCard.js";
import FaqSection from "components/FaqSection/FaqSection.js";
import VideoCard from "components/VideoCard/VideoCard.js";
import { useRouter } from "next/router";

const postData = {
    title: "URMAN - Лесные решения",
    description:
        "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка.",
};

function Index({
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
}) {
    const router = useRouter();
    return (
        <Layout postData={postData} headerOpacity={true} isMainPage={true} menuItem={""}>
            {router.isFallback ? (
                <>
                    <p>Loading…</p>
                    <p>Loading…</p>
                    <p>Loading…</p>
                    <p>Loading…</p>
                </>
            ) : (
                <div className={styles.mainContainer}>
                    <section className={styles.bg}></section>
                    <We
                        statistics={statistics}
                        whoAreWe={whoAreWe}
                        benefits={benefits}
                        className={styles.we}
                        video={video}
                    />
                    <Carousel
                        title="Услуги"
                        link="/services"
                        className={styles.services}
                        grid={{ mobile: "245px", tablet: "245px", m: 3, l: 3, xl: 4 }}
                        list={services?.map((item) => ({
                            title: item.name,
                            img: API_URL + item.posterSmall?.url,
                            id: item.slug,
                            href: `/services/service?id=${item.slug}`,
                            as: `/services/${item.slug}`,
                        }))}
                        renderItem={({ title, img, as, href }) => <Card title={title} img={img} as={as} href={href} />}
                        // renderItem={({ title, img, as, href }) => <CardNew title={title} img={img} as={as} href={href} />}
                    />
                    <Carousel
                        title="Рекомендательные письма"
                        className={styles.feedback}
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
                        className={styles.feedbackVideos}
                        grid={{ mobile: 1, m: 2, l: 2, xl: 2 }}
                        list={feedbackVideos}
                        renderItem={(props) => <FeedbackCard {...props} />}
                    />
                    <Carousel
                        title="Отзывы"
                        className={styles.feedbackTexts}
                        grid={{ mobile: 1, m: 2, l: 2, xl: 3 }}
                        list={feedbackTexts}
                        renderItem={(props) => <FeedbackCard {...props} />}
                    />
                    <Carousel
                        title="Статьи"
                        link="/journal"
                        className={styles.journal}
                        grid={{ mobile: "240px", tablet: "240px", m: 3, l: 3, xl: 3 }}
                        list={articles}
                        renderItem={({ title, img, as, href, extra }) => (
                            <Card title={title} img={img} as={as} href={href} extra={extra} />
                        )}
                    />
                    <Carousel
                        title="Видео с нашего канала"
                        link="https://www.youtube.com/channel/UCsXvoen-yfZy3fiAPJpBqig/featured"
                        className={styles.video}
                        grid={{ mobile: 1, tablet: 2, m: 2, l: 2, xl: 3 }}
                        list={videoList}
                        renderItem={(props) => <VideoCard {...props} />}
                    />
                    <FaqSection list={faqs} className={styles.faq} />
                    {/* <SectionHeader title="Связаться" />
            <Contacts className={styles.marginTop} /> */}
                    {/* <MultiStepForm className={styles.feedbackForm} /> */}
                </div>
            )}
        </Layout>
    );
}

export async function getStaticProps(context) {
    const data = {
        statistics: [],
        whoAreWe: "",
        benefits: [],
        articles: [],
        feedbacks: [],
        feedbackVideos: [],
        feedbackTexts: [],
        categories: [],
        faqs: [],
        services: [],
        video: "",
        videoList: [],
    };
    try {
        const resJson = await fetch(API_URL + "/statistics?isShowInMainPage=true");
        const res = await resJson.json();

        data.statistics = res.map((item) => ({
            id: item.id,
            count: item.count,
            description: item.description,
        }));

        const mainJson = await fetch(API_URL + "/main");
        const main = await mainJson.json();
        data.whoAreWe = main.whoAreWe;
        data.video = main.video;
        data.videoList = main.videoList;

        const benefitsJson = await fetch(API_URL + "/benefits");
        data.benefits = await benefitsJson.json();

        const articlesJson = await fetch(API_URL + "/articles?showInMainPage=true&_sort=publishedAt:DESC");
        const arts = await articlesJson.json();
        data.articles = arts.map((item) => ({
            id: item.urlId,
            img: API_URL + item.posterSmall.url,
            title: item.title,
            date: item.publishedAt,
            description: item.description,
            as: `/journal/${item.urlId}`,
            href: `/journal/post?id=${item.urlId}`,
            extra: item.description,
        }));

        const allFeedbacks = await fetchFeedbacks();
        data.feedbacks = allFeedbacks.filter((item) => item.type === "recommendation");
        data.feedbackVideos = allFeedbacks.filter((item) => item.type === "video");
        data.feedbackTexts = allFeedbacks.filter((item) => item.type === "text");
        // feedbackTexts = feedback.map((item) => ({ ...item, title: item.header, type: "text" }));

        const categoriesJson = await fetch(API_URL + "/categories");
        data.categories = await categoriesJson.json();

        const faqsJson = await fetch(API_URL + "/faqs?showInMainPage=true");
        data.faqs = await faqsJson.json();

        const servicesJson = await fetch(API_URL + "/services");
        data.services = await servicesJson.json();
    } catch (error) {
        console.log(error);
    }
    return {
        props: { ...data },
        revalidate: 1,
    };
}

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
