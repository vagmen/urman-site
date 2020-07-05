import Layout from "../../../components/Layout.js";
import Error from "next/error";
import { API_URL } from "../../../constants/settings.js";
import styles from "./styles.module.css";
import Carousel from "components/Carousel/Carousel.js";
import Card from "components/Card/Card.js";
import CustomMarkdown from "components/CustomMarkdown/CustomMarkdown.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import FeedbackCard from "components/FeedbackCard/FeedbackCard.js";
import EmployeeCard from "components/EmployeeCard/EmployeeCard.js";
import VideoWrapper from "components/VideoWrapper/VideoWrapper.js";
import classNames from "classnames";
import SectionHeader from "components/SectionHeader/SectionHeader.js";
import StageCard from "components/StageCard/StageCard.js";
import Contacts from "components/Contacts/Contacts.js";

const Index = ({
    currentService,
    otherServices,
    relatedArticles,
    relatedFeedbacks,
    relatedEmployees,
    employeeTitle,
    whyTitle,
    whyList,
    quote,
    stagesTitle,
    stages,
    err,
}) =>
    err ? (
        <Error statusCode={err} />
    ) : (
        <Layout postData={{ title: currentService?.name, description: "" }}>
            <div className={styles.container}>
                <img src={API_URL + currentService.poster.url} alt={currentService.name} className={styles.poster} />
                {/* <div className={styles.contacts}>
                    <Contacts />
                </div> */}
                <PageHeader title={currentService.name} />
                <div className={styles.content}>
                    <CustomMarkdown source={currentService.content} className={styles.description} />
                    {quote && (
                        <div className={styles.quoteCard}>
                            <div className={styles.forMobile}>
                                <FeedbackCard
                                    avatar={quote.avatar}
                                    author={quote.name}
                                    company={quote.position}
                                    title={quote.text}
                                    type="text"
                                />
                            </div>
                            <div className={styles.forDesktop}>
                                <FeedbackCard
                                    author={quote.name}
                                    company={quote.position}
                                    title={quote.text}
                                    type="text"
                                />
                                <img className={styles.avatar} src={quote.avatarV} />
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.why}>
                    <SectionHeader title={whyTitle} />
                    <div className={styles.whyList}>
                        {whyList?.map((item) => (
                            <div
                                key={item.id}
                                className={classNames(styles.whyCard, { [styles.videoCard]: item.video })}
                            >
                                {item.video ? <VideoWrapper url={item.video} /> : <CustomMarkdown source={item.text} />}
                            </div>
                        ))}
                    </div>
                </div>
                <Carousel
                    title={stagesTitle}
                    className={styles.relatedEmployees}
                    grid={{ mobile: 1, tablet: 1, m: 1, l: 1, xl: 1 }}
                    list={stages}
                    renderItem={(props) => <StageCard {...props} />}
                />
                <Carousel
                    title={employeeTitle}
                    className={styles.relatedEmployees}
                    grid={{ mobile: "245px", tablet: "245px", m: 3, l: 3, xl: 4 }}
                    list={relatedEmployees}
                    renderItem={(props) => <EmployeeCard {...props} />}
                />
                <Carousel
                    title="Отзывы"
                    className={styles.feedbackTexts}
                    grid={{ mobile: 1, m: 2, l: 2, xl: 3 }}
                    list={relatedFeedbacks}
                    renderItem={(props) => <FeedbackCard {...props} />}
                />
                <Carousel
                    title="Статьи по услуге"
                    link="/articles"
                    className={styles.relatedArticles}
                    grid={{ mobile: "245px", tablet: "245px", m: 3, l: 3, xl: 4 }}
                    list={relatedArticles?.map((item) => ({
                        title: item.title,
                        img: API_URL + item.posterSmall?.url,
                        id: item.slug,
                        as: `/services/${item.slug}`,
                        href: `/services/${item.slug}`,
                        extra: item.publishedAt,
                    }))}
                    renderItem={(props) => <Card {...props} />}
                />
                <SectionHeader title="Связаться" />
                <Contacts className={styles.marginTop} />
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
            </div>
        </Layout>
    );

Index.getInitialProps = async function ({ query }) {
    const id = query.id;
    let currentService = null;
    let otherServices = [];
    let relatedArticles = [];
    let relatedFeedbacks = [];
    let employeeTitle = "";
    let relatedEmployees = [];
    let whyTitle = "";
    let whyList = [];
    let quote = "";
    let stagesTitle = "";
    let stages = [];
    let error = null;

    const res = await fetch(API_URL + "/services");
    const services = await res.json();
    currentService = services.find((item) => item.slug === id);
    otherServices = services.filter((item) => item.slug !== id);

    if (currentService) {
        relatedArticles = currentService.relatedArticles;
        relatedFeedbacks = currentService.relatedFeedbacks
            .filter((item) => item.quote)
            .map((item) => ({
                ...item,
                title: item.quote,
                img: item.scan ? API_URL + item.scan.url : null,
                avatar: item.avatar ? API_URL + item.avatar.url : null,
                logo: item.logo ? API_URL + item.logo.url : null,
                type: "text",
            }));
        employeeTitle = currentService.employeeTitle;
        relatedEmployees = currentService.relatedEmployees.map((item) => ({
            ...item,
            avatar: API_URL + item.avatar.url,
        }));
        whyTitle = currentService.whyTitle;
        whyList = currentService.whyList.map((item) => ({
            ...item,
        }));
        if (currentService.quoteEmployee) {
            quote = {
                text: currentService.quote,
                position: currentService.quoteEmployee.position,
                name: currentService.quoteEmployee.name,
                avatar: API_URL + currentService.quoteEmployee.avatar.url,
                avatarV: API_URL + currentService.quoteEmployee.avatarV.url,
            };
        }
        stages = currentService.stages.map((item) => ({ ...item, image: API_URL + item.image.url }));
        stagesTitle = currentService.stagesTitle;
    } else {
        error = 404;
    }
    return {
        currentService,
        otherServices,
        relatedArticles,
        relatedFeedbacks,
        relatedEmployees,
        employeeTitle,
        whyTitle,
        whyList,
        quote,
        stagesTitle,
        stages,
        err: error,
    };
};

export default Index;
