import Link from "next/link";
import Layout from "../components/Layout.js";
import { mainColorLight, mainColorMid, greyDark, mainColorDark, grey, colorViolet } from "../constants/colors";
import Button from "../components/ui/Button.js";
import ButtonViolet from "../components/ui/ButtonViolet";
import ButtonBorder from "../components/ui/ButtonBorder";
import FeedbackForm from "../components/FeedbackForm";
import Services from "../components/Services";
import { servicesData } from "../constants/menuData";
import { Component } from "react";

const postData = {
    title: "URMAN - Лесные решения",
    description:
        "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка."
};

// export default () => (
class Index extends Component {
    componentDidMount() {
        const src = "static/images/comanda.webp";
        let img = document.createElement("img");
        img.onload = function() {
            console.log("sdfsdfsdfsdf", src);
            console.log("sdfsdfsdfsdf", src);

            const im = document.querySelector(".main-section__bg");
            im.style.backgroundImage = "url(" + src + ")"; // устанавливаем картинку как фон
        };
        img.src = src;
    }

    render() {
        return (
            <Layout postData={postData} headerOpacity={true}>
                <div className="main-container">
                    <section className="section section__main">
                        <div className="main-section__bg" />
                        <div className="main-section__inner">
                            <h1>С 2010 года упрощаем жизнь нашим клиентам</h1>
                            <h3>
                                Берем на себя юридические, проектные, бюрократические вопросы при оформлении и
                                использовании лесного участка
                            </h3>
                            <span className="for-desktop main-section__button">
                                <ButtonBorder>
                                    <Link href="/about" passHref>
                                        <a href="">Подробнее</a>
                                    </Link>
                                </ButtonBorder>
                            </span>
                        </div>
                    </section>
                    <section className="section section__services">
                        <h2>Услуги</h2>
                        <p>Выполним Вам за лучшую цену</p>
                        <Services items={servicesData} />
                        <span className="section__services-button centered">
                            <Button>
                                <Link href="/services" passHref>
                                    <a href="">Все услуги</a>
                                </Link>
                            </Button>
                        </span>
                    </section>
                    <section className="section section__feedback">
                        <FeedbackForm
                            title="Напишите свой вопрос"
                            subTitle="Мы бесплатно проконсультируем Вас по любому вопросу, связанному с оформлением и использованием лесного участка"
                            backgroundImage="/static/images/4.jpg"
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
                    .main-container {
                        display: grid;
                        grid-auto-rows: 100vh 1fr auto;
                        grid-auto-columns: 1fr;
                        grid-template-areas:
                            "m"
                            "s"
                            "f";
                    }
                    .section__main {
                        grid-area: m;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        text-align: center;
                    }
                    .main-section__bg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        background: #ccc;
                        // background: url("static/images/comanda.webp");
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        filter: brightness(0.4);
                        z-index: -1;
                    }
                    h1 {
                        font-size: 40px;
                    }
                    h2 {
                        font-size: 30px;
                    }
                    h3 {
                        font-size: 20px;
                    }
                    .main-section__inner h1,
                    .main-section__inner h3 {
                        color: #fff;
                        opacity: 0.8;
                    }
                    .main-section__inner h1 {
                        margin-top: 110px;
                        animation: appearance-of-text 1s ease-out;
                    }
                    .main-section__inner h3 {
                        margin-top: 30px;
                        animation: appearance-of-text-delay-1 1.5s ease-out;
                    }
                    .main-section__button {
                        animation: appearance-of-text-delay-2 2s ease-out;
                    }
                    .section__services {
                        padding: 8px 8px 32px;
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
                        h1 {
                            font-size: 44px;
                            line-height: 44px;
                        }
                        h2 {
                            font-size: 33px;
                            line-height: 33px;
                        }
                        h3 {
                            font-size: 22px;
                            line-height: 24px;
                        }
                        .main-section__inner {
                            padding: 0 100px;
                        }
                    }

                    @media (min-width: 960px) {
                        h1 {
                            font-size: 48px;
                            line-height: 48px;
                        }
                        h2 {
                            font-size: 36px;
                            line-height: 36px;
                        }
                        h3 {
                            font-size: 24px;
                            line-height: 28px;
                        }
                        .main-section__inner {
                            padding: 0 200px;
                        }
                    }
                    @media (min-width: 1200px) {
                        h1 {
                            font-size: 52px;
                            line-height: 52px;
                        }
                        h2 {
                            font-size: 39px;
                            line-height: 39px;
                        }
                        h3 {
                            font-size: 26px;
                            line-height: 32px;
                        }
                        .main-section__inner {
                            padding: 0 300px;
                        }
                        .main-section__inner h1 {
                            margin-top: 200px;
                        }
                        .section__services {
                            padding: 32px 16px;
                        }
                    }
                    @media (min-width: 1366px) {
                        h1 {
                            font-size: 56px;
                            line-height: 56px;
                        }
                        h2 {
                            font-size: 42px;
                            line-height: 42px;
                        }
                        h3 {
                            font-size: 28px;
                            line-height: 36px;
                        }
                        .main-section__inner {
                            padding: 0 350px;
                        }
                    }
                    @media (min-width: 1600px) {
                        h1 {
                            font-size: 60px;
                            line-height: 60px;
                        }
                        h2 {
                            font-size: 45px;
                            line-height: 45px;
                        }
                        h3 {
                            font-size: 30px;
                            line-height: 40px;
                        }
                        .main-section__inner {
                            padding: 0 400px;
                        }
                    }
                    @media (min-width: 1920px) {
                        h1 {
                            font-size: 64px;
                            line-height: 64px;
                        }
                        h2 {
                            font-size: 48px;
                            line-height: 48px;
                        }
                        h3 {
                            font-size: 32px;
                            line-height: 44px;
                        }
                        .main-section__inner {
                            padding: 0 500px;
                        }
                    }
                `}</style>
            </Layout>
        );
    }
}
export default Index;
// );
