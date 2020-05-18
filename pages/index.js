import Link from "next/link";
import Layout from "../components/Layout.js";
import Button from "../components/ui/Button.js";
// import ButtonBorder from "../components/ui/ButtonBorder";
import FeedbackForm from "../components/FeedbackForm";
import Services from "../components/Services";
import { servicesData } from "../constants/menuData";
import styles from "./styles.module.css";
import We from "../components/We/We.js";
import SectionHeader from "components/SectionHeader/SectionHeader";
import Carousel from "components/Carousel/Carousel";
import { API_URL } from "../constants/settings.js";
import fetch from "isomorphic-unfetch";

const postData = {
    title: "URMAN - Лесные решения",
    description:
        "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка.",
};

const Index = ({ statistics, whoAreWe, benefits }) => (
    <Layout postData={postData} headerOpacity={true} isMainPage={true}>
        <div className={styles.mainContainer}>
            <section className={styles.bg}></section>
            <We statistics={statistics} whoAreWe={whoAreWe} benefits={benefits} className={styles.we} />

            <section className="section section__services">
                <SectionHeader title="Услуги" />
                <Carousel list={servicesData.map((item) => ({ title: item.name, img: item.img, id: item.id }))} />
                {/* <p>Выполним Вам за лучшую цену</p>
                <Services items={servicesData} />
                <span className="section__services-button centered">
                    <Button>
                        <Link href="/services" passHref>
                            <a href="">Все услуги</a>
                        </Link>
                    </Button>
                </span> */}
            </section>
            <section className="section section__feedback">
                <FeedbackForm
                    title="Напишите свой вопрос"
                    subTitle="Мы бесплатно проконсультируем Вас по любому вопросу, связанному с оформлением и использованием лесного участка"
                    backgroundImage="/images/4.jpg"
                    withComment={true}
                />
            </section>
        </div>
        <style jsx>{`
            @keyframes appearance-of-text {
                from {
                    opacity: 0;
                    transform: translateY(200px);
                }
                to {
                    opacity: 0.8;
                    transform: translateY(0px);
                }
            }
            @keyframes appearance-of-text-delay-1 {
                from {
                    opacity: 0;
                    transform: translateY(200px);
                }
                33% {
                    opacity: 0;
                    transform: translateY(200px);
                }
                to {
                    opacity: 0.8;
                    transform: translateY(0px);
                }
            }
            @keyframes appearance-of-text-delay-2 {
                from {
                    opacity: 0;
                    transform: translateY(200px);
                }
                50% {
                    opacity: 0;
                    transform: translateY(200px);
                }
                to {
                    opacity: 0.8;
                    transform: translateY(0px);
                }
            }
            h2 {
                font-size: 30px;
            }
            .section__services {
                 {
                    /* padding: 8px 8px 32px; */
                }
                grid-area: s;
            }
            .section__services-title {
                grid-area: sst;
                text-align: center;
                color: rgba(0, 0, 0, 0.8);
                padding: 100px 50px 50px;
                font-weight: 900;
            }
            .section__services-button {
                grid-area: ssb;
                text-align: center;
                padding: 16px;
            }
            .section__feedback {
                grid-area: f;
                z-index: 1;
            }
            @media (min-width: 640px) {
                h2 {
                    font-size: 33px;
                    line-height: 33px;
                }
            }

            @media (min-width: 960px) {
                h2 {
                    font-size: 36px;
                    line-height: 36px;
                }
            }
            @media (min-width: 1200px) {
                h2 {
                    font-size: 39px;
                    line-height: 39px;
                }
                .section__services {
                    padding: 32px 16px;
                }
            }
            @media (min-width: 1366px) {
                h2 {
                    font-size: 42px;
                    line-height: 42px;
                }
            }
            @media (min-width: 1600px) {
                h2 {
                    font-size: 45px;
                    line-height: 45px;
                }
            }
            @media (min-width: 1920px) {
                h2 {
                    font-size: 48px;
                    line-height: 48px;
                }
            }
        `}</style>
    </Layout>
);

Index.getInitialProps = async function () {
    let statistics = [];
    let whoAreWe = "";
    let benefits = [];
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
    } catch (error) {
        console.log(error);
    }
    return {
        statistics,
        whoAreWe,
        benefits,
    };
};

export default Index;
