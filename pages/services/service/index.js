import Layout from "../../../components/Layout.js";
import Error from "next/error";
import { API_URL } from "../../../constants/settings.js";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import styles from "./styles.module.css";
import FeedbackForm from "components/FeedbackForm.js";
import Carousel from "components/Carousel/Carousel.js";
import Card from "components/Card/Card.js";
import CustomMarkdown from "components/CustomMarkdown/CustomMarkdown.js";
import PageHeader from "components/PageHeader/PageHeader.js";

const Index = ({ currentService, otherServices, err }) =>
    err ? (
        <Error statusCode={err} />
    ) : (
        <Layout postData={{ title: currentService?.name, description: "" }}>
            <div className={styles.container}>
                <img src={API_URL + currentService.poster.url} alt={currentService.name} className={styles.poster} />
                <PageHeader title={currentService.name} />
                <div className={styles.content}>
                    <CustomMarkdown source={currentService.content} />
                </div>
                <Carousel
                    title="Другие услуги"
                    link="/services"
                    className={styles.otherServices}
                    grid={{ mobile: "245px", tablet: "245px", m: 3, l: 3, xl: 4 }}
                    list={otherServices?.map((item) => ({
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

    const res = await fetch(API_URL + "/services");
    const services = await res.json();
    const currentService = services.find((item) => item.slug === id);
    const otherServices = services.filter((item) => item.slug !== id);
    if (currentService) {
        return {
            currentService,
            otherServices,
        };
    } else {
        return { err: 404 };
    }
};

export default Index;
