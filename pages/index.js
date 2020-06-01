import Layout from "../components/Layout.js";
import FeedbackForm from "../components/FeedbackForm";
import { servicesData } from "../constants/menuData";
import styles from "./styles.module.css";
import We from "../components/We/We.js";
import Carousel from "components/Carousel/Carousel";
import { API_URL } from "../constants/settings.js";
import FeedbackSection from "components/FeedbackSection/FeedbackSection";
import { feedback } from "constants/feedback.js";

const postData = {
    title: "URMAN - Лесные решения",
    description:
        "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка.",
};

const Index = ({ statistics, whoAreWe, benefits, articles }) => (
    <Layout postData={postData} headerOpacity={true} isMainPage={true}>
        <div className={styles.mainContainer}>
            <section className={styles.bg}></section>
            <We statistics={statistics} whoAreWe={whoAreWe} benefits={benefits} className={styles.we} />
            <Carousel
                list={servicesData.map((item) => ({
                    title: item.name,
                    img: item.img,
                    id: item.id,
                    // url: "/services/" + item.id,
                    as: `/services/${item.id}`,
                    href: `/services/${item.id}`,
                }))}
                title="Услуги"
                link="/services"
                className={styles.services}
            />
            <Carousel list={articles} link="/journal" title="Статьи" className={styles.journal} />
            {/* <FeedbackSection className={styles.feedback} list={feedback} /> */}
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

        const articlesJson = await fetch(API_URL + "/articles");
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
    } catch (error) {
        console.log(error);
    }
    return {
        statistics,
        whoAreWe,
        benefits,
        articles,
    };
};

export default Index;
